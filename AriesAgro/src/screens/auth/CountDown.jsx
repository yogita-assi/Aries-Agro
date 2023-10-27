import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    AppState
} from 'react-native';
import { BLUE } from '../../shared/constants/color';
let subscription = null;
class CountDown extends React.PureComponent {
    state = {
        until: Math.max(this.props.until, 0),
        lastUntil: null,
        wentBackgroundAt: null,
    };
    constructor(props) {
        super(props);
        this.timer = setInterval(this.updateTimer, 1000);
    }
    componentDidMount() {
        subscription = AppState.addEventListener('change', this._handleAppStateChange);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        subscription && subscription.remove();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.until !== prevProps.until || this.props.id !== prevProps.id) {
            this.setState({
                lastUntil: prevState.until,
                until: Math.max(prevProps.until, 0)
            });
        }
    }
    _handleAppStateChange = currentAppState => {
        const { until, wentBackgroundAt } = this.state;
        if (currentAppState === 'active' && wentBackgroundAt && this.props.running) {
            const diff = (Date.now() - wentBackgroundAt) / 1000.0;
            this.setState({
                lastUntil: until,
                until: Math.max(0, parseInt(until - diff))
            });
        }
        if (currentAppState === 'background') {
            this.setState({ wentBackgroundAt: Date.now() });
        }
    }
    getTimeLeft = () => {
        const { until } = this.state;
        return {
            seconds: until <= 9 ? '0' + until % 60 : until % 60,
            minutes: '0' + parseInt(until / 60, 10) % 60,
            hours: parseInt(until / (60 * 60), 10) % 24,
            days: parseInt(until / (60 * 60 * 24), 10),
        };
    };
    updateTimer = () => {
        if (this.state.lastUntil === this.state.until || !this.props.running) {
            return;
        }
        if (this.state.until === 1 || (this.state.until === 0 && this.state.lastUntil !== 1)) {
            if (this.props?.onFinish) {
                this.props.onFinish();
            }
            if (this.props?.onChange) {
                this.props.onChange(this.state.until);
            }
        }
        if (this.state.until === 0) {
            this.setState({ lastUntil: 0, until: 0 });
        } else {
            if (this.props?.onChange) {
                this.props.onChange(this.state.until);
            }
            this.setState({
                lastUntil: this.state.until,
                until: Math.max(0, this.state.until - 1)
            });
        }
    };
    renderDigit = (d) => {
        const { size } = this.props;
        return (
            <Text style={[
                styles.digitTxt,
                { fontSize: size, color: BLUE },
            ]}>
                {d}
            </Text>
        );
    };
    renderSecondDigit = (minutes, d) => {
        const { size } = this.props;
        return (
            <Text style={[
                styles.digitTxt,
                { fontSize: size, color: BLUE },
            ]}>
                {d < 10 && minutes > 0 ? '0' + d : d}
            </Text>
        );
    };
    renderSeparator = () => {
        const { size } = this.props;
        return (
            <Text style={[
                styles.separatorTxt,
                { fontSize: size },
            ]}>
                {':'}
            </Text>
        );
    };
    renderCountDown = () => {
        const { timeToShow, showSeparator, labelText } = this.props;
        const { minutes, seconds } = this.getTimeLeft();
        const Component = this.props.onPress ? TouchableOpacity : View;
        return (
            <Component
                style={[styles.timeCont]}
                onPress={this.props?.onPress}
            >
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.labelText}>
                        {labelText}
                    </Text>
                    <Text style={styles.time}>
                        {timeToShow.includes('M') ? this.renderDigit(minutes) : null}
                        {showSeparator && timeToShow.includes('M') && timeToShow.includes('S') ? this.renderSeparator() : null}
                        {timeToShow.includes('S') ? this.renderSecondDigit(minutes, seconds) : null}
                    </Text>
                    <Text style={styles.secondsText}> Seconds again</Text>
                </View>
            </Component>
        );
    };
    render() {
        return (

            !this.props.sessionTimeOut ? <View>
                {this.renderCountDown()}
            </View> : null


        );
    }
}
const styles = StyleSheet.create({
    timeCont: {
        flexDirection: 'row',
        flex: null,
        marginTop: 15,
    },
    separatorTxt: {
        backgroundColor: 'transparent',
    },
    labelText: {
        marginRight: 5,
        color: BLUE,
        fontSize: 14,
        lineHeight: 20,
    },
    secondsText: {
        marginRight: 5,
        color: BLUE,
        fontSize: 14,
        lineHeight: 20,
    },
    time: {
        fontSize: 16,
        lineHeight: 20,
    }
});
export default CountDown;
export { CountDown };
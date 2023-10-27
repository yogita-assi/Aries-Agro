
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import CustomFontText from '../fontfamily/CustomFontText';
import { VERYDARK_GRAYISHRED, CYAN_BLUE, WHITE } from '../constants/color';
import BackButtonIcon from '../../svg/BackButtonIcon';
import { FONT_EIGHTEEN } from '../constants/FontConstant';
import { IconButton } from 'react-native-paper';
import SettingIcon from '../../svg/SettingIcon';

const useStyles = (props: any) => StyleSheet.create({
    headerText: {
        fontSize: FONT_EIGHTEEN,
        fontWeight: '600',
        lineHeight: 33,
        color: CYAN_BLUE,
        marginHorizontal: 5,
    },
    backIconContainer: {
        backgroundColor: VERYDARK_GRAYISHRED,
        borderRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    topHeader: {
        paddingVertical: 8,
        flexDirection: 'row',
        backgroundColor: WHITE,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    rightIcon: {
        flexDirection: 'column',
        alignSelf: 'center'
    },
    viewSection: {
        flexDirection: 'row',
        flex: 1,
    },
    iconView: {
        flexDirection: 'row',
        paddingLeft: 15,
        alignItems: 'center',
    },
    scanView: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
});
const TopHeaderFixed = (props: any) => {
    const styles = useStyles(props);
    return (
        <View style={styles.topHeader}>
            <View style={styles.viewSection}>
                <View style={styles.iconView}>
                    {!!props.leftIcon &&
                        <Pressable onPress={() => props.onGoBack()}>
                            <BackButtonIcon width={25} height={33} />
                        </Pressable>}
                    {!!props?.rightIconType && <View style={styles.rightIcon}>
                        <Pressable onPress={() => props?.onSettingScreen()}>
                            <IconButton icon={props?.rightIcon} size={props?.rightIconSize} iconColor={VERYDARK_GRAYISHRED} />
                        </Pressable>
                    </View>}
                    <View>
                        <CustomFontText style={styles.headerText}>{props.headerTxt}</CustomFontText>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    {props?.settingIcon && <View style={styles.scanView}>
                        <Pressable style={{ marginRight: 15 }} onPress={() => props?.settingNavigation()}>
                            <SettingIcon height={18} width={18} />
                        </Pressable>
                    </View>}
                    {props.logoutIconType && (
                        <View style={styles.scanView}>
                            <Pressable style={{ marginRight: 15 }} onPress={() => props?.logoutNavigation(true)}>
                                <IconButton icon={props?.logoutIcon} size={props?.logoutIconSize} iconColor={VERYDARK_GRAYISHRED} />
                            </Pressable>
                        </View>
                    )}
                    {props.donwloadIconType && (
                        <View style={styles.scanView}>
                            <Pressable style={{ marginRight: 15 }} onPress={() => props?.donwloadNavigation(true)}>
                                <IconButton icon={props?.donwloadIcon} size={props?.downloadIconSize} iconColor={VERYDARK_GRAYISHRED} />
                            </Pressable>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};
export default TopHeaderFixed;
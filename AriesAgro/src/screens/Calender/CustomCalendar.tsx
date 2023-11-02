import moment from 'moment';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomFontText from '../../shared/fontfamily/CustomFontText';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import BelowIcon from '../../svg/BelowIcon';
import { Calendarstyle } from './CustomCalendarStyle';
import CustomTextInput from '../../components/inputs/CustomTextInput';
const Calendar = ({ placeTitle, id, title, value, onChange, errorMsg, minimumDate, maximumDate, titleText, disable, viewStyle, titleStyle, style }: any) => {
    const [isVisible, setIsVisible] = useState(false);

    const onValueChange = (date: any) => {
        setIsVisible(false);
        onChange(id, date, title);
    };

    const onOpenCalendar = () => {
        setIsVisible(true);
    };

    const onCancel = () => {
        setIsVisible(false);
    };
    return (
        <View style={viewStyle}>
            {title && <TextArchivoBold style={Calendarstyle.dateTitleText}>{title}</TextArchivoBold>}
            {!titleText && <View style={Calendarstyle.dateView}>
                <Pressable style={({ pressed }) => [Calendarstyle.dateView || {}, { opacity: pressed ? 0.2 : 1 }]} onPress={() => id ? onChange() : onOpenCalendar()} disabled={disable}>
                    <TextArchivoBold style={Calendarstyle.dateTitleText}>{value ? `${moment(value).format('DD/MM/YYYY')}` : id}</TextArchivoBold>
                    <BelowIcon height={15} width={15} />
                </Pressable>
            </View>}
            <View>
                {titleText && <CustomTextInput
                    mode="outlined"
                    placeholder={placeTitle}
                    editable={false}
                    maxLength={50}
                    style={style}
                    value={value ? `${moment(value).format('DD MMM YYYY')}` : ""}
                    showCalander={true}
                    right="calendar"
                    onOpenCalender={onOpenCalendar}
                    disabled={disable}
                />}
            </View>
            {titleText && <TextArchivoBold style={titleStyle}>{titleText}</TextArchivoBold>}
            {!disable && (
                <DateTimePickerModal
                    isVisible={isVisible}
                    date={value ? value : new Date()}
                    mode="date"
                    style={Calendarstyle.inputText}
                    onConfirm={onValueChange}
                    onCancel={onCancel}
                    minimumDate={minimumDate}
                    maximumDate={maximumDate}
                />
            )}
            {errorMsg && (
                <CustomFontText style={Calendarstyle.erroFormTxt}>{errorMsg}</CustomFontText>
            )}
        </View>
    );
};

export default Calendar;
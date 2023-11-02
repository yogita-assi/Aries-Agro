import { StyleSheet } from 'react-native'
import { BGRED, BLACK, GRAY_SHADE, LIGHTT_GRAY, LIGHT_SILVER } from '../../shared/constants/color'
import { FONTFAMILY_ISTOK_WEB } from '../../shared/constants/FontConstant'

export const Calendarstyle = StyleSheet.create({
    dateTitleText: {
        color: GRAY_SHADE,
        lineHeight: 17.17,
        fontFamily: FONTFAMILY_ISTOK_WEB,
        fontWeight: '400',
        fontSize: 12,
        marginEnd: 5
    },
    inputText: {
        height: 40,
        fontSize: 14,
        lineHeight: 20,
    },
    erroFormTxt: {
        color: BGRED,
        fontSize: 8,
        lineHeight: 13
    },
    dateView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    openCalendarStyle: {
        marginStart: 5
    }
}) 
import { StyleSheet } from "react-native";
import { ArchivoBold, BLACK, MDBLUE, WHITE } from "../../shared/constants/color";
import { FONT_FIFTEEN, FONT_FOURTEEN, FONT_SIXTENN, FONT_TWENTY, FONT_TWENTYFOUR } from "../../shared/constants/FontConstant";

export const accountStyle = StyleSheet.create({
    mainCardView: {
        flex: 1,
        backgroundColor: WHITE
    },
    txtShopName: {
        fontSize: FONT_SIXTENN,
        fontFamily: ArchivoBold,
        lineHeight: 30,
        color: BLACK,
        marginVertical: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    txtAccountName: {
        fontSize: FONT_FIFTEEN,
        fontFamily: ArchivoBold,
        color: BLACK,
        lineHeight: 20,
        marginHorizontal: 10,
    },
    mainAccountDetails: {
        flexDirection: 'row', marginHorizontal: 30, marginTop: 20
    },
    accountDetailsName: {
        flexDirection: 'row', marginHorizontal: 30, marginTop: 10
    },
    txtButton: {
        borderWidth: 1,
        width: 150,
        alignSelf: 'center',
        padding: 10,
        marginTop: 20,
        backgroundColor: WHITE,
        borderColor: WHITE,
        elevation: 8,
        borderRadius: 8
    },
    txtDeleteProfile: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: MDBLUE,
    },
});
import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { WHITE } from '../../shared/constants/color';


export const FarmerDashboardStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE
    },
    mainView: {
        marginHorizontal: 20,
        flex: 1
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    inputText: {
        height: 40,
        fontSize: 14,
        lineHeight: 20,
        width: '100%',
    },
    AddUserbtnStyle: {
        marginVertical: 5,
    },
  
})
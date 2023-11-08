import React from "react";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../guards/AuthNavigator";
import TextArchivoBold from "../../../shared/fontfamily/TextArchivoBold";
import CustomTextInput from "../../../components/inputs/CustomTextInput";
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DealerScreenStyle } from "./DealerScreenStyle";
import CustomButton from "../../../components/button/CustomButton";

const GenerateInquiry = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={DealerScreenStyle.mainInquiryView} >
            <View style={DealerScreenStyle.textInquiry}>
                <CustomTextInput multiline style={DealerScreenStyle.textEnterView}>Details</CustomTextInput>
            </View>
            <CustomButton label={"Submit"} />
        </SafeAreaView>
    )
}

export default GenerateInquiry
import React, { useState } from 'react';
import { StatusBar, View, StyleSheet, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BLACK, COURSE_COLOR, JPURPLE, WHITE } from '../../shared/constants/color';
import { boxStyle } from '../../shared/styles/screenStyles/common-style';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../guards/AuthNavigator';
import { flatlistView, renderViewChild } from '../../shared/constants/ListUI';
import TopHeaderFixed from '../../shared/constants/TopHeaderFixed';
import Pressable from '../../shared/constants/Pressable';
import BackButtonIcon from '../../svg/BackButtonIcon';
import { productStyle } from '../../shared/styles/productStyle';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import IntroSliderFirstImage from '../../svg/IntrosliderSvg/IntroSliderFirstImage';
import { productData } from '../../shared/constants/strings';

const ProductDetailsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [searchText, setSearchText] = useState("");
    const [searchValue, setSearchValue] = useState([]);
    const handleSearch = async (text: any) => {
        setSearchText(text);
        if (text != null && text.length >= 1) {
            const payload = {
                "category": null,
                "search": text || "null",
                "page": 1,
                "pagesize": 10
            }
            // const response = await api.searchCourse(payload);
            // setSearchValue(response?.data?.dataList);
        } else {
            console.log("error");

        }
    }
    const renderItem = (item: any) => {
        return (
            <View
                style={productStyle.rightLeftBoxContainer}>
                <View style={productStyle.imageContainer}>
                    <IntroSliderFirstImage height={147} />
                </View>
                <View style={productStyle.cardContainer}>
                    {renderViewChild(item?.name || 'N/A', 'Product Name', item?.information || 'N/A', 'Product Information')}
                    {renderViewChild(item?.rating || 'N/A', 'Rating', item?.ratin || 'N/A', 'Category')}
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={productStyle.mainCardView}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <View style={productStyle.textInputContainer}>
                <Pressable
                    style={productStyle?.gobackStyle}
                    onPress={() => navigation.goBack()}>
                    <BackButtonIcon width={30} height={20} />
                </Pressable>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={BLACK}
                    style={{ ...productStyle.textInput }}
                    value={searchText}
                />
            </View>
            {flatlistView(productData, renderItem, "", "", "")}
        </SafeAreaView>
    )
}

export default ProductDetailsScreen;
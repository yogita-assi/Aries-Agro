import React, { useState, useEffect } from 'react';
import { StatusBar, View, TextInput, Pressable, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useModalContext } from '../../../modalContext/ModalContext';
import { RootStackParamList } from '../../../guards/AuthNavigator';
import productApi from '../../../api/productApi';
import { DealerScreenStyle } from './DealerScreenStyle';
import { BLACK, RED, WHITE } from '../../../shared/constants/color';
import BackButtonIcon from '../../../svg/BackButtonIcon';
import { productData } from '../../../shared/constants/strings';
import CustomFontText from '../../../fontfamily/CustomFontText';
import { FlatList } from 'react-native';
import DirectionIcon from '../../../svg/DirectionIcon';
import PressableClick from '../../../shared/constants/PressableClick';
import TextArchivoBold from '../../../shared/fontfamily/TextArchivoBold';
import InquiryIcon from '../../../svg/InquiryIcon';
import { GENERATE_INQUIRY } from '../../../routes/Routes';

const DealerScreen = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [searchText, setSearchText] = useState("");
    const { openModal }: any = useModalContext();
    const [refreshing, setRefreshing] = useState(false);
    const [loader, setLoader] = useState(true);
    const [totalPages, setTotalPage] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [formValue, setFormValue] = useState({
        productData: '',
    });
    const handleSearchInputChange = (search: any) => {
        setSearchText(search);
    };
    // useEffect(() => {
    //     productList()
    // }, [searchText])
    const onEndReached = () => {
        if (!refreshing && totalPages !== pageNumber) {
            setPageNumber(pageNumber + 1)
        }
    }
    // const productList = async () => {
    //     const requestBody = {
    //         pageNumber: searchText ? 1 : pageNumber,
    //         pageSize: searchText ? 100 : 10,
    //         searchKey: searchText || "",
    //     }
    //     try {
    //         setLoader(true)
    //         setRefreshing(true)
    //         const response = await productApi.getProductList(requestBody);
    //         if (searchText) {
    //             setFormValue({ ...formValue, productData: response?.data?.rows })
    //             setTotalPage(response?.data?.count)
    //             setPageNumber(1)
    //         } else if (pageNumber == 1) {
    //             setFormValue({ ...formValue, productData: response?.data?.rows })
    //             setTotalPage(response?.data?.count)
    //         } else {
    //             const value: any = [...formValue?.productData, ...response?.data?.rows]
    //             setTotalPage(response?.data?.count)
    //             setFormValue({ ...formValue, productData: value })
    //         }
    //         setRefreshing(false)
    //         setLoader(true);
    //     } catch (error: any) {
    //         setLoader(true);
    //         openModal(error?.message);
    //     }
    //     finally {
    //         setLoader(true)
    //     }
    // };
    const handleDirection = () => {
        navigation.navigate()
    }
    const handleInquiry = () => {
        navigation.navigate(GENERATE_INQUIRY)
    }
    const renderItem = ({ item }: any) => (
        <View style={DealerScreenStyle.renderItemView}>
            <View style={DealerScreenStyle.childViewFlatlist}>
                <View>
                    <CustomFontText style={DealerScreenStyle.textStyle1}>{item?.name}</CustomFontText>
                </View>
            </View>
            <View style={DealerScreenStyle.childViewFlatlist}>
                <View>
                    <CustomFontText style={DealerScreenStyle.textStyle1}>{item?.rating}</CustomFontText>
                </View>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={DealerScreenStyle.mainCardView}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={productData}
                    renderItem={renderItem}
                    // keyExtractor={(item: any) => item.id}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                        />
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default DealerScreen;
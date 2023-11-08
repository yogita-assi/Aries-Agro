import React, { useState, useEffect } from 'react';
import { StatusBar, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BLACK, WHITE } from '../../shared/constants/color';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../guards/AuthNavigator';
import { flatlistView, renderViewChild } from '../../shared/constants/ListUI';
import Pressable from '../../shared/constants/Pressable';
import BackButtonIcon from '../../svg/BackButtonIcon';
import { productStyle } from '../../shared/styles/productStyle';
import productApi from '../../api/productApi';
import { useModalContext } from '../../modalContext/ModalContext';
import ProductImage from '../../svg/ProductImage';
import { VIEW_PRODUCT_DETAILS } from '../../routes/Routes';

const ProductDetailsScreen = () => {
    const navigation: any = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [searchText, setSearchText] = useState("");
    const { openModal }: any = useModalContext();
    const [refreshing, setRefreshing] = useState(false);
    const [loader, setLoader] = useState(false);
    const [totalPages, setTotalPage] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [formValue, setFormValue] = useState({
        productData: '',
    });
    const handleSearchInputChange = (search: any) => {
        setSearchText(search);
    };
    useEffect(() => {
        productList()
    }, [searchText, pageNumber])
    const onEndReached = () => {
        if (!refreshing && totalPages !== pageNumber) {
            setPageNumber(pageNumber + 1)
        }
    }
    const productList = async () => {
        const requestBody = {
            pageNumber: searchText ? 1 : pageNumber,
            pageSize: searchText ? 100 : 10,
            searchKey: searchText || "",
        }
        try {
            setLoader(true)
            setRefreshing(true)
            const response = await productApi.getProductList(requestBody);
            if (searchText) {
                setFormValue({ ...formValue, productData: response?.data?.rows })
                setTotalPage(response?.data?.count)
                setPageNumber(1)
            } else if (pageNumber == 1) {
                setFormValue({ ...formValue, productData: response?.data?.rows })
                setTotalPage(response?.data?.count)
            } else {
                const value: any = [...formValue?.productData, ...response?.data?.rows]
                setTotalPage(response?.data?.count)
                setFormValue({ ...formValue, productData: value })
            }
            setRefreshing(false)
            setLoader(true);
        } catch (error: any) {
            setLoader(true);
            openModal(error?.message);
        }
        finally {
            setLoader(true)
        }
    };
    const handleProductPress = (productId: any) => {
        navigation.navigate(VIEW_PRODUCT_DETAILS, { productId });
    }
    const renderItem = (item: any) => {
        return (
            <View
                style={productStyle.rightLeftBoxContainer}>
                <Pressable style={productStyle.cardContainer} onPress={() => handleProductPress(item.id)}>
                    <View style={productStyle.imageContainer}>
                        <ProductImage height={70} />
                    </View>
                    <View style={productStyle.childMainView}>
                        {renderViewChild(
                            `${item?.itemName?.substring(0, 30)}` || 'N/A',
                            "",
                            `${item?.description?.substring(0, 60)}...` || 'N/A',
                            ""
                        )}
                        {renderViewChild(item?.purchaseRate || 'N/A', "", "", "")}
                    </View>
                </Pressable>
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
                    onChangeText={(e: any) => handleSearchInputChange(e)}
                />
            </View>
            {flatlistView(formValue?.productData, renderItem, refreshing, productList, onEndReached)}
        </SafeAreaView>
    )
}

export default ProductDetailsScreen;
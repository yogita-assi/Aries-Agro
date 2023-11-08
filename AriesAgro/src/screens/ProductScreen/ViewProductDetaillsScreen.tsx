import React, { useState, useEffect } from 'react';
import { StatusBar, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BLACK, WHITE } from '../../shared/constants/color';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../guards/AuthNavigator';
import Pressable from '../../shared/constants/Pressable';
import BackButtonIcon from '../../svg/BackButtonIcon';
import { productStyle } from '../../shared/styles/productStyle';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import ProductImage from '../../svg/ProductImage';
import SimilarProductScreen from './SimilarProductScreen';
import productApi from '../../api/productApi';
import { useModalContext } from '../../modalContext/ModalContext';

const ViewProductDetaillsScreen = ({ route: { params }, route }: any) => {
    const id = route?.params?.productId;
    const { openModal }: any = useModalContext();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [searchText, setSearchText] = useState("");
    const [loader, setLoader] = useState(false);
    const [productData, setProductData]: any = useState();
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
    useEffect(() => {
        if (id) {
            productList()
        }
    }, [id])
    const productList = async () => {
        try {
            setLoader(true)
            const response = await productApi.getProductListById(id);
            console.log(response?.data, "data")
            setProductData(response?.data)
            setLoader(true);
        } catch (error: any) {
            setLoader(true);
            openModal(error?.message);
        }
        finally {
            setLoader(true)
        }
    };
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
            {productData && (
                <View >
                    <TextArchivoBold style={productStyle.txtProductInfo}>{productData?.itemName}</TextArchivoBold>
                    <View style={productStyle.imageViewContainer}>
                        <ProductImage height={70} width={200} />
                    </View>
                    <TextArchivoBold style={productStyle.txtProductDetails}>{productData?.itemName}</TextArchivoBold>
                    <TextArchivoBold style={productStyle.txtInformation}>{productData?.description}</TextArchivoBold>
                </View>
            )}
            <View style={productStyle.mainLinkView}>
                <TextArchivoBold style={productStyle.txtProductLink}>Product Weblink</TextArchivoBold>
                <TextArchivoBold style={productStyle.txtProductLink}>Campaign link</TextArchivoBold>
            </View>
            <SimilarProductScreen />
        </SafeAreaView>
    )
}

export default ViewProductDetaillsScreen;
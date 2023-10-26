import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import { View, FlatList, Text } from 'react-native';
import { heightPercentageToDP } from "react-native-responsive-screen";
import PressableClick from "../../shared/constants/PressableClick";
import RBSheet from "react-native-raw-bottom-sheet";
import TextArchivoBold from "../../shared/fontfamily/TextArchivoBold";
import { dropDownPickerStyle } from "./dropdownPickerStyle";

const DropdownPicker = ({ refRBSheet, onSelect, options, testId }: any) => {
    const [search, setSearch] = useState("");
    const [filterList, setFilterList] = useState();
    const renterItem = ({ item, index }: any) => {
        return (
            <PressableClick key={index} accessible={true}
                onPress={() => onSelect(item)} style={{
                    height: 40,
                    justifyContent: "center",
                    alignItem: 'center',
                    borderColor: "#ccc",
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                    marginVertical: 5,
                    marginHorizontal: 10
                }}>
                <TextArchivoBold style={dropDownPickerStyle.productText}>{item?.name}</TextArchivoBold>
            </PressableClick>
        )
    }
    const updateSearch = (search: any) => {
        setSearch(search);
        const filter = options.filter((item: any) =>
            String(item.name).toLowerCase().includes(search.toLowerCase())
        );
        setFilterList(filter);
    };

    return (
        <RBSheet
            ref={refRBSheet}
            height={(testId == 'state' || testId == 'city') ? heightPercentageToDP(50) : heightPercentageToDP(30)}
            onOpen={() => setFilterList(options)}
            onClose={() => setSearch('')}
            openDuration={250}
            customStyles={{
                container: {
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5
                }
            }}
        >
            {(testId == 'state' || testId == 'city') ?
                <View style={dropDownPickerStyle.userTypeViewRbsheet}>
                    <TextInput style={dropDownPickerStyle.searchPlace}
                        value={search}
                        onChangeText={updateSearch}
                        placeholder={`Search ${testId}`}
                        accessible={true}
                    />
                </View> :
                <View style={dropDownPickerStyle.userTypeViewRbsheet1}>
                    <TextInput style={dropDownPickerStyle.searchPlace}
                        placeholder={`Select ${testId}`}
                        accessible={true}
                        disabled={true}
                    />
                </View>}
            <FlatList
                keyboardShouldPersistTaps="handled"
                data={filterList}
                renderItem={renterItem}
            />
        </RBSheet>
    )
}
export default DropdownPicker;
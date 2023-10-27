import React from "react";
import { StyleSheet, View } from "react-native";
import { LIGHT_SILVER } from "../../shared/constants/color";

const horizantalLine = (props: any) => {
    return (
        <View style={{ ...styles.horizantalLine, ...props?.style }} />
    )
}
const styles = StyleSheet.create({
    horizantalLine: {
        borderBottomColor: LIGHT_SILVER,
        borderBottomWidth: 1,
    },
})

export default horizantalLine;
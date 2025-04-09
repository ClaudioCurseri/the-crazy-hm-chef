import {StyleSheet, View} from "react-native";
import React from "react";


interface PageBodyProps {
    children: React.ReactNode;
}

export function PageBody({children}: PageBodyProps) {
    return (
        <View style={styles.body}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 16,
        marginHorizontal: 15,
        alignItems: "center",
    }
})
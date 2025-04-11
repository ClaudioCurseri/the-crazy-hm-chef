import {ScrollView, StyleSheet} from "react-native";
import React from "react";


interface PageBodyProps {
    children: React.ReactNode;
}

export default function PageBody({children}: PageBodyProps) {
    return (
            <ScrollView contentContainerStyle={styles.body}>
                {children}
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flexGrow: 1,
        marginHorizontal: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingBottom: 80
    }
})
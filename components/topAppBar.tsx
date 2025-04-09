import {StyleSheet, Text, View} from "react-native";

interface topAppBarProps {
    title: string;
}

export function TopAppBar(topAppBarProps: topAppBarProps) {
    const { title } = topAppBarProps;
    return (
        <View style={styles.appBar}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    appBar: {
        flex: 2,
    },
    title: {
        fontSize: 45,
        padding: 10,
        paddingLeft: 15,
    }
})
import {StyleSheet, Text, View} from "react-native";

interface topAppBarProps {
    title: string;
}

export function TopAppBar(topAppBarProps: topAppBarProps) {
    const { title } = topAppBarProps;
    return (
        <>
            <View style={styles.appBar}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    appBar: {
        flex: 0,
    },
    title: {
        fontSize: 38,
        paddingTop: 10,
        paddingLeft: 15,
        fontWeight: 'bold',
        color: 'rgba(251,84,84,1)',
    }
})
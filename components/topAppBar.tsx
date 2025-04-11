import {StyleSheet, Text, useColorScheme, View} from "react-native";
import {StatusBar} from "expo-status-bar";

interface topAppBarProps {
    title: string;
}

export function TopAppBar(topAppBarProps: topAppBarProps) {
    const { title } = topAppBarProps;
    const colorScheme = useColorScheme();
    return (
        <>
            <StatusBar
                style={colorScheme === 'dark' ? 'light' : 'dark'}
                backgroundColor={colorScheme === 'dark' ? 'black' : 'white'}
                translucent
            />
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
        paddingTop: 30,
        paddingLeft: 15,
        fontWeight: 'bold',
        color: 'rgba(251,84,84,1)',
    }
})
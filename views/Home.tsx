import {StyleSheet, Text, View} from "react-native";
import {TopAppBar} from "../components/topAppBar";
import {PageBody} from "../components/pageBody";

export default function Home() {
    return (
        <View style={styles.container}>
            <TopAppBar title={"Home"} />
            <PageBody>
                <Text>Test</Text>
            </PageBody>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
});
import {Image, StyleSheet, Text, View} from "react-native";
import {TopAppBar} from "../components/topAppBar";
import {PageBody} from "../components/pageBody";

export default function Home() {
    return (
        <View style={styles.container}>
            <TopAppBar title={"Home"} />
            <PageBody>
                <Text style={styles.titleText}>The Crazy HM Chef</Text>
                <Image source={require('../assets/chef1.jpg')} style={styles.image}/>
                <Text style={styles.bottomText}>Here you can find and collect the best recipes for your home made meals.</Text>
            </PageBody>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
    titleText: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        paddingTop: 50,
        paddingBottom: 25,
    },
    image: {
        width: 300,
        height: 300,
    },
    bottomText: {
        fontSize: 14,
        paddingTop: 25,
    }
});
import {Image, StyleSheet, Text} from "react-native";
import {TopAppBar} from "../components/topAppBar";
import {PageBody} from "../components/pageBody";

export default function Home() {
    return (
        <>
            <TopAppBar title={"Home"}/><PageBody>
            <Text style={styles.titleText}>The Crazy HM Chef</Text>
            <Image source={require('../assets/chef1.jpg')} style={styles.image}/>
            <Text style={styles.bottomText}>Here you can find and collect the best recipes for your home made
                meals.</Text>
            </PageBody>
        </>

    )
}

const styles = StyleSheet.create({
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
import {StyleSheet, View} from "react-native";
import Home from "./Home";
import {LinearGradient} from "expo-linear-gradient";


export function MainPage() {
    // TODO: Add logic (BottomNavBar) to switch between pages
    return (
        <View style={styles.container}>
            <Home/>
            <LinearGradient
                colors={['transparent', 'rgba(251,84,84,0.4)']}
                locations={[0.5, 1]}
                style={styles.gradient}/>
            <View style={styles.bottomNavBar}></View>
        </View>
    )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    },
    bottomNavBar: {
        flex: 1,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'grey',
    }
})
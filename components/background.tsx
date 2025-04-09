import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet} from "react-native";


export default function Background () {
    return (
        <LinearGradient
            colors={['transparent', 'rgba(251,84,84,0.4)']}
            locations={[0.5, 1]}
            style={styles.gradient}/>
    )
}

const styles = StyleSheet.create({
    gradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    }
})
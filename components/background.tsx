import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet} from "react-native";

/**
 * Contains a linear gradient that is displayed in the background of every page.
 */
export default function Background () {
    return (
        <LinearGradient
            colors={['transparent', 'rgba(251,84,84,0.25)']}
            locations={[0.2, 1]}
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
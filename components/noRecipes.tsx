import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {StyleSheet, Text, View} from "react-native";


interface NoRecipesProps {
    message: string;
}

export default function NoRecipes(props: NoRecipesProps) {
    const { message } = props;

    return (
        <View style={styles.noRecipesContainer}>
            <MaterialIcons name="no-food" size={56} color="black" />
            <Text style={styles.noRecipesText}>
                {message}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    noRecipesContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noRecipesText: {
        paddingTop: 10,
        fontSize: 18,
        textAlign: "center",
    }
})
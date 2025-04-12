import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {StyleSheet, Text, View} from "react-native";


interface NoRecipesProps {
    message: string;
    type: 'no-recipes' | 'yet-to-search'
}

export default function NoRecipes(props: NoRecipesProps) {
    const { message, type } = props;

    return (
        <View style={styles.noRecipesContainer}>
            {type === 'no-recipes' ? (
                <MaterialIcons name="no-food" size={56} color="black" />
            ) : type === 'yet-to-search' ? (
                <MaterialIcons name="search" size={56} color="black" />
            ) : (
                // default
                <MaterialIcons name="no-food" size={56} color="black" />
            )}
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
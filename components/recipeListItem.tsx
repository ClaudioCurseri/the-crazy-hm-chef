import {Recipe} from "../model/recipe";
import {StyleSheet, TouchableOpacity, View, Text, Image} from "react-native";


interface RecipeListItemProps {
    recipe: Recipe;
    expanded: boolean;
    onPress: () => void;
}

export default function RecipeListItem(props: RecipeListItemProps) {
    const { recipe, expanded, onPress } = props;

    return (
        <TouchableOpacity style={[styles.itemContainer, expanded && styles.expandedItem]} onPress={onPress}>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={expanded ? undefined : 1} ellipsizeMode="tail">
                    {recipe.title}
                </Text>
                <Text style={styles.description} numberOfLines={expanded ? undefined : 2} ellipsizeMode="tail">
                    {recipe.description}
                </Text>
            </View>
            <Image source={{uri: recipe.image}} style={styles.image}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 10
    },
    expandedItem: {
        height: 'auto',
        minHeight: 100,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15,
        marginLeft: 10,
    }
});
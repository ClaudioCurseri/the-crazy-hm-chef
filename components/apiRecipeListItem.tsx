import {Recipe} from "../model/recipe";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";


interface ApiRecipeListItemProps {
    recipe: Recipe;
    onImagePress?: (image: string) => void;
}

export default function ApiRecipeListItem(props: ApiRecipeListItemProps) {
    const { recipe, onImagePress } = props;

    return (
        <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                    {recipe.title}
                </Text>
                <Text style={styles.category} numberOfLines={1} ellipsizeMode="tail">
                    {recipe.category}
                </Text>
            </View>
                <TouchableOpacity style={styles.image} onPress={() => onImagePress ? onImagePress(recipe.image) : () => {}}>
                    <Image source={{uri: recipe.image}} style={styles.image}/>
                </TouchableOpacity>
        </View>
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
    category: {
        fontSize: 14,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10,
    },
});
import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import {StyleSheet, Text} from "react-native";
import Background from "../../components/background";
import CustomTextInput from "../../components/customTextInput";


export default function NewRecipe() {
    return (
        <><TopAppBar title={'New Recipe'}/>
            <PageBody>
            <Text style={styles.addRecipeHeaderSubtitle}>
                Add a new recipe
            </Text>
                <Text style={styles.subtitle}>
                    Recipe Information
                </Text>
            <CustomTextInput title placeholder={"Title of your recipe"} />
            <CustomTextInput title={false} placeholder={"Description of your recipe"} />
                <Text style={styles.subtitle}>
                    Add an Image
                </Text>
        </PageBody><Background/></>
    )
}

const styles = StyleSheet.create({
    addRecipeHeaderSubtitle: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: "bold",
        color: 'lightgray',
    },
    subtitle: {
        fontSize: 18,
        paddingTop: 25,
        fontWeight: "bold",
        paddingBottom: 10,
    }
})
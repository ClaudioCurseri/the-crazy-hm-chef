import {TopAppBar} from "../../components/topAppBar";
import {PageBody} from "../../components/pageBody";
import {Text} from "react-native";


export default function MyRecipes() {
    return (
        <>
            <TopAppBar title={'My Recipes'}/>
            <PageBody>
                <Text>
                    Content
                </Text>
            </PageBody>
        </>
    )
}
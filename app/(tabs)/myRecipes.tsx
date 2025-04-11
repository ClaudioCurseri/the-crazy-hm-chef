import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import {Text} from "react-native";
import Background from "../../components/background";


export default function MyRecipes() {
    return (
        <>
            <TopAppBar title={'My Recipes'}/>
            <PageBody>
                <Text>
                    Content
                </Text>
            </PageBody>
            <Background/>
        </>
    )
}
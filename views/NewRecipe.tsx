import {TopAppBar} from "../components/topAppBar";
import {PageBody} from "../components/pageBody";
import {Text} from "react-native";


export function NewRecipe() {
    return (
        <>
            <TopAppBar title={'New Recipe'}/>
            <PageBody>
                <Text>
                    Content
                </Text>
            </PageBody>
        </>
    )
}
import {TopAppBar} from "../components/topAppBar";
import {PageBody} from "../components/pageBody";
import {Text} from "react-native";


export function Search() {
    return (
        <>
            <TopAppBar title={'Search Recipes'} />
            <PageBody>
                <Text>Content</Text>
            </PageBody>
        </>
    )
}
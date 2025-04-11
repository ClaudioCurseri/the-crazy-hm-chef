import {TopAppBar} from "../../components/topAppBar";
import PageBody from "../../components/pageBody";
import {Text} from "react-native";
import Background from "../../components/background";


export default function Search() {
    return (
        <>
            <TopAppBar title={'Search Recipes'} />
            <PageBody>
                <Text>Content</Text>
            </PageBody>
            <Background/>
        </>
    )
}
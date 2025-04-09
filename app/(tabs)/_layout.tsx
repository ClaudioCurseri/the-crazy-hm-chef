import {Tabs} from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: 'Home', headerShown: false}} />
            <Tabs.Screen name="newRecipe" options={{title: 'New Recipe', headerShown: false}} />
            <Tabs.Screen name="myRecipes" options={{title: 'My Recipes', headerShown: false}} />
            <Tabs.Screen name="search" options={{title: 'Search Recipes', headerShown: false}} />
        </Tabs>
    );
}

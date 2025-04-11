import { Stack } from 'expo-router';
import {RecipeProvider} from "../context/RecipeContext";

export default function RootLayout() {
    return (
        <RecipeProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </RecipeProvider>
    )
}
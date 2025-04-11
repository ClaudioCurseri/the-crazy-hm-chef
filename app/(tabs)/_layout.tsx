import {Tabs} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {Pressable} from "react-native";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ff2f2f',
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    borderTopWidth: 0,
                    elevation: 0,
                    minHeight: 55,
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold'
                },
                tabBarButton: (props) => <Pressable {...props} android_ripple={{ color: 'transparent' }} />
            }}
        >
            <Tabs.Screen name="index" options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Ionicons name='home-sharp' color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="newRecipe" options={{
                title: 'New Recipe',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="hamburger-plus" size={24} color={color} />
                ),
            }} />
            <Tabs.Screen name="myRecipes" options={{
                title: 'My Recipes',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <FontAwesome6 name="list-ul" size={24} color={color} />
                ),
            }} />
            <Tabs.Screen name="search" options={{
                title: 'Search Recipes',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Ionicons name="search-sharp" size={24} color={color} />
                ),
            }} />
        </Tabs>
    );
}

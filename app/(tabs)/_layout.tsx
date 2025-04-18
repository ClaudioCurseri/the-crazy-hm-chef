import {Tabs} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import CustomTabButton from "../../components/customTabBarButton";

const activeColor = '#ff2f2f';

/**
 * Tab layout of the different pages of the app.
 */
export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: activeColor,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderTopWidth: 0,
                    elevation: 50,
                    minHeight: 55,
                },
            }}
        >
            {/* home tab */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarButton: (props) => {
                        const focused = props.accessibilityState?.selected;
                        return (
                            <CustomTabButton
                                focused={focused}
                                onPress={props.onPress}
                                label="Home"
                                icon={<Ionicons name="home-sharp" size={24} color={focused ? activeColor : 'gray'} />}
                                activeColor={activeColor}
                            />
                        );
                    },
                }}
            />
            {/* new recipe tab */}
            <Tabs.Screen
                name="newRecipe"
                options={{
                    title: 'New Recipe',
                    headerShown: false,
                    tabBarButton: (props) => {
                        const focused = props.accessibilityState?.selected;
                        return (
                            <CustomTabButton
                                focused={focused}
                                onPress={props.onPress}
                                label="New Recipe"
                                icon={<MaterialCommunityIcons name="hamburger-plus" size={24} color={focused ? activeColor : 'gray'} />}
                                activeColor={activeColor}
                            />
                        );
                    },
                }}
            />
            {/* my recipes tab */}
            <Tabs.Screen
                name="myRecipes"
                options={{
                    title: 'My Recipes',
                    headerShown: false,
                    tabBarButton: (props) => {
                        const focused = props.accessibilityState?.selected;
                        return (
                            <CustomTabButton
                                focused={focused}
                                onPress={props.onPress}
                                label="My Recipes"
                                icon={<FontAwesome6 name="list-ul" size={24} color={focused ? activeColor : 'gray'} />}
                                activeColor={activeColor}
                            />
                        );
                    },
                }}
            />
            {/* search tab */}
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search Recipes',
                    headerShown: false,
                    tabBarButton: (props) => {
                        const focused = props.accessibilityState?.selected;
                        return (
                            <CustomTabButton
                                focused={focused}
                                onPress={props.onPress}
                                label="Search"
                                icon={<Ionicons name="search-sharp" size={24} color={focused ? activeColor : 'gray'} />}
                                activeColor={activeColor}
                            />
                        );
                    },
                }}
            />
        </Tabs>
    );
}

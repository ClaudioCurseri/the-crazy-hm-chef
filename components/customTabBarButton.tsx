import {Text, StyleSheet, GestureResponderEvent, TouchableOpacity} from 'react-native';
import React from 'react';

type CustomTabButtonProps = {
    focused?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
    icon: React.ReactNode;
    label: string;
    activeColor: string;
    inactiveColor: string;
};

export default function CustomTabButton (props: CustomTabButtonProps)  {
    const {
        focused,
        onPress,
        icon,
        label,
        activeColor,
        inactiveColor
    } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                { borderColor: focused ? activeColor : inactiveColor },
            ]}
        >
            {icon}
            <Text
                style={[
                    styles.label,
                    { color: focused ? activeColor : 'gray' },
                ]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 3,
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 2,
    },
});
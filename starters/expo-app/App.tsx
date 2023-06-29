import {StyleSheet, View} from 'react-native';
import {Button, UIProvider} from '@one-ui/react'
import { useFonts } from 'expo-font';
import * as React from "react";

export default function App() {
    const [loaded] = useFonts({
        Montserrat: require('./fonts/Montserrat-Regular.ttf'),
        MontserratMedium: require('./fonts/Montserrat-Medium.ttf'),
        MontserratSemiBold: require('./fonts/Montserrat-SemiBold.ttf'),
        MontserratBold: require('./fonts/Montserrat-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <UIProvider >
            <View style={styles.container}>
                <Button >Small</Button>
                <Button size={'$md'}>Medium</Button>
                <Button size={'$lg'}>Large</Button>
            </View>
        </UIProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

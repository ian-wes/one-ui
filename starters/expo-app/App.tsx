import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Button, config} from 'ahpoi-one-universe-react'
import {TamaguiProvider} from 'tamagui'

import * as React from "react";

export default function App() {
    return (
        <TamaguiProvider config={config as any}>
            <View style={styles.container}>
                <Button>Hello world</Button>
            </View>
        </TamaguiProvider>
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

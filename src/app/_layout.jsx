//root layout... where its used in every screen
import {Stack} from 'expo-router';

export default function RootLayout() {
    return (
    <Stack>
        <Stack.Screen name="index" options={{ Title: 'Exercises'}} />
    </Stack>
    );
}
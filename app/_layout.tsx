import Ionicons from '@expo/vector-icons/Ionicons';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { config } from '../theme';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SoraBold: require('../assets/fonts/Sora-Bold.ttf'),
    SoraSemiBold: require('../assets/fonts/Sora-SemiBold.ttf'),
    SoraMedium: require('../assets/fonts/Sora-Medium.ttf'),
    SoraLight: require('../assets/fonts/Sora-Light.ttf'),
    Sora: require('../assets/fonts/Sora-Regular.ttf'),
    ...Ionicons.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GluestackUIProvider config={config}>
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="modal"
              options={{
                headerShown: true,
                presentation: 'modal',
                headerTitle: 'Politica de Privacidade',
              }}
            />
          </Stack>
        </SafeAreaProvider>
      </GluestackUIProvider>
    </ThemeProvider>
  );
}

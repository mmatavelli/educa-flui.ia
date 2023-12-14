import { Image, MenuIcon, Pressable, Text } from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from 'expo-router';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  class: z.array(z.string()),
  matter: z.array(z.string()),
  skill: z.array(z.string()),
  effort: z.array(z.string()),
});

export type FormData = z.infer<typeof schema>;

export default function StepLayout() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...form}>
      <Stack
        screenOptions={({ navigation }) => ({
          animation: 'fade',
          headerTitleAlign: 'center',
          headerTitle(props) {
            return (
              <Image
                alt="Logo"
                alignSelf="center"
                h={45}
                resizeMode="contain"
                source={require('../../assets/images/brain.png')}
              />
            );
          },
          contentStyle: {
            backgroundColor: '#4CBBBB',
          },
          headerShadowVisible: false,
          headerBackTitle: 'Voltar',
          headerBackVisible: false,
          headerLeft: ({ label, canGoBack }) => {
            if (!canGoBack) {
              return null;
            }

            return (
              <Pressable
                bgColor="#4CBBBB"
                py="$1"
                px="$4"
                borderRadius="$full"
                onPress={() => navigation.goBack()}
              >
                <Text color="$white">{label}</Text>
              </Pressable>
            );
          },
          headerRight: () => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate('modal');
                }}
              >
                <MenuIcon color="$primary500" size="xl" />
              </Pressable>
            );
          },
        })}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="two" />
        <Stack.Screen name="three" />
        <Stack.Screen name="four" />
        <Stack.Screen name="result" />
        <Stack.Screen name="(result-ia)/id" />
      </Stack>
    </FormProvider>
  );
}

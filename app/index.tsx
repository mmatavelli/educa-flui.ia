import {
  Button,
  ButtonSpinner,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorText,
  Image,
  Input,
  InputField,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
  useToast,
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React, { useRef } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { TextInput as RNTextInput } from 'react-native';
import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type SignInSchemaType = z.infer<typeof signInSchema>;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function SignIn() {
  const passwordInputRef = useRef<RNTextInput>(null);

  const { push } = useRouter();

  const {
    control,
    formState: { isSubmitting, isValid, isDirty, errors },
    handleSubmit,
  } = useForm<SignInSchemaType>({
    defaultValues: {
      email: 'teste@gmai.com',
      password: 'testejnbasdn',
    },
    resolver: zodResolver(signInSchema),
  });

  const toast = useToast();

  async function onSubmit({ email, password }: SignInSchemaType) {
    await sleep(1000).then(() => {
      push('/steps');
    });
  }

  return (
    <KeyboardAvoidingView flex={1} bgColor="white">
      <ScrollView
        flex={1}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        px="$6"
        bounces={false}
      >
        <VStack w="$full" flex={1} overflow="hidden" justifyContent="center">
          <Image
            alignSelf="center"
            alt="logo"
            resizeMode="cover"
            height={150}
            width={300}
            source={require('../assets/images/logo.png')}
          />
          <Text color="$primary500" textAlign="center" mb="$8">
            Faça seu login
          </Text>

          <FormControl isInvalid={!!errors.email} isRequired mb="$4">
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    placeholder="E-mail"
                    type="text"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    autoComplete="email"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      passwordInputRef.current?.focus();
                    }}
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorText>
                {errors?.email?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl isInvalid={!!errors.password} isRequired mb="$8">
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    // @ts-ignore
                    ref={passwordInputRef}
                    placeholder="Senha"
                    type="password"
                    autoCorrect={false}
                    autoCapitalize="none"
                    autoComplete="off"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorText>
                {errors?.password?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <Button
            // disabled={!isValid || !isDirty || isSubmitting}
            mb="$4"
            onPress={handleSubmit(onSubmit)}
          >
            {isSubmitting ? (
              <ButtonSpinner color="white" />
            ) : (
              <ButtonText color="$white" fontSize="$lg" fontWeight="$bold">
                Entrar
              </ButtonText>
            )}
          </Button>
          <Button
            variant="outline"
            onPress={() => {
              push('/sign-up');
            }}
          >
            <ButtonText color="$primary500" fontSize="$lg" fontWeight="$bold">
              Criar conta
            </ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

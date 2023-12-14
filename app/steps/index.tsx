import {
  Box,
  Button,
  ButtonText,
  CheckIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Text,
} from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { Controller, useFormContext } from 'react-hook-form';
import { LogBox } from 'react-native';
import { FormData } from './_layout';

LogBox.ignoreAllLogs();

const YEARS = [
  {
    id: 1,
    title: '1º ano',
    value: '1',
  },
  {
    id: 2,
    title: '2º ano',
    value: '2',
  },
  {
    id: 3,
    title: '3º ano',
    value: '3',
  },
  {
    id: 4,
    title: '4º ano',
    value: '4',
  },
  {
    id: 5,
    title: '5º ano',
    value: '5',
  },
];

export default function Steps() {
  const { push } = useRouter();

  const { control } = useFormContext<FormData>();

  function handleNext() {
    push('/steps/two');
  }

  return (
    <Box flex={1} py="$12" px="$6">
      <Box flex={1} mb="$12">
        <Text fontSize="$2xl" fontWeight="bold" mb="$12" color="$white">
          Turma
        </Text>
        <Controller
          control={control}
          name="class"
          render={({ field: { onChange, value } }) => (
            <CheckboxGroup gap="$8" value={value} onChange={onChange}>
              {YEARS.map(year => (
                <Checkbox key={year.id} value={String(year.id)} size="lg">
                  <CheckboxIndicator
                    mr="$4"
                    borderColor="$white"
                    $checked-bgColor="$white"
                  >
                    <CheckboxIcon as={CheckIcon} color="$primary500" />
                  </CheckboxIndicator>
                  <CheckboxLabel color="$white">{year.title}</CheckboxLabel>
                </Checkbox>
              ))}
            </CheckboxGroup>
          )}
        />
      </Box>
      <Button bgColor="$white" onPress={handleNext} $active-bg="$primary50">
        <ButtonText fontSize="$lg" color="$primary500">
          Fluir
        </ButtonText>
      </Button>
    </Box>
  );
}

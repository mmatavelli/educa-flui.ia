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
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormData } from './_layout';

const MATTERS = [
  {
    id: 1,
    title: 'Português',
    value: 'portugues',
  },
  {
    id: 2,
    title: 'Matemática',
    value: 'matematica',
  },
  {
    id: 3,
    title: 'História',
    value: 'historia',
  },
  {
    id: 4,
    title: 'Geografia',
    value: 'geografia',
  },
  {
    id: 5,
    title: 'Ciências',
    value: 'ciencias',
  },
  {
    id: 6,
    title: 'Inglês',
    value: 'ingles',
  },
  {
    id: 8,
    title: 'Arte',
    value: 'arte',
  },
  {
    id: 7,
    title: 'Educação Física',
    value: 'educacao_fisica',
  },
];

export default function Two() {
  const { push } = useRouter();

  const { control } = useFormContext<FormData>();

  const [selectedMatters, setSelectedMatters] = useState([]);

  function handleNext() {
    push('/steps/three');
  }

  return (
    <Box flex={1} py="$12" px="$6">
      <Box flex={1} mb="$12">
        <Text fontSize="$2xl" fontWeight="bold" mb="$12" color="$white">
          Componentes curriculares
        </Text>
        <Controller
          control={control}
          name="matter"
          render={({ field }) => (
            <CheckboxGroup
              value={selectedMatters}
              onChange={setSelectedMatters}
              gap="$6"
            >
              {MATTERS.map(matter => (
                <Checkbox key={matter.id} value={matter.value} size="lg">
                  <CheckboxIndicator
                    mr="$4"
                    borderColor="$white"
                    $checked-bgColor="$white"
                  >
                    <CheckboxIcon as={CheckIcon} color="$primary500" />
                  </CheckboxIndicator>
                  <CheckboxLabel color="$white" mr="$2">
                    {matter.title}
                  </CheckboxLabel>
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

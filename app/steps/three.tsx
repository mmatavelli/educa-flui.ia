import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  CheckIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CloseIcon,
  Heading,
  Icon,
  InfoIcon,
  Popover,
  PopoverBackdrop,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Text,
} from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormData } from './_layout';

const SKILLS = [
  {
    id: 1,
    title: 'EF01MA11',
    value: 'EF01MA11',
    description:
      'Descrever a localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás.',
  },
  {
    id: 2,
    title: 'EF01MA13',
    value: 'EF01MA13',
    description:
      'Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.',
  },
  {
    id: 3,
    title: 'EF01MA14',
    value: 'EF01MA14',
    description:
      'Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.',
  },
  {
    id: 4,
    title: 'EF01MA15',
    value: 'EF01MA15',
    description:
      'Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.',
  },
  {
    id: 5,
    title: 'EF01MA16',
    value: 'EF01MA16',
    description:
      'Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.',
  },
  {
    id: 6,
    title: 'EF01MA17',
    value: 'EF01MA17',
    description:
      'Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.',
  },
  {
    id: 7,
    title: 'EF01MA18',
    value: 'EF01MA18',
    description:
      'Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.',
  },
  {
    id: 8,
    title: 'EF01MA19',
    value: 'EF01MA19',
    description:
      'Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.',
  },
  {
    id: 9,
    title: 'EF01MA20',
    value: 'EF01MA20',
    description:
      'Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.',
  },
  {
    id: 10,
    title: 'EF01MA21',
    value: 'EF01MA21',
    description:
      'Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.',
  },
  {
    id: 11,
    title: 'EF01MA22',
    value: 'EF01MA22',
    description:
      'Descrever a localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás.',
  },
];

export default function Three() {
  const { push } = useRouter();

  const { control } = useFormContext<FormData>();
  const [isSkillPopoverOpen, setSkillPopoverOpen] = useState(false);

  function handleNext() {
    push('/steps/four');
  }

  return (
    <Box flex={1} py="$12" px="$6">
      <Box flex={1} mb="$12">
        <Text fontSize="$2xl" fontWeight="bold" mb="$12" color="$white">
          Habilidade desenvolvida
        </Text>
        <Controller
          control={control}
          name="skill"
          render={({ field: { onChange, value } }) => (
            <CheckboxGroup
              value={value}
              onChange={onChange}
              flexDirection="row"
              flexWrap="wrap"
              gap="$6"
            >
              {SKILLS.map(skill => (
                <Checkbox key={skill.id} value={skill.value} size="lg">
                  <CheckboxIndicator
                    mr="$4"
                    borderColor="$white"
                    $checked-bgColor="$white"
                  >
                    <CheckboxIcon as={CheckIcon} color="$primary500" />
                  </CheckboxIndicator>
                  <CheckboxLabel color="$white" mr="$2">
                    {skill.title}
                  </CheckboxLabel>

                  <Popover
                    isOpen={
                      // @ts-ignore
                      isSkillPopoverOpen[skill.id]
                    }
                    onClose={() =>
                      setSkillPopoverOpen(prevState => ({
                        // @ts-ignore
                        ...prevState,
                        [skill.id]: false,
                      }))
                    }
                    onOpen={() =>
                      setSkillPopoverOpen(prevState => ({
                        // @ts-ignore
                        ...prevState,
                        [skill.id]: true,
                      }))
                    }
                    placement="bottom"
                    size="md"
                    trigger={triggerProps => {
                      return (
                        <Button {...triggerProps} variant="link">
                          <ButtonIcon as={InfoIcon} color="$white" size="md" />
                        </Button>
                      );
                    }}
                  >
                    <PopoverBackdrop />
                    <PopoverContent>
                      <PopoverHeader>
                        <Heading size="lg">{skill.title}</Heading>
                        <PopoverCloseButton>
                          <Icon as={CloseIcon} />
                        </PopoverCloseButton>
                      </PopoverHeader>
                      <PopoverBody>
                        <Text size="sm">{skill.description}</Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Checkbox>
              ))}
            </CheckboxGroup>
          )}
        />
      </Box>

      <Button bgColor="$white" onPress={handleNext}>
        <ButtonText fontSize="$lg" color="$primary500">
          Fluir
        </ButtonText>
      </Button>
    </Box>
  );
}

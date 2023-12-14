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

const EFFORTS = [
  {
    id: 1,
    title: 'Acabou de começar',
    value: 1,
    description:
      'Demonstra dificuldade para descrever a localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás.',
  },
  {
    id: 2,
    title: 'Quase lá',
    value: 2,
    description:
      'demonstra que necessita de intervenção localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás.',
  },
  {
    id: 3,
    title: 'Concluiu',
    value: 3,
    description:
      'Descreveu com autonomia a localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás.',
  },
];

export default function Steps() {
  const { push } = useRouter();

  const { control } = useFormContext<FormData>();
  const [isEffortPopoverOpen, setEffortPopoverOpen] = useState(false);

  function handleNext() {
    push('/steps/result');
  }

  return (
    <Box flex={1} py="$12" px="$6">
      <Box flex={1} mb="$12">
        <Text fontSize="$2xl" fontWeight="bold" mb="$12" color="$white">
          Empenho do meu aluno
        </Text>
        <Controller
          control={control}
          name="effort"
          render={({ field: { onChange, value } }) => (
            <CheckboxGroup gap="$6" value={value} onChange={onChange}>
              {EFFORTS.map(effort => (
                <Checkbox
                  key={effort.id}
                  value={String(effort.value)}
                  size="lg"
                >
                  <CheckboxIndicator
                    mr="$4"
                    borderColor="$white"
                    $checked-bgColor="$white"
                  >
                    <CheckboxIcon as={CheckIcon} color="$primary500" />
                  </CheckboxIndicator>
                  <CheckboxLabel color="$white" mr="$2">
                    {effort.title}
                  </CheckboxLabel>

                  <Popover
                    isOpen={
                      // @ts-ignore
                      isEffortPopoverOpen[effort.id]
                    }
                    onClose={() =>
                      setEffortPopoverOpen(prevState => ({
                        // @ts-ignore
                        ...prevState,
                        [effort.id]: false,
                      }))
                    }
                    onOpen={() =>
                      setEffortPopoverOpen(prevState => ({
                        // @ts-ignore
                        ...prevState,
                        [effort.id]: true,
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
                        <Heading size="lg">{effort.title}</Heading>
                        <PopoverCloseButton>
                          <Icon as={CloseIcon} />
                        </PopoverCloseButton>
                      </PopoverHeader>
                      <PopoverBody>
                        <Text size="sm">{effort.description}</Text>
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
          Fluir Soluções
        </ButtonText>
      </Button>
    </Box>
  );
}

import {
  Box,
  Button,
  ButtonText,
  ScrollView,
  Spinner,
  Text,
} from '@gluestack-ui/themed';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormData } from './_layout';

type Response = {
  id: string;
  name: string;
};

export default function Result() {
  const { push } = useRouter();
  const { watch } = useFormContext<FormData>();

  const [data, setData] = useState<Response>();
  const [isLoading, setLoading] = useState(true);

  const formData = watch();

  useEffect(() => {
    axios
      .get<Response>('https://flua-api.onrender.com/planejar-avancar', {
        params: {
          anoEscolar: 3,
          componenteCurricular: 5,
          habilidadeDesenvolvida: 1,
          empenhoAluno: Number(formData.effort[0]) || 1,
        },
      })
      .then(response => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  if (isLoading || !data) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" color="$white" />
      </Box>
    );
  }

  return (
    <Box flex={1}>
      <ScrollView flex={1} mb="$8" py="$12" px="$6">
        <Text fontSize="$2xl" fontWeight="bold" mb="$12" color="$white">
          Planejar para Avançar
        </Text>

        <Text
          fontSize="$lg"
          mb="$12"
          fontWeight="$medium"
          color="$white"
          lineHeight="$xl"
        >
          {data.name}
        </Text>
      </ScrollView>
      <Box px="$6" pb="$6">
        <Box
          w="$full"
          flexDirection="row"
          gap="$4"
          mb="$4"
          alignItems="stretch"
        >
          <Button flex={1} bgColor="$white">
            <ButtonText fontSize="$sm" color="$primary500">
              Enviar por email
            </ButtonText>
          </Button>

          <Button flex={1} bgColor="$white">
            <ButtonText fontSize="$sm" color="$primary500">
              Download
            </ButtonText>
          </Button>
        </Box>

        <Button
          variant="outline"
          borderColor="$white"
          onPress={() => {
            push(`/steps/result-ia/${data.id}`);
          }}
        >
          <ButtonText fontSize="$lg" color="$white">
            Fluir resultados por IA
          </ButtonText>
        </Button>
      </Box>
    </Box>
  );
}

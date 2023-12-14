import {
  Box,
  Button,
  ButtonText,
  ScrollView,
  Spinner,
  Text,
} from '@gluestack-ui/themed';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

type Response = {
  choices: Choice[];
};

type Choice = {
  index: number;
  message: Message;
  finish_reason: string;
};

type Message = {
  role: string;
  content: string;
};

export default function ResultIA() {
  const { id } = useLocalSearchParams();

  const [data, setData] = useState<Response>();
  const [isLoading, setLoading] = useState(true);

  function requestIAAnswer() {
    setLoading(true);
    axios
      .get<Response>('https://flua-api.onrender.com/prompt-ia', {
        params: {
          planejarAvancar: id,
        },
      })
      .then(response => {
        setData(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    requestIAAnswer();
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
          Planejar para Avançar com IA
        </Text>

        <Text fontSize="$lg" mb="$12" fontWeight="$medium" color="$white">
          {data.choices[0].message.content}
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
          onPress={requestIAAnswer}
        >
          <ButtonText fontSize="$lg" color="$white">
            Fluir resultados por IA
          </ButtonText>
        </Button>
      </Box>
    </Box>
  );
}

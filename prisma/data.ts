export const anosEscolares = [
  { id: 1, name: "1º Ano" },
  { id: 2, name: "2º Ano" },
  { id: 3, name: "3º Ano" },
  { id: 4, name: "4º Ano" },
  { id: 5, name: "5º Ano" },
];

export const componentesCurriculares = [
  {
    id: 1,
    name: "Língua Portuguesa",
  },
  {
    id: 2,
    name: "Matemática",
  },
  {
    id: 3,
    name: "Ciências da Natureza",
  },
  {
    id: 4,
    name: "História",
  },
  {
    id: 5,
    name: "Geografia",
  },
];

export const habilidadesDesenvolvidas = [
  {
    id: 1,
    code: "EF01MA11",
    name: "Descrever a localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás",
  },
  {
    id: 2,
    code: "EF01MA12",
    name: "Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.",
  },
];

export const empenhosAlunos = [
  {
    id: 1,
    name: "Acabou de começar",
    description:
      "Demonstra dificuldade para descrever a localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás",
  },
  {
    id: 2,
    name: "Quase lá",
    description:
      "Demonstra que necessita de intervenção localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás",
  },
  {
    id: 3,
    name: "Concluiu",
    description:
      "Descreveu com autonomia a localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás",
  },
];

export const planejarAvancar = [
  {
    id: 1,
    name: 'Você percebeu que seu aluno está enfrentando dificuldades para compreender os conceitos iniciais de localização. Para potencializar os saberes do seu aluno, considere seus conhecimentos prévios e utilize nossas sugestões de atividades para desenvolver essa habilidade. Prefira trabalhar com materiais concretos para manipulação de objetos  e experiência com movimentos e posições. Utilize jogos de tabuleiro como "Cobras e escadas" para estimular a habilidades iniciais em matemática, incluindo sequência numérica, posição espacial e operações simples. Aproveite as habilidades equilíbrio, força, lateralidade, coordenação motora, a noção de direita/esquerda encontrados no jogo "Twister" para desenvolver uma proposta significativa de aprendizagem. Para trabalhar de maneira plugada utilize a plataforma WordWall para gamificar uma atividade de que estimule o aluno a escolher a direção ou posição de um objeto. DICA: Trabalhe com rotação por estações para que os alunos tenham a oportunidade de vivenciar diferentes maneiras de aprender e ampliar o repertório de possibilidades matemáticas para avançar.',
    prompt:
      "Já utilizei o jogo Twister para trabalhar lateralidade, o que mais posso fazer?",
  },
  {
    id: 2,
    name: 'Seu aluno já entendeu alguns conceitos de localização, mas demonstra que precisa da sua ajuda ou de seus colegas na maior parte do tempo para realizar suas tarefas. Para auxiliá-lo a sentir-se mais confiante e avançar nessa habilidade, sugerimos os seguintes recursos: Caso prefira trabalhar de forma desplugada, peça ao aluno para identificar onde estão os objetos em relação a pontos de referência fixos. Sugira a brincadeira "Siga o Líder" para que o estudante conduza as regras e pratique a compreensão e execução de instruções de movimento. Pra trabalhar de maneira plugada, utilize o robô Lightbot (https://lightbot.com/) para melhorar a capacidade do aluno de compreender posição, localização e direção. DICA: Trabalhe com agrupamentos produtivos para que os alunos troquem suas percepções entre pares. Esses compartilhamentos de ideias enriquecem os processos pedagógicos e dinamizam as propostas.',
    prompt:
      "Já utilizei o aplicativo Lightbot para trabalhar direções, quais outras ferramentas posso utilizar?",
  },
  {
    id: 3,
    name: 'Para você fazer intervenções significativas e seu aluno aplicar a habilidade que já domina, sugerimos os seguintes recursos: Ofereça desafios de resolução de problemas para que seu aluno vá além e desenvolva o pensamento computacional. Utilize sites como: https://scratchbrasil.org.br/ e https://www.google.com.br/earth/ para envolver a resolução de problemas que requerem a utilização de coordenadas ou instruções de deslocamento. Caso prefira trabalhar de forma desplugada, leve seu aluno a experimentar situações do mundo real, como criar uma brincadeira de "caça ao tesouro", dar direções para um colega encontrar um objeto específico ou chegar a um ponto de encontro em um espaço da escola. DICA: Desafie seus alunos a apresentarem suas descobertas utilizando a metodologia de sala de aula invertida. Deixe claro desde o início da atividade que ele será responsável por compartilhar com seus colegas suas habilidades adquiridas com a interação dos recursos utilizados.',
    prompt:
      "Já utilizei o aplicativo ScrathJr para trabalhar direções, o que mais posso fazer?",
  },
];

export const historicoAcoes = [
  {
    id: 1,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 5,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 6,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 7,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 8,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 9,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 10,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 11,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 12,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 13,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 14,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 15,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 16,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 17,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 18,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 19,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 20,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 21,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 22,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 23,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 24,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 25,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 26,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 27,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 28,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 29,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 30,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 31,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 32,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 33,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 34,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 35,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 36,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 37,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 38,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 39,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 40,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 41,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 42,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 43,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 44,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 45,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 46,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 47,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 48,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 49,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 50,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 51,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 52,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 53,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 54,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 55,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 56,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 57,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 58,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 59,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 60,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 61,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 62,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 63,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 64,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 65,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 66,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 67,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 68,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 69,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 70,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 71,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 72,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 73,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 74,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 75,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 76,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 77,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 78,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 79,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 80,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 81,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 82,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 83,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 84,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 85,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 86,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 87,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 88,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 89,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 90,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 91,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 92,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 93,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 94,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 95,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 96,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 97,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 98,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 99,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 100,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 101,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 102,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 103,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 104,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 105,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 106,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 107,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 108,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 109,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 110,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 111,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 112,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 113,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 114,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 115,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 116,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 117,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 118,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 119,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 120,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 121,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 122,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 123,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 124,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 125,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 126,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 127,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 128,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 129,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 130,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 131,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 132,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 133,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 134,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 135,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 136,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 137,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 138,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 139,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 140,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 141,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 142,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 143,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 144,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 145,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 146,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 147,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 148,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 149,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 150,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 151,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 152,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 153,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 154,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 155,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 156,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 157,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 158,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 159,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 160,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 161,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 162,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 163,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 164,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 165,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 166,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 167,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 168,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 169,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 170,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 171,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 172,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 173,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 174,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 175,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 176,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 177,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 178,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 179,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 180,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 181,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 182,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 183,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 184,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 185,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 186,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 187,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 188,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 189,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 190,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 191,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 192,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 193,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 194,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 195,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 196,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 197,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 198,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 199,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 200,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 201,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 202,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 203,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 204,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 205,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 206,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 207,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 208,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 209,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 210,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 211,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 212,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 213,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 214,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 215,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 216,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 217,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 218,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 219,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 220,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 221,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 222,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 223,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 224,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 225,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 226,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 227,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 228,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 229,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 230,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 231,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 232,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 233,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 234,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 235,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 236,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 237,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 238,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 239,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 240,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 241,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 242,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 243,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 244,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 245,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 246,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 247,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 248,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 249,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 250,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 251,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 252,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 253,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 254,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 255,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 256,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 257,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 258,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 259,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 260,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 261,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 262,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 263,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 264,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 265,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 266,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 267,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 268,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 269,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 270,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 271,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 272,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 273,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 274,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 275,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 276,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 277,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 278,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 279,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 280,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 281,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 282,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 283,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 284,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 285,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 286,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 287,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 288,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 289,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 290,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 291,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 292,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 293,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 294,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 295,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 296,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 297,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 298,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 299,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 300,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 301,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 302,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 303,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 304,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 305,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 306,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 307,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 308,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 309,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 310,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 311,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 312,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 313,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 314,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 315,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 316,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 317,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 318,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 319,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 320,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 321,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 322,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 323,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 324,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 325,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 326,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 327,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 328,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 329,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 330,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 331,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 332,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 333,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 334,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 335,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 336,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 337,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 338,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 339,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 340,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 341,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 342,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 343,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 344,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 345,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 346,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 347,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 348,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 349,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 350,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 351,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 352,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 353,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 354,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 355,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 356,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 357,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 358,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 359,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 360,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 361,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 362,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 363,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 364,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 365,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 366,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 367,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 368,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 369,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 370,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 371,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 372,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 373,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 374,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 375,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 376,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 377,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 378,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 379,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 380,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 381,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 382,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 383,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 384,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 385,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 386,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 387,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 388,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 389,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 390,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 391,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 392,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 393,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 394,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 395,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 396,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 397,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 398,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 399,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 400,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 401,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 402,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 403,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 404,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 405,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 406,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 407,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 408,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 409,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 410,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 411,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 412,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 413,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 414,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 415,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 416,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 417,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 418,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 419,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 420,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 421,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 422,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 423,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 424,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 425,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 426,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 427,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 428,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 429,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 430,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 431,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 432,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 433,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 434,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 435,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 436,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 437,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 438,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 439,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 440,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 441,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 442,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 443,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 444,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 445,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 446,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 447,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 448,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 449,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 450,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 451,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 452,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 453,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 454,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 455,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 456,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 457,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 458,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 459,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 460,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 461,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 462,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 463,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 464,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 465,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 466,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 467,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 468,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 469,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 470,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 471,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 472,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 473,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 474,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 475,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 476,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 477,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 478,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 479,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 480,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 481,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 482,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 483,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 484,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 485,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 486,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 487,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 488,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 489,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 490,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 491,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 492,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 493,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 494,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 495,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 496,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 497,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 498,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 499,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 500,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 501,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 502,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 503,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 504,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 505,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 506,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 507,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 508,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 509,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 510,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 511,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 512,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 513,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 514,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 515,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 516,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 517,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 518,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 519,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 520,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 521,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 522,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 523,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 524,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 525,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 526,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 527,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 528,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 529,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 530,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 531,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 532,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 533,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 534,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 535,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 536,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 537,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 538,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 539,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 540,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 541,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 542,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 543,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 544,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 545,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 546,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 547,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 548,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 549,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 550,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 551,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 552,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 553,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 554,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 555,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 556,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 557,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 558,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 559,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 560,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 561,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 562,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 563,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 564,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 565,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 566,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 567,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 568,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 569,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 570,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 571,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 572,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 573,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 574,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 575,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 576,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 577,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 578,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 579,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 580,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 581,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 582,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 583,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 584,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 585,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 586,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 587,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 588,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 589,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 590,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 591,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 592,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 593,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 594,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 595,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 596,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 597,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 598,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 599,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 600,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 601,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 602,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 603,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 604,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 605,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 606,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 607,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 608,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 609,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 610,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 611,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 612,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 613,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 614,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 615,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 616,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 617,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 618,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 619,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 620,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 621,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 622,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 623,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 624,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 625,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 626,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 627,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 628,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 629,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 630,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 631,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 632,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 633,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 634,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 635,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 636,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 637,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 638,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 639,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 640,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 641,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 642,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 643,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 644,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 645,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 646,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 647,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 648,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 649,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 650,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 651,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 652,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 653,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 654,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 655,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 656,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 657,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 658,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 659,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 660,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 661,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 662,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 663,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 664,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 665,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 666,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 667,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 668,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 669,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 670,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 671,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 672,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 673,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 674,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 675,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 676,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 677,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 678,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 679,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 680,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 681,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 682,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 683,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 684,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 685,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 686,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 687,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 688,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 689,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 690,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 691,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 692,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 693,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 694,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 695,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 696,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 697,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 698,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 699,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 700,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 701,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 702,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 703,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 704,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 705,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 706,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 707,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 708,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 709,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 710,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 711,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 712,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 713,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 714,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 715,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 716,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 717,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 718,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 719,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 720,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 721,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 722,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 723,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 724,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 725,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 726,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 727,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 728,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 729,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 730,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 731,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 732,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 733,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 734,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 735,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 736,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 737,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 738,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 739,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 740,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 741,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 742,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 743,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 744,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 745,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 746,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 747,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 748,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 749,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 750,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 751,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 752,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 753,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 754,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 755,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 756,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 757,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 758,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 759,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 760,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 761,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 762,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 763,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 764,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 765,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 766,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 767,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 768,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 769,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 770,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 771,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 772,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 773,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 774,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 775,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 776,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 777,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 778,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 779,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 780,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 781,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 782,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 783,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 784,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 785,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 786,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 787,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 788,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 789,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 790,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 791,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 792,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 793,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 794,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 795,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 796,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 797,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 798,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 799,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 800,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 801,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 802,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 803,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 804,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 805,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 806,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 807,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 808,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 809,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 810,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 811,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 812,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 813,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 814,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 815,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 816,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 817,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 818,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 819,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 820,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 821,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 822,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 823,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 824,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 825,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 826,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 827,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 828,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 829,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 830,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 831,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 832,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 833,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 834,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 835,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 836,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 837,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 838,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 839,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 840,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 841,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 842,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 843,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 844,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 845,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 846,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 847,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 848,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 849,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 850,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 851,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 852,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 853,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 854,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 855,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 856,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 857,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 858,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 859,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 860,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 861,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 862,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 863,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 864,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 865,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 866,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 867,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 868,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 869,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 870,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 871,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 872,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 873,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 874,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 875,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 876,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 877,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 878,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 879,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 880,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 881,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 882,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 883,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 884,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 885,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 886,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 887,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 888,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 889,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 890,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 891,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 892,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 893,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 894,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 895,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 896,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 897,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 898,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 899,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 900,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 901,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 902,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 903,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 904,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 905,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 906,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 907,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 908,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 909,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 910,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 911,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 912,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 913,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 914,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 915,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 916,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 917,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 918,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 919,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 920,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 921,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 922,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 923,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 924,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 925,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 926,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 927,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 928,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 929,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 930,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 931,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 932,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 933,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 934,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 935,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 936,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 937,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 938,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 939,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 940,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 941,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 942,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 943,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 944,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 945,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 946,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 947,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 948,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 949,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 950,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 951,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 952,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 953,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 954,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 955,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 956,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 957,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 958,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 959,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 960,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 961,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 962,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 963,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 964,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 965,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 966,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 967,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 968,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 969,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 970,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 971,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 972,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 973,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 974,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 975,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 976,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 977,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 978,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 979,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 980,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 981,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 982,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 983,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 984,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 985,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 986,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 987,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 988,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 989,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 990,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 991,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 992,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 993,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 994,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 995,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 996,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 997,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 998,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 999,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1000,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1001,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1002,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1003,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1004,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1005,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1006,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1007,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1008,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1009,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1010,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1011,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1012,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1013,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1014,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1015,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1016,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1017,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1018,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1019,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1020,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1021,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1022,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1023,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1024,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1025,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1026,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1027,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1028,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1029,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1030,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1031,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1032,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1033,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1034,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1035,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1036,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1037,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1038,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1039,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1040,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1041,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1042,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1043,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1044,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1045,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1046,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1047,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1048,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1049,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1050,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1051,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1052,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1053,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1054,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1055,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1056,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1057,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1058,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1059,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1060,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1061,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1062,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1063,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1064,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1065,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1066,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1067,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1068,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1069,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1070,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1071,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1072,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1073,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1074,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1075,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1076,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1077,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1078,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1079,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1080,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1081,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1082,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1083,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1084,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1085,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1086,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1087,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1088,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1089,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1090,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1091,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1092,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1093,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1094,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1095,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1096,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1097,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1098,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1099,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1100,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1101,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1102,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1103,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1104,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1105,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1106,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1107,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1108,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1109,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1110,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1111,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1112,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1113,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1114,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1115,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1116,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1117,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1118,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1119,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1120,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1121,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1122,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1123,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1124,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1125,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1126,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1127,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1128,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1129,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1130,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1131,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1132,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1133,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1134,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1135,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1136,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1137,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1138,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1139,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1140,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1141,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1142,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1143,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1144,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1145,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1146,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1147,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1148,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1149,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1150,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1151,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1152,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1153,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1154,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1155,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1156,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1157,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1158,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1159,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1160,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1161,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1162,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1163,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1164,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1165,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1166,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1167,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1168,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1169,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1170,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1171,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1172,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1173,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1174,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1175,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1176,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1177,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1178,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1179,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1180,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1181,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1182,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1183,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1184,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1185,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1186,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1187,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1188,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1189,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1190,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1191,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1192,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1193,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1194,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1195,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1196,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1197,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1198,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1199,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1200,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1201,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1202,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1203,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1204,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1205,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1206,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1207,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1208,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1209,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1210,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1211,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1212,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1213,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1214,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1215,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1216,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1217,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1218,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1219,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1220,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1221,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1222,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1223,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1224,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1225,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1226,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1227,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1228,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1229,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1230,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1231,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1232,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1233,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1234,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1235,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1236,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1237,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1238,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1239,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1240,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1241,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1242,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1243,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1244,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1245,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1246,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1247,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1248,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1249,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1250,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1251,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1252,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1253,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1254,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1255,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1256,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1257,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1258,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1259,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1260,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1261,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1262,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1263,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1264,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1265,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1266,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1267,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1268,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1269,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1270,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1271,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1272,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1273,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1274,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1275,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1276,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1277,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1278,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1279,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1280,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1281,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1282,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1283,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1284,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1285,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1286,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1287,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1288,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1289,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1290,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1291,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1292,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1293,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1294,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1295,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1296,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1297,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1298,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1299,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1300,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1301,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1302,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1303,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1304,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1305,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1306,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1307,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1308,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1309,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1310,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1311,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1312,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1313,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1314,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1315,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1316,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1317,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1318,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1319,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1320,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1321,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1322,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1323,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1324,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1325,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1326,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1327,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1328,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1329,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1330,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1331,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1332,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1333,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1334,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1335,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1336,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1337,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1338,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1339,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1340,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1341,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1342,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1343,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1344,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1345,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1346,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1347,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1348,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1349,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1350,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1351,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1352,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1353,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1354,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1355,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1356,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1357,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1358,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1359,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1360,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1361,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1362,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1363,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1364,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1365,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1366,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1367,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1368,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1369,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1370,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1371,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1372,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1373,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1374,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1375,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1376,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1377,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1378,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1379,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1380,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1381,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1382,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1383,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1384,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1385,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1386,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1387,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1388,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1389,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1390,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1391,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1392,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1393,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1394,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1395,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1396,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1397,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1398,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1399,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1400,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1401,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1402,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1403,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1404,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1405,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1406,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1407,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1408,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1409,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1410,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1411,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1412,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1413,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1414,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1415,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1416,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1417,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1418,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1419,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1420,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1421,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1422,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1423,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1424,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1425,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1426,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1427,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1428,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1429,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1430,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1431,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1432,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1433,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1434,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1435,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1436,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1437,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1438,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1439,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1440,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1441,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1442,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1443,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1444,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1445,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1446,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1447,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1448,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1449,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1450,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1451,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1452,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1453,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1454,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1455,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1456,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1457,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1458,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1459,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1460,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1461,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1462,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1463,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1464,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1465,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1466,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1467,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1468,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1469,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1470,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1471,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1472,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1473,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1474,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1475,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1476,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1477,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1478,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1479,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1480,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1481,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1482,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1483,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1484,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1485,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1486,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1487,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1488,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1489,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1490,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1491,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1492,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1493,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1494,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1495,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1496,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1497,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1498,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1499,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1500,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1501,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1502,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1503,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1504,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1505,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1506,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1507,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1508,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1509,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1510,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1511,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1512,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1513,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1514,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1515,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1516,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1517,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1518,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1519,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1520,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1521,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1522,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1523,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1524,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1525,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1526,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1527,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1528,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1529,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1530,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1531,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1532,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1533,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1534,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1535,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1536,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1537,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1538,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1539,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1540,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1541,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1542,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1543,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1544,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1545,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1546,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1547,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1548,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1549,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1550,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1551,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1552,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1553,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1554,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1555,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1556,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1557,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1558,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1559,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1560,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1561,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1562,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1563,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1564,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1565,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1566,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1567,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1568,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1569,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1570,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1571,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1572,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1573,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1574,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1575,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1576,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1577,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1578,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1579,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1580,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1581,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1582,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1583,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1584,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1585,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1586,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1587,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1588,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1589,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1590,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1591,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1592,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1593,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1594,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1595,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1596,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1597,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1598,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1599,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1600,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1601,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1602,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1603,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1604,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1605,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1606,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1607,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1608,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1609,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1610,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1611,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1612,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1613,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1614,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1615,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1616,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1617,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1618,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1619,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1620,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1621,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1622,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1623,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1624,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1625,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1626,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1627,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1628,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1629,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1630,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1631,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1632,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1633,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1634,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1635,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1636,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1637,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1638,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1639,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1640,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1641,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1642,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1643,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1644,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1645,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1646,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1647,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1648,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1649,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1650,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1651,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1652,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1653,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1654,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1655,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1656,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1657,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1658,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1659,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1660,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1661,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1662,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1663,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1664,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1665,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1666,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1667,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1668,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1669,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1670,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1671,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1672,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1673,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1674,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1675,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1676,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1677,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1678,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1679,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1680,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1681,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1682,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1683,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1684,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1685,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1686,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1687,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1688,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1689,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1690,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1691,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1692,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1693,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1694,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1695,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1696,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1697,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1698,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1699,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1700,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1701,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1702,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1703,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1704,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1705,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1706,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1707,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1708,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1709,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1710,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1711,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1712,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1713,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1714,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1715,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1716,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1717,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1718,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1719,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1720,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1721,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1722,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1723,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1724,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1725,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1726,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1727,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1728,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1729,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1730,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1731,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1732,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1733,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1734,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1735,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1736,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1737,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1738,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1739,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1740,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1741,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1742,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1743,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1744,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1745,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1746,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1747,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1748,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1749,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1750,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1751,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1752,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1753,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1754,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1755,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1756,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1757,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1758,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1759,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1760,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1761,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1762,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1763,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1764,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1765,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1766,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1767,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1768,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1769,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1770,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1771,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1772,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1773,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1774,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1775,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1776,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1777,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1778,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1779,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1780,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1781,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1782,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1783,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1784,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1785,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1786,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1787,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1788,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1789,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1790,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1791,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1792,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1793,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1794,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1795,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1796,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1797,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1798,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1799,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1800,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1801,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1802,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1803,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1804,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1805,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1806,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1807,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1808,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1809,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1810,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1811,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1812,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1813,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1814,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1815,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1816,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1817,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1818,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1819,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1820,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1821,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1822,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1823,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1824,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1825,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1826,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1827,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1828,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1829,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1830,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1831,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1832,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1833,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1834,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1835,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1836,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1837,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1838,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1839,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1840,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1841,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1842,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1843,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1844,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1845,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1846,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1847,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1848,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1849,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1850,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1851,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1852,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1853,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1854,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1855,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1856,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1857,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1858,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1859,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1860,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1861,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1862,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1863,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1864,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1865,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1866,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1867,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1868,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1869,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1870,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1871,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1872,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1873,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1874,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1875,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1876,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1877,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1878,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1879,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1880,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1881,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1882,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1883,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1884,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1885,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1886,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1887,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1888,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1889,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1890,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1891,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1892,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1893,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1894,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1895,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1896,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1897,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1898,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1899,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1900,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1901,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1902,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1903,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1904,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1905,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1906,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1907,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1908,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1909,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1910,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1911,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1912,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1913,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1914,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1915,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1916,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1917,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1918,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1919,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1920,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1921,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1922,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1923,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1924,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1925,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1926,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1927,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1928,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1929,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1930,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1931,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1932,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1933,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1934,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1935,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1936,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1937,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1938,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1939,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1940,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1941,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1942,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1943,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1944,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1945,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1946,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1947,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1948,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1949,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1950,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1951,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1952,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1953,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1954,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1955,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1956,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1957,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1958,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1959,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1960,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1961,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1962,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1963,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1964,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1965,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1966,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1967,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1968,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1969,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1970,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1971,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1972,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1973,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1974,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1975,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1976,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1977,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1978,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1979,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1980,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1981,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1982,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1983,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1984,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1985,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1986,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1987,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1988,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1989,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1990,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 1991,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1992,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1993,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1994,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1995,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 1996,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1997,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1998,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 1999,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2000,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2001,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2002,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2003,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2004,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2005,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2006,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2007,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2008,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2009,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2010,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2011,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2012,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2013,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2014,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2015,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2016,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2017,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2018,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2019,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2020,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2021,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2022,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2023,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2024,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2025,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2026,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2027,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2028,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2029,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2030,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2031,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2032,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2033,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2034,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2035,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2036,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2037,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2038,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2039,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2040,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2041,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2042,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2043,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2044,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2045,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2046,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2047,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2048,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2049,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2050,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2051,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2052,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2053,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2054,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2055,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2056,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2057,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2058,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2059,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2060,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2061,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2062,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2063,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2064,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2065,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2066,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2067,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2068,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2069,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2070,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2071,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2072,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2073,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2074,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2075,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2076,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2077,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2078,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2079,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2080,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2081,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2082,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2083,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2084,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2085,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2086,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2087,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2088,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2089,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2090,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2091,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2092,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2093,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2094,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2095,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2096,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2097,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2098,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2099,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2100,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2101,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2102,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2103,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2104,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2105,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2106,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2107,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2108,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2109,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2110,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2111,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2112,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2113,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2114,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2115,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2116,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2117,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2118,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2119,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2120,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2121,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2122,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2123,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2124,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2125,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2126,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2127,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2128,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2129,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2130,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2131,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2132,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2133,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2134,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2135,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2136,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2137,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2138,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2139,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2140,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2141,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2142,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2143,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2144,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2145,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2146,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2147,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2148,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2149,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2150,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2151,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2152,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2153,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2154,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2155,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2156,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2157,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2158,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2159,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2160,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2161,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2162,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2163,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2164,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2165,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2166,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2167,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2168,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2169,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2170,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2171,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2172,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2173,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2174,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2175,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2176,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2177,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2178,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2179,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2180,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2181,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2182,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2183,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2184,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2185,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2186,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2187,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2188,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2189,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2190,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2191,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2192,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2193,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2194,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2195,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2196,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2197,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2198,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2199,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2200,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2201,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2202,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2203,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2204,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2205,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2206,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2207,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2208,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2209,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2210,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2211,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2212,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2213,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2214,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2215,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2216,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2217,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2218,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2219,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2220,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2221,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2222,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2223,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2224,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2225,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2226,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2227,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2228,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2229,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2230,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2231,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2232,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2233,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2234,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2235,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2236,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2237,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2238,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2239,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2240,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2241,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2242,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2243,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2244,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2245,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2246,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2247,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2248,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2249,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2250,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2251,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2252,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2253,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2254,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2255,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2256,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2257,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2258,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2259,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2260,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2261,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2262,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2263,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2264,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2265,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2266,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2267,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2268,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2269,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2270,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2271,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2272,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2273,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2274,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2275,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2276,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2277,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2278,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2279,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2280,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2281,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2282,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2283,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2284,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2285,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2286,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2287,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2288,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2289,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2290,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2291,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2292,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2293,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2294,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2295,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2296,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2297,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2298,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2299,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2300,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2301,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2302,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2303,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2304,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2305,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2306,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2307,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2308,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2309,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2310,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2311,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2312,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2313,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2314,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2315,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2316,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2317,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2318,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2319,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2320,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2321,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2322,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2323,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2324,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2325,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2326,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2327,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2328,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2329,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2330,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2331,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2332,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2333,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2334,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2335,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2336,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2337,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2338,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2339,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2340,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2341,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2342,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2343,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2344,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2345,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2346,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2347,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2348,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2349,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2350,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2351,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2352,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2353,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2354,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2355,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2356,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2357,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2358,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2359,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2360,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2361,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2362,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2363,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2364,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2365,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2366,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2367,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2368,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2369,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2370,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2371,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2372,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2373,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2374,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2375,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2376,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2377,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2378,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2379,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2380,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2381,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2382,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2383,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2384,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2385,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2386,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2387,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2388,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2389,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2390,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2391,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2392,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2393,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2394,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2395,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2396,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2397,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2398,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2399,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2400,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2401,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2402,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2403,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2404,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2405,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2406,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2407,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2408,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2409,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2410,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2411,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2412,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2413,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2414,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2415,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2416,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2417,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2418,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2419,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2420,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2421,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2422,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2423,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2424,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2425,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2426,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2427,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2428,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2429,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2430,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2431,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2432,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2433,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2434,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2435,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2436,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2437,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2438,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2439,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2440,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2441,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2442,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2443,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2444,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2445,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2446,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2447,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2448,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2449,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2450,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2451,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2452,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2453,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2454,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2455,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2456,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2457,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2458,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2459,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2460,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2461,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2462,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2463,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2464,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2465,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2466,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2467,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2468,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2469,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2470,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2471,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2472,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2473,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2474,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2475,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2476,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2477,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2478,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2479,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2480,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2481,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2482,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2483,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2484,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2485,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2486,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2487,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2488,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2489,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2490,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2491,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2492,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2493,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2494,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2495,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2496,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2497,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2498,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2499,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2500,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2501,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2502,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2503,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2504,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2505,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2506,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2507,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2508,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2509,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2510,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2511,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2512,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2513,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2514,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2515,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2516,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2517,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2518,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2519,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2520,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2521,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2522,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2523,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2524,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2525,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2526,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2527,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2528,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2529,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2530,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2531,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2532,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2533,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2534,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2535,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2536,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2537,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2538,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2539,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2540,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2541,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2542,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2543,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2544,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2545,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2546,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2547,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2548,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2549,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2550,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2551,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2552,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2553,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2554,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2555,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2556,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2557,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2558,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2559,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2560,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2561,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2562,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2563,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2564,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2565,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2566,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2567,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2568,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2569,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2570,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2571,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2572,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2573,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2574,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2575,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2576,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2577,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2578,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2579,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2580,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2581,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2582,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2583,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2584,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2585,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2586,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2587,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2588,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2589,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2590,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2591,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2592,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2593,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2594,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2595,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2596,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2597,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2598,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2599,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2600,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2601,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2602,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2603,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2604,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2605,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2606,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2607,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2608,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2609,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2610,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2611,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2612,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2613,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2614,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2615,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2616,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2617,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2618,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2619,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2620,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2621,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2622,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2623,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2624,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2625,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2626,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2627,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2628,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2629,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2630,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2631,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2632,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2633,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2634,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2635,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2636,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2637,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2638,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2639,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2640,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2641,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2642,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2643,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2644,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2645,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2646,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2647,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2648,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2649,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2650,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2651,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2652,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2653,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2654,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2655,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2656,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2657,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2658,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2659,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2660,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2661,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2662,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2663,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2664,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2665,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2666,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2667,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2668,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2669,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2670,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2671,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2672,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2673,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2674,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2675,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2676,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2677,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2678,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2679,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2680,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2681,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2682,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2683,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2684,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2685,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2686,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2687,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2688,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2689,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2690,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2691,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2692,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2693,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2694,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2695,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2696,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2697,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2698,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2699,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2700,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2701,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2702,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2703,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2704,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2705,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2706,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2707,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2708,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2709,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2710,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2711,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2712,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2713,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2714,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2715,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2716,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2717,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2718,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2719,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2720,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2721,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2722,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2723,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2724,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2725,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2726,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2727,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2728,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2729,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2730,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2731,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2732,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2733,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2734,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2735,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2736,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2737,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2738,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2739,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2740,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2741,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2742,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2743,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2744,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2745,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2746,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2747,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2748,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2749,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2750,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2751,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2752,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2753,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2754,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2755,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2756,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2757,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2758,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2759,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2760,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2761,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2762,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2763,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2764,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2765,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2766,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2767,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2768,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2769,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2770,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2771,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2772,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2773,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2774,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2775,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2776,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2777,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2778,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2779,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2780,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2781,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2782,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2783,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2784,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2785,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2786,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2787,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2788,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2789,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2790,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2791,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2792,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2793,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2794,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2795,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2796,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2797,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2798,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2799,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2800,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2801,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2802,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2803,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2804,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2805,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2806,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2807,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2808,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2809,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2810,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2811,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2812,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2813,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2814,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2815,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2816,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2817,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2818,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2819,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2820,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2821,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2822,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2823,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2824,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2825,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2826,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2827,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2828,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2829,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2830,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2831,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2832,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2833,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2834,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2835,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2836,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2837,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2838,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2839,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2840,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2841,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2842,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2843,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2844,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2845,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2846,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2847,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2848,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2849,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2850,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2851,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2852,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2853,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2854,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2855,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2856,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2857,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2858,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2859,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2860,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2861,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2862,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2863,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2864,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2865,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2866,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2867,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2868,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2869,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2870,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2871,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2872,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2873,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2874,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2875,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2876,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2877,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2878,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2879,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2880,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2881,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2882,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2883,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2884,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2885,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2886,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2887,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2888,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2889,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2890,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2891,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2892,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2893,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2894,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2895,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2896,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2897,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2898,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2899,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2900,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2901,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2902,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2903,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2904,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2905,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2906,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2907,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2908,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2909,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2910,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2911,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2912,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2913,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2914,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2915,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2916,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2917,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2918,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2919,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2920,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2921,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2922,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2923,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2924,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2925,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2926,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2927,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2928,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2929,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2930,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2931,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2932,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2933,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2934,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2935,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2936,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2937,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2938,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2939,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2940,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2941,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2942,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2943,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2944,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2945,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2946,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2947,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2948,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2949,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2950,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2951,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2952,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2953,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2954,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2955,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2956,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2957,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2958,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2959,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2960,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2961,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2962,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2963,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2964,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2965,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2966,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2967,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2968,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2969,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2970,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2971,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2972,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2973,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2974,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2975,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2976,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2977,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2978,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2979,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2980,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2981,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2982,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2983,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2984,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2985,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2986,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2987,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2988,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2989,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2990,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2991,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2992,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2993,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 2994,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2995,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2996,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 2997,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2998,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 2999,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3000,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3001,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3002,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3003,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3004,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3005,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3006,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3007,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3008,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3009,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3010,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3011,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3012,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3013,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3014,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3015,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3016,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3017,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3018,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3019,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3020,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3021,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3022,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3023,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3024,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3025,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3026,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3027,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3028,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3029,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3030,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3031,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3032,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3033,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3034,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3035,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3036,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3037,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3038,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3039,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3040,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3041,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3042,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3043,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3044,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3045,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3046,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3047,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3048,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3049,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3050,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3051,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3052,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3053,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3054,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3055,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3056,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3057,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3058,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3059,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3060,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3061,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3062,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3063,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3064,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3065,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3066,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3067,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3068,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3069,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3070,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3071,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3072,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3073,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3074,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3075,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3076,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3077,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3078,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3079,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3080,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3081,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3082,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3083,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3084,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3085,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3086,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3087,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3088,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3089,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3090,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3091,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3092,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3093,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3094,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3095,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3096,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3097,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3098,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3099,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3100,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3101,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3102,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3103,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3104,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3105,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3106,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3107,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3108,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3109,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3110,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3111,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3112,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3113,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3114,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3115,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3116,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3117,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3118,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3119,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3120,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3121,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3122,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3123,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3124,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3125,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3126,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3127,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3128,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3129,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3130,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3131,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3132,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3133,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3134,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3135,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3136,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3137,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3138,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3139,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3140,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3141,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3142,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3143,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3144,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3145,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3146,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3147,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3148,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3149,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3150,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3151,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3152,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3153,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3154,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3155,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3156,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3157,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3158,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3159,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3160,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3161,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3162,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3163,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3164,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3165,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3166,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3167,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3168,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3169,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3170,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3171,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3172,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3173,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3174,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3175,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3176,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3177,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3178,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3179,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3180,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3181,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3182,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3183,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3184,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3185,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3186,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3187,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3188,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3189,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3190,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3191,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3192,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3193,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3194,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3195,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3196,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3197,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3198,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3199,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3200,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3201,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3202,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3203,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3204,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3205,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3206,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3207,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3208,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3209,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3210,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3211,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3212,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3213,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3214,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3215,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3216,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3217,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3218,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3219,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3220,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3221,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3222,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3223,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3224,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3225,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3226,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3227,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3228,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3229,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3230,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3231,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3232,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3233,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3234,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3235,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3236,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3237,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3238,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3239,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3240,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3241,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3242,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3243,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3244,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3245,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3246,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3247,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3248,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3249,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3250,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3251,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3252,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3253,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3254,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3255,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3256,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3257,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3258,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3259,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3260,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3261,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3262,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3263,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3264,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3265,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3266,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3267,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3268,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3269,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3270,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3271,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3272,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3273,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3274,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3275,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3276,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3277,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3278,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3279,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3280,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3281,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3282,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3283,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3284,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3285,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3286,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3287,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3288,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3289,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3290,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3291,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3292,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3293,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3294,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3295,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3296,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3297,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3298,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3299,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3300,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3301,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3302,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3303,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3304,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3305,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3306,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3307,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3308,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3309,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3310,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3311,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3312,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3313,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3314,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3315,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3316,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3317,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3318,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3319,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3320,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3321,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3322,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3323,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3324,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3325,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3326,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3327,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3328,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3329,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3330,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3331,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3332,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3333,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3334,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3335,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3336,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3337,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3338,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3339,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3340,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3341,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3342,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3343,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3344,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3345,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3346,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3347,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3348,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3349,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3350,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3351,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3352,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3353,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3354,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3355,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3356,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3357,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3358,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3359,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3360,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3361,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3362,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3363,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3364,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3365,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3366,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3367,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3368,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3369,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3370,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3371,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3372,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3373,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3374,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3375,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3376,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3377,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3378,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3379,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3380,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3381,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3382,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3383,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3384,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3385,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3386,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3387,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3388,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3389,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3390,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3391,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3392,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3393,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3394,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3395,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3396,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3397,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3398,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3399,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3400,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3401,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3402,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3403,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3404,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3405,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3406,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3407,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3408,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3409,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3410,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3411,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3412,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3413,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3414,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3415,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3416,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3417,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3418,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3419,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3420,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3421,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3422,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3423,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3424,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3425,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3426,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3427,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3428,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3429,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3430,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3431,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3432,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3433,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3434,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3435,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3436,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3437,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3438,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3439,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3440,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3441,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3442,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3443,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3444,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3445,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3446,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3447,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3448,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3449,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3450,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3451,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3452,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3453,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3454,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3455,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3456,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3457,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3458,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3459,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3460,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3461,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3462,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3463,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3464,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3465,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3466,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3467,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3468,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3469,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3470,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3471,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3472,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3473,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3474,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3475,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3476,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3477,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3478,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3479,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3480,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3481,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3482,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3483,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3484,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3485,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3486,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3487,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3488,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3489,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3490,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3491,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3492,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3493,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3494,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3495,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3496,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3497,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3498,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3499,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3500,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3501,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3502,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3503,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3504,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3505,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3506,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3507,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3508,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3509,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3510,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3511,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3512,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3513,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3514,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3515,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3516,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3517,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3518,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3519,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3520,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3521,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3522,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3523,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3524,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3525,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3526,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3527,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3528,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3529,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3530,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3531,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3532,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3533,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3534,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3535,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3536,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3537,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3538,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3539,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3540,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3541,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3542,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3543,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3544,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3545,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3546,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3547,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3548,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3549,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3550,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3551,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3552,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3553,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3554,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3555,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3556,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3557,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3558,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3559,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3560,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3561,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3562,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3563,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3564,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3565,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3566,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3567,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3568,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3569,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3570,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3571,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3572,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3573,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3574,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3575,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3576,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3577,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3578,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3579,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3580,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3581,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3582,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3583,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3584,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3585,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3586,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3587,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3588,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3589,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3590,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3591,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3592,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3593,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3594,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3595,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3596,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3597,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3598,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3599,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3600,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3601,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3602,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3603,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3604,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3605,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3606,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3607,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3608,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3609,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3610,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3611,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3612,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3613,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3614,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3615,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3616,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3617,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3618,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3619,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3620,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3621,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3622,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3623,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3624,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3625,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3626,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3627,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3628,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3629,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3630,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3631,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3632,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3633,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3634,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3635,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3636,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3637,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3638,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3639,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3640,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3641,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3642,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3643,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3644,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3645,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3646,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3647,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3648,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3649,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3650,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3651,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3652,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3653,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3654,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3655,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3656,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3657,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3658,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3659,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3660,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3661,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3662,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3663,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3664,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3665,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3666,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3667,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3668,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3669,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3670,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3671,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3672,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3673,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3674,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3675,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3676,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3677,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3678,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3679,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3680,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3681,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3682,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3683,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3684,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3685,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3686,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3687,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3688,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3689,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3690,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3691,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3692,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3693,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3694,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3695,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3696,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3697,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3698,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3699,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3700,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3701,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3702,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3703,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3704,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3705,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3706,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3707,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3708,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3709,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3710,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3711,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3712,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3713,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3714,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3715,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3716,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3717,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3718,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3719,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3720,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3721,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3722,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3723,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3724,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3725,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3726,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3727,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3728,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3729,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3730,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3731,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3732,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3733,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3734,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3735,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3736,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3737,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3738,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3739,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3740,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3741,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3742,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3743,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3744,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3745,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3746,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3747,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3748,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3749,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3750,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3751,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3752,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3753,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3754,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3755,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3756,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3757,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3758,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3759,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3760,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3761,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3762,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3763,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3764,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3765,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3766,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3767,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3768,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3769,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3770,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3771,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3772,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3773,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3774,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3775,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3776,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3777,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3778,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3779,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3780,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3781,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3782,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3783,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3784,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3785,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3786,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3787,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3788,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3789,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3790,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3791,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3792,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3793,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3794,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3795,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3796,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3797,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3798,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3799,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3800,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3801,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3802,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3803,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3804,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3805,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3806,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3807,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3808,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3809,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3810,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3811,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3812,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3813,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3814,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3815,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3816,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3817,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3818,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3819,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3820,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3821,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3822,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3823,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3824,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3825,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3826,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3827,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3828,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3829,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3830,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3831,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3832,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3833,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3834,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3835,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3836,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3837,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3838,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3839,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3840,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3841,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3842,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3843,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3844,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3845,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3846,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3847,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3848,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3849,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3850,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3851,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3852,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3853,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3854,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3855,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3856,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3857,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3858,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3859,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3860,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3861,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3862,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3863,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3864,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3865,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3866,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3867,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3868,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3869,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3870,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3871,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3872,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3873,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3874,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3875,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3876,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3877,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3878,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3879,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3880,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3881,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3882,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3883,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3884,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3885,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3886,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3887,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3888,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3889,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3890,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3891,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3892,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3893,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3894,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3895,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3896,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3897,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3898,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3899,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3900,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3901,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3902,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3903,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3904,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3905,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3906,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3907,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3908,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3909,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3910,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3911,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3912,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3913,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3914,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3915,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3916,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3917,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3918,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3919,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3920,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3921,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3922,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3923,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3924,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3925,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3926,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3927,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3928,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3929,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3930,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3931,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3932,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3933,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3934,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3935,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3936,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3937,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3938,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3939,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3940,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3941,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3942,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3943,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3944,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3945,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3946,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3947,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3948,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3949,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3950,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3951,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3952,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3953,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3954,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3955,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3956,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3957,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3958,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3959,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3960,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3961,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3962,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3963,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3964,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3965,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3966,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3967,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3968,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3969,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3970,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3971,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3972,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3973,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3974,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3975,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3976,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3977,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3978,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3979,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3980,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3981,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3982,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3983,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3984,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3985,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3986,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3987,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3988,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3989,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3990,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3991,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3992,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3993,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3994,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3995,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 3996,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3997,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 3998,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 3999,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4000,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4001,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4002,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4003,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4004,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4005,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4006,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4007,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4008,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4009,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4010,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4011,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4012,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4013,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4014,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4015,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4016,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4017,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4018,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4019,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4020,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4021,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4022,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4023,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4024,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4025,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4026,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4027,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4028,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4029,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4030,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4031,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4032,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4033,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4034,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4035,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4036,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4037,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4038,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4039,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4040,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4041,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4042,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4043,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4044,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4045,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4046,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4047,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4048,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4049,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4050,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4051,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4052,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4053,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4054,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4055,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4056,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4057,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4058,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4059,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4060,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4061,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4062,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4063,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4064,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4065,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4066,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4067,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4068,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4069,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4070,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4071,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4072,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4073,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4074,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4075,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4076,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4077,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4078,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4079,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4080,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4081,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4082,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4083,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4084,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4085,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4086,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4087,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4088,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4089,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4090,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4091,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4092,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4093,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4094,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4095,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4096,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4097,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4098,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4099,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4100,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4101,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4102,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4103,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4104,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4105,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4106,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4107,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4108,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4109,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4110,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4111,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4112,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4113,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4114,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4115,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4116,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4117,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4118,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4119,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4120,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4121,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4122,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4123,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4124,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4125,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4126,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4127,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4128,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4129,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4130,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4131,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4132,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4133,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4134,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4135,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4136,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4137,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4138,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4139,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4140,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4141,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4142,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4143,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4144,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4145,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4146,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4147,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4148,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4149,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4150,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4151,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4152,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4153,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4154,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4155,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4156,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4157,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4158,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4159,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4160,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4161,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4162,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4163,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4164,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4165,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4166,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4167,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4168,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4169,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4170,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4171,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4172,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4173,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4174,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4175,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4176,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4177,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4178,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4179,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4180,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4181,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4182,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4183,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4184,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4185,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4186,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4187,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4188,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4189,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4190,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4191,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4192,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4193,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4194,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4195,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4196,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4197,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4198,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4199,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4200,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4201,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4202,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4203,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4204,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4205,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4206,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4207,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4208,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4209,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4210,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4211,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4212,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4213,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4214,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4215,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4216,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4217,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4218,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4219,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4220,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4221,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4222,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4223,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4224,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4225,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4226,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4227,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4228,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4229,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4230,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4231,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4232,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4233,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4234,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4235,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4236,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4237,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4238,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4239,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4240,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4241,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4242,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4243,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4244,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4245,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4246,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4247,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4248,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4249,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4250,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4251,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4252,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4253,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4254,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4255,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4256,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4257,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4258,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4259,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4260,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4261,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4262,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4263,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4264,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4265,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4266,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4267,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4268,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4269,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4270,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4271,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4272,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4273,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4274,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4275,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4276,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4277,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4278,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4279,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4280,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4281,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4282,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4283,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4284,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4285,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4286,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4287,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4288,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4289,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4290,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4291,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4292,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4293,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4294,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4295,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4296,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4297,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4298,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4299,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4300,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4301,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4302,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4303,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4304,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4305,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4306,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4307,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4308,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4309,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4310,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4311,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4312,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4313,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4314,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4315,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4316,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4317,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4318,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4319,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4320,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4321,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4322,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4323,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4324,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4325,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4326,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4327,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4328,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4329,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4330,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4331,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4332,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4333,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4334,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4335,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4336,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4337,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4338,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4339,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4340,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4341,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4342,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4343,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4344,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4345,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4346,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4347,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4348,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4349,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4350,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4351,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4352,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4353,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4354,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4355,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4356,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4357,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4358,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4359,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4360,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4361,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4362,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4363,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4364,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4365,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4366,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4367,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4368,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4369,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4370,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4371,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4372,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4373,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4374,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4375,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4376,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4377,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4378,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4379,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4380,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4381,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4382,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4383,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4384,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4385,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4386,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4387,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4388,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4389,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4390,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4391,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4392,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4393,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4394,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4395,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4396,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4397,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4398,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4399,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4400,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4401,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4402,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4403,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4404,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4405,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4406,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4407,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4408,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4409,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4410,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4411,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4412,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4413,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4414,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4415,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4416,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4417,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4418,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4419,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4420,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4421,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4422,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4423,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4424,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4425,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4426,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4427,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4428,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4429,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4430,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4431,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4432,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4433,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4434,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4435,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4436,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4437,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4438,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4439,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4440,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4441,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4442,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4443,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4444,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4445,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4446,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4447,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4448,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4449,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4450,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4451,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4452,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4453,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4454,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4455,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4456,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4457,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4458,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4459,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4460,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4461,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4462,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4463,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4464,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4465,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4466,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4467,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4468,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4469,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4470,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4471,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4472,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4473,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4474,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4475,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4476,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4477,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4478,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4479,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4480,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4481,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4482,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4483,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4484,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4485,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4486,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4487,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4488,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4489,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4490,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4491,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4492,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4493,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4494,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4495,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4496,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4497,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4498,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4499,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4500,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4501,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4502,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4503,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4504,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4505,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4506,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4507,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4508,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4509,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4510,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4511,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4512,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4513,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4514,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4515,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4516,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4517,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4518,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4519,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4520,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4521,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4522,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4523,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4524,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4525,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4526,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4527,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4528,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4529,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4530,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4531,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4532,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4533,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4534,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4535,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4536,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4537,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4538,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4539,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4540,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4541,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4542,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4543,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4544,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4545,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4546,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4547,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4548,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4549,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4550,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4551,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4552,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4553,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4554,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4555,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4556,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4557,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4558,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4559,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4560,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4561,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4562,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4563,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4564,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4565,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4566,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4567,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4568,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4569,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4570,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4571,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4572,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4573,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4574,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4575,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4576,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4577,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4578,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4579,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4580,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4581,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4582,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4583,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4584,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4585,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4586,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4587,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4588,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4589,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4590,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4591,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4592,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4593,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4594,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4595,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4596,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4597,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4598,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4599,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4600,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4601,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4602,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4603,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4604,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4605,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4606,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4607,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4608,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4609,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4610,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4611,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4612,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4613,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4614,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4615,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4616,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4617,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4618,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4619,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4620,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4621,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4622,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4623,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4624,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4625,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4626,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4627,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4628,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4629,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4630,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4631,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4632,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4633,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4634,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4635,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4636,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4637,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4638,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4639,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4640,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4641,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4642,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4643,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4644,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4645,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4646,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4647,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4648,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4649,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4650,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4651,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4652,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4653,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4654,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4655,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4656,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4657,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4658,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4659,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4660,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4661,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4662,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4663,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4664,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4665,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4666,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4667,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4668,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4669,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4670,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4671,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4672,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4673,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4674,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4675,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4676,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4677,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4678,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4679,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4680,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4681,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4682,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4683,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4684,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4685,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4686,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4687,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4688,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4689,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4690,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4691,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4692,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4693,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4694,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4695,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4696,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4697,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4698,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4699,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4700,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4701,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4702,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4703,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4704,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4705,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4706,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4707,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4708,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4709,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4710,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4711,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4712,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4713,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4714,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4715,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4716,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4717,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4718,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4719,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4720,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4721,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4722,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4723,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4724,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4725,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4726,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4727,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4728,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4729,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4730,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4731,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4732,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4733,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4734,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4735,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4736,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4737,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4738,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4739,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4740,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4741,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4742,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4743,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4744,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4745,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4746,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4747,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4748,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4749,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4750,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4751,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4752,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4753,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4754,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4755,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4756,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4757,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4758,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4759,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4760,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4761,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4762,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4763,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4764,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4765,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4766,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4767,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4768,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4769,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4770,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4771,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4772,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4773,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4774,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4775,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4776,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4777,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4778,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4779,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4780,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4781,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4782,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4783,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4784,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4785,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4786,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4787,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4788,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4789,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4790,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4791,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4792,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4793,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4794,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4795,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4796,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4797,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4798,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4799,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4800,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4801,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4802,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4803,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4804,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4805,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4806,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4807,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4808,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4809,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4810,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4811,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4812,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4813,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4814,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4815,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4816,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4817,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4818,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4819,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4820,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4821,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4822,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4823,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4824,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4825,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4826,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4827,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4828,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4829,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4830,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4831,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4832,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4833,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4834,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4835,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4836,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4837,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4838,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4839,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4840,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4841,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4842,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4843,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4844,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4845,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4846,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4847,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4848,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4849,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4850,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4851,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4852,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4853,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4854,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4855,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4856,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4857,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4858,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4859,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4860,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4861,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4862,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4863,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4864,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4865,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4866,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4867,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4868,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4869,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4870,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4871,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4872,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4873,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4874,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4875,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4876,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4877,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4878,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4879,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4880,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4881,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4882,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4883,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4884,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4885,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4886,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4887,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4888,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4889,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4890,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4891,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4892,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4893,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4894,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4895,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4896,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4897,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4898,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4899,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4900,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4901,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4902,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4903,

    anoEscolar: 5,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4904,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4905,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4906,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4907,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4908,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4909,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4910,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4911,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4912,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4913,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4914,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4915,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4916,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4917,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4918,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4919,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4920,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4921,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4922,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4923,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4924,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4925,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4926,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4927,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4928,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4929,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4930,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4931,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4932,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4933,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4934,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4935,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4936,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4937,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4938,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4939,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4940,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4941,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4942,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4943,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4944,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4945,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4946,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4947,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4948,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4949,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4950,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4951,

    anoEscolar: 5,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4952,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4953,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4954,

    anoEscolar: 1,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4955,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4956,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4957,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4958,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4959,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4960,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4961,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4962,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4963,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4964,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4965,

    anoEscolar: 4,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4966,

    anoEscolar: 2,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4967,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4968,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4969,

    anoEscolar: 4,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4970,

    anoEscolar: 4,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4971,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4972,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4973,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4974,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4975,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4976,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4977,

    anoEscolar: 4,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4978,

    anoEscolar: 3,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4979,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4980,

    anoEscolar: 5,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4981,

    anoEscolar: 1,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4982,

    anoEscolar: 1,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4983,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4984,

    anoEscolar: 3,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4985,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4986,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4987,

    anoEscolar: 5,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4988,

    anoEscolar: 1,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4989,

    anoEscolar: 2,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4990,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4991,

    anoEscolar: 2,
    componenteCurricular: 3,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4992,

    anoEscolar: 3,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4993,

    anoEscolar: 4,
    componenteCurricular: 1,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4994,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4995,

    anoEscolar: 3,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 2,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
  {
    id: 4996,

    anoEscolar: 1,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 4997,

    anoEscolar: 3,
    componenteCurricular: 5,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4998,

    anoEscolar: 5,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 3,
    planejarAvancar: 3,
  },
  {
    id: 4999,

    anoEscolar: 2,
    componenteCurricular: 2,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 1,
    planejarAvancar: 1,
  },
  {
    id: 5000,

    anoEscolar: 2,
    componenteCurricular: 4,
    habilidadeDesenvolvida: 1,
    empenhoAluno: 2,
    planejarAvancar: 2,
  },
];

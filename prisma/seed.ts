import { PrismaClient } from "@prisma/client";
import { anosEscolares, componentesCurriculares, planejarAvancar, empenhosAlunos, habilidadesDesenvolvidas, historicoAcoes } from "./data";

const prisma = new PrismaClient();

async function main() {
  // 
  await prisma.anoEscolar.deleteMany();
  await prisma.anoEscolar.createMany({ data: anosEscolares });
  //
  await prisma.componenteCurricular.deleteMany();
  await prisma.componenteCurricular.createMany({ data: componentesCurriculares });
  //
  await prisma.habilidadeDesenvolvida.deleteMany();
  await prisma.habilidadeDesenvolvida.createMany({ data: habilidadesDesenvolvidas });
  
  // 
  await prisma.empenhoAluno.deleteMany();
  await prisma.empenhoAluno.createMany({ data: empenhosAlunos });

  // 
  await prisma.planejarAvancar.deleteMany();
  await prisma.planejarAvancar.createMany({ data: planejarAvancar });

  await prisma.historicoAcoes.deleteMany();
  await prisma.historicoAcoes.createMany({ data: historicoAcoes });
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

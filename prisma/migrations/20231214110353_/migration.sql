-- CreateTable
CREATE TABLE "HistoricoAcoes" (
    "id" INTEGER NOT NULL,
    "anoEscolar" INTEGER NOT NULL,
    "componenteCurricular" INTEGER NOT NULL,
    "habilidadeDesenvolvida" INTEGER NOT NULL,
    "empenhoAluno" INTEGER NOT NULL,
    "planejarAvancar" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HistoricoAcoes_pkey" PRIMARY KEY ("id")
);

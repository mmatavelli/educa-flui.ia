-- CreateTable
CREATE TABLE "ComponenteCurricular" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComponenteCurricular_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabilidadeDesenvolvida" (
    "id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HabilidadeDesenvolvida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmpenhoAluno" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmpenhoAluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanejarAvancar" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlanejarAvancar_pkey" PRIMARY KEY ("id")
);

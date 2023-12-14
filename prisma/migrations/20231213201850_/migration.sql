-- CreateTable
CREATE TABLE "AnoEscolar" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnoEscolar_pkey" PRIMARY KEY ("id")
);

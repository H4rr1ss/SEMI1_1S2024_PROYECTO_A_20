/*
  Warnings:

  - You are about to alter the column `price` on the `Flight` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Flight" ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "typeFlight" TEXT NOT NULL,
    "travellers" INTEGER NOT NULL,
    "boardingTime" TEXT NOT NULL,
    "arrivalTime" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "check" BOOLEAN NOT NULL,
    "idFlight" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

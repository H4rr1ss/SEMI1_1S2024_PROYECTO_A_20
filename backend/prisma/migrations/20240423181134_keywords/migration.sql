-- CreateTable
CREATE TABLE "KeyWord" (
    "id" SERIAL NOT NULL,
    "keyword" TEXT NOT NULL,
    "destinationId" INTEGER NOT NULL,

    CONSTRAINT "KeyWord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KeyWord" ADD CONSTRAINT "KeyWord_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

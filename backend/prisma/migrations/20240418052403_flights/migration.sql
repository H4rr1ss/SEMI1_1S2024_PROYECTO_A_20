-- CreateTable
CREATE TABLE "Flight" (
    "id" SERIAL NOT NULL,
    "destinationCountry" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "originCountry" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "boardingTime" TEXT NOT NULL,
    "arrivalTime" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "typeFlight" TEXT NOT NULL,
    "preventiveRecommendations" TEXT NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Destination" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flightId" INTEGER NOT NULL,

    CONSTRAINT "Destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Place" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "destinationId" INTEGER NOT NULL,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Destination" ADD CONSTRAINT "Destination_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

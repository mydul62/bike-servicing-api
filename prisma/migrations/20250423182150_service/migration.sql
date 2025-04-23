/*
  Warnings:

  - You are about to drop the `service` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "service" DROP CONSTRAINT "service_bikeId_fkey";

-- DropTable
DROP TABLE "service";

-- CreateTable
CREATE TABLE "services" (
    "serviceId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("serviceId")
);

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bikes"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;

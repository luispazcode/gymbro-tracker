/*
  Warnings:

  - You are about to drop the `MouscleGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MouscleGroup";

-- CreateTable
CREATE TABLE "MuscleGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "MuscleGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MuscleGroup_name_key" ON "MuscleGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MuscleGroup_tag_key" ON "MuscleGroup"("tag");

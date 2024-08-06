/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `Workout` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Workout_tag_key" ON "Workout"("tag");

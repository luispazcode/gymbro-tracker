-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "description" TEXT,
    "muscleGroupTag" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_name_key" ON "Exercise"("name");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_muscleGroupTag_fkey" FOREIGN KEY ("muscleGroupTag") REFERENCES "MuscleGroup"("tag") ON DELETE RESTRICT ON UPDATE CASCADE;

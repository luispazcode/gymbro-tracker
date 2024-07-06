-- CreateTable
CREATE TABLE "MouscleGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "MouscleGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MouscleGroup_name_key" ON "MouscleGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MouscleGroup_tag_key" ON "MouscleGroup"("tag");

import { muscleGroups } from "../data/muscle-groups";
import prisma from "../lib/prisma";
async function main() {
	console.log("Seed started");
	await prisma.set.deleteMany();
	await prisma.exercise.deleteMany();
	await prisma.muscleGroup.deleteMany();
	await prisma.workout.deleteMany();
	// if (process.env.NODE_ENV !== "development") return;
	// 1. Delete previous data
	// await prisma.muscleGroup.deleteMany();
	// 2. Seed muscle groups
	const muscleGroupsData = muscleGroups.map((muscle) => ({
		name: muscle.name,
		tag: muscle.slug,
	}));

	await prisma.muscleGroup.createMany({
		data: muscleGroupsData,
	});

	console.log("Seed finished");
}

(() => {
	main();
})();

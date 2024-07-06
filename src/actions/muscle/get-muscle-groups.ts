"use server";

import prisma from "@/lib/prisma";

export const getMuscleGroups = async () => {
	try {
		const muscleGroups = await prisma.muscleGroup.findMany();
		return muscleGroups;
	} catch (error) {
		console.error(error);
		return [];
	}
};

"use server";

import prisma from "@/lib/prisma";

export const getExercises = async () => {
	try {
		const createdExercises = await prisma.exercise.findMany();

		return createdExercises;
	} catch (error) {
		console.error(error);
		return [];
	}
};

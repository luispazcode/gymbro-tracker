"use server";

import prisma from "@/lib/prisma";

export const getExerciseById = async (exerciseId: string, userId: string) => {
	try {
		const exercise = await prisma.exercise.findUnique({
			where: {
				userId: userId,
				id: exerciseId,
			},
		});
		return exercise;
	} catch (error) {
		console.log(error);
		return null;
	}
};

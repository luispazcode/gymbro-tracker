"use server";

import { CreateExerciseFormData } from "@/components/exercise/CreateExerciseForm";
import prisma from "@/lib/prisma";

export const createExercise = async (formData: CreateExerciseFormData) => {
	try {
		const newExercise = await prisma.exercise.create({
			data: {
				name: formData.exerciseName,
				tag: formData.exerciseName.toLowerCase().replace(/\s/g, "-"),
				description: formData.description,
				muscleGroupTag: formData.muscleGroup,
			},
		});
		return newExercise;
	} catch (error) {
		console.error(error);
	}
};

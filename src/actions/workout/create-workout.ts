"use server";

import { CreateWorkoutFormData } from "@/components/workout/SummaryWorkoutForm";
import prisma from "@/lib/prisma";

export const createWorkout = async (formData: CreateWorkoutFormData) => {
	try {
		const { listExercises } = formData;
		const setsForRecording = listExercises.map((exercise) => {
			return exercise.sets.map((set) => ({
				reps: set.reps,
				weight: set.weight,
				exerciseId: exercise.exerciseValue,
			}));
		});
		const newWorkout = await prisma.workout.create({
			data: {
				name: formData.nameWorkout,
				date: formData.dateWorkout,
				tag:
					formData.nameWorkout.toLowerCase().replace(/\s/g, "-") +
					"-workout-" +
					formData.dateWorkout.toISOString(),
				sets: {
					create: setsForRecording.flat(),
				},
			},
		});
	} catch (error) {
		console.error(error);
	}
};

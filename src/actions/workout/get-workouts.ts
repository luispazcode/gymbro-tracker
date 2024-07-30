"use server";

import { DataItem, GroupedData } from "@/interfaces";
import prisma from "@/lib/prisma";

export const getWorkouts = async () => {
	try {
		const allWorkouts = await prisma.workout.findMany({
			include: {
				sets: {
					include: {
						exercise: {
							select: {
								name: true,
							},
						},
					},
				},
			},
		});
		const arrWorkouts = allWorkouts.map((workout) => ({
			id: workout.id,
			name: workout.name,
			date: workout.date,
			tag: workout.tag,
			sets: workout.sets.reduce((acc: GroupedData, item: DataItem) => {
				const exerciseName = item.exercise.name;
				if (!acc[exerciseName]) {
					acc[exerciseName] = [];
				}
				acc[exerciseName].push(item);
				return acc;
			}, {}),
		}));

		return arrWorkouts;
	} catch (error) {
		console.error(error);
		return [];
	}
};

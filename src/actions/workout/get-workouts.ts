"use server";

import { DataItem, GroupedData } from "@/interfaces";
import prisma from "@/lib/prisma";

interface GetWorkouts {
	skip?: number;
	take?: number;
	orderByDate?: "asc" | "desc";
}

export const getWorkouts = async ({
	skip = 0,
	take = 10,
	orderByDate = "desc",
}: GetWorkouts) => {
	try {
		const allWorkouts = await prisma.workout.findMany({
			take: take,
			skip: skip,
			orderBy: [
				{
					date: orderByDate,
				},
			],
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

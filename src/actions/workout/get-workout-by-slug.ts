"use server";

import { DataItem, GroupedData } from "@/interfaces";
import prisma from "@/lib/prisma";

export const getWorkoutBySlug = async (slug: string, id: string) => {
	try {
		const workout = await prisma.workout.findFirst({
			where: {
				AND: [
					{
						tag: {
							equals: slug,
						},
					},
					{
						id: {
							equals: id,
						},
					},
				],
			},
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
		if (!workout) return {};
		const workoutDetail = {
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
		};
		return workoutDetail;
	} catch (error) {}
};

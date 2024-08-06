"use server";

import prisma from "@/lib/prisma";

interface GetExercisesSummary {
	take?: number;
	skip?: number;
	orderByTotalSets?: "asc" | "desc";
}

export const getExercisesSummary = async ({
	take,
	skip,
	orderByTotalSets,
}: GetExercisesSummary) => {
	try {
		const exercisesSummary = await prisma.exercise.findMany({
			skip: skip,
			take: take,
			orderBy: {
				sets: {
					_count: orderByTotalSets,
				},
			},
			select: {
				id: true,
				name: true,
				sets: {
					select: {
						id: true,
						reps: true,
						weight: true,
						workoutId: true,
					},
				},
			},
		});
		return exercisesSummary;
	} catch (error) {
		console.error(error);
		return [];
	}
};

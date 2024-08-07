"use server";

import prisma from "@/lib/prisma";

interface GetExercisesSummary {
	take?: number;
	skip?: number;
	orderByTotalSets?: "asc" | "desc";
}

export const getExercisesSummary = async ({
	take = 10,
	skip = 0,
	orderByTotalSets = "desc",
}: GetExercisesSummary) => {
	try {
		const exercisesSummary = await prisma.exercise.findMany({
			take: take,
			skip: skip,
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

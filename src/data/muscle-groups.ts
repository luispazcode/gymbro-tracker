export interface MuscleGroup {
	name: string;
	slug: string;
}

export const muscleGroups: MuscleGroup[] = [
	{ name: "Pecho", slug: "chest" },
	{ name: "Espalda", slug: "back" },
	{ name: "Hombros", slug: "shoulders" },
	{ name: "Bíceps", slug: "biceps" },
	{ name: "Tríceps", slug: "triceps" },
	{ name: "Piernas", slug: "legs" },
	{ name: "Glúteos", slug: "glutes" },
	{ name: "Abdominales", slug: "abs" },
	{ name: "Trapecio", slug: "trapezius" },
	{ name: "Antebrazo", slug: "forearm" },
	{ name: "Gemelos", slug: "calves" },
	{ name: "Isquiotibiales", slug: "hamstrings" },
	{ name: "Cuádriceps", slug: "quadriceps" },
	{ name: "Deltoides", slug: "deltoids" },
];

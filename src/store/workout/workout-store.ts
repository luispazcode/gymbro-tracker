import { create } from "zustand";

export interface Exercise {
	exerciseValue: string;
	exerciseName: string;
	sets: {
		reps: number;
		weight: number;
	}[];
}

interface Workout {
	exercises: Exercise[];
	addExercise: (exercise: Exercise) => void;
	removeExercise: (exerciseValue: string) => void;
	resetExercises: () => void;
}

export const useWorkoutStore = create<Workout>()((set, get) => ({
	exercises: [],
	addExercise: (exercise) => {
		const { exercises } = get();
		if (exercises.length === 0) {
			set({ exercises: [exercise] });
		}
		set({ exercises: [...exercises, exercise] });
	},
	removeExercise: (exerciseValue) => {
		const { exercises } = get();
		const updatedExercises = exercises.filter(
			(exercise) => exercise.exerciseValue !== exerciseValue
		);
		set({ exercises: updatedExercises });
	},
	resetExercises: () => set({ exercises: [] }),
}));

import { Exercise } from "@/types";
// Get workouts
export interface DataItem {
	id: string;
	weight: number;
	reps: number;
	workoutId: string;
	exerciseId: string;
	exercise: Exercise;
}

export interface GroupedData {
	[key: string]: DataItem[];
}

// Show All Workouts Page
export interface WorkoutToDisplay {
	id: string;
	date: Date;
	name: string;
	tag: string;
	sets: GroupedData;
}

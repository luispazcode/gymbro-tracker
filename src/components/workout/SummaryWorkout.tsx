"use client";
import { LiaDumbbellSolid } from "react-icons/lia";
import { useWorkoutStore } from "@/store";
import { Trash2 } from "lucide-react";
import { SummaryWorkoutForm } from "./SummaryWorkoutForm";

export const SummaryWorkout = () => {
	const exercises = useWorkoutStore((state) => state.exercises);
	const removeExercise = useWorkoutStore((state) => state.removeExercise);

	return (
		<section className='flex flex-col gap-4 border border-gray-300 shadow-md p-6 rounded-md'>
			<div>
				<h2>Resumen de tu entrenamiento</h2>
				<p className='text-xs text-gray-400 mt-2'>
					Revisa los ejercicios que has agregado y sus características.
				</p>
			</div>
			<div className='mt-4'>
				<div className='flex flex-col gap-2'>
					{exercises.length > 0 ? (
						exercises.map((exercise) => (
							<div
								className='flex justify-between text-sm font-medium'
								key={exercise.exerciseValue}
							>
								<p className='font-semibold flex gap-1 items-center'>
									<LiaDumbbellSolid />
									{exercise.exerciseName}
								</p>
								<div className='flex gap-2 items-center'>
									<span>Sets: {exercise.sets.length}</span>
									<button
										className='p-1 bg-red-500 rounded-md'
										onClick={() => {
											removeExercise(exercise.exerciseValue);
										}}
									>
										<Trash2 size={18} color='white' />
									</button>
								</div>
							</div>
						))
					) : (
						<p className='text-xs text-center text-gray-500'>
							Aquí se mostrarán los ejercicios que vas registrando en tu
							entrenamiento.
						</p>
					)}
				</div>
			</div>
			<SummaryWorkoutForm exerciseList={exercises} />
		</section>
	);
};

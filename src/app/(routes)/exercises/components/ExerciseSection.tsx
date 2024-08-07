"use client";
import { ResumeCard } from "@/components";
import { FilterExercises } from "./FilterExercises";
import Link from "next/link";
import { Exercise, MuscleGroup } from "@prisma/client";
import { useExercisesStore } from "@/store";
import { useEffect } from "react";

interface Props {
	exerciseList: Exercise[];
	muscleList: MuscleGroup[];
}

export const ExerciseSection = ({ exerciseList, muscleList }: Props) => {
	const { setExercises, filteredExercises } = useExercisesStore();
	useEffect(() => {
		setExercises(exerciseList);
	}, [exerciseList, setExercises]);
	return (
		<section className='mt-4 flex flex-col gap-6'>
			<FilterExercises mouscleGroups={muscleList} />
			<div className='flex flex-col gap-4'>
				{filteredExercises.length > 0 ? (
					filteredExercises.map((exercise, index) => (
						<ResumeCard key={index}>
							<ResumeCard.Header
								title={exercise.name}
								subTitle={
									exercise.description ??
									"No hay descripción para este ejercicio"
								}
							/>
						</ResumeCard>
					))
				) : (
					<>
						<p>No has creado ningún ejercicio para este grupo muscular...</p>
						<p>
							¡Anímate{" "}
							<Link
								href='/exercises/create'
								className='underline font-semibold'
							>
								a crear uno!
							</Link>
						</p>
					</>
				)}
			</div>
		</section>
	);
};

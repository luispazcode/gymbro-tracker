"use client";

import { ResumeCard } from "@/components";
import { exercisesResume } from "@/data";

export const ExerciseSection = () => {
	return (
		<section className='mt-4'>
			{/* TODO: Add filter to filtering exercises in according their muscle group */}
			{/* Use "Combobox" componnet by Shadcn */}
			<div className='flex flex-col gap-4'>
				{exercisesResume.map((exercise, index) => (
					<ResumeCard key={index}>
						<ResumeCard.Header
							title={exercise.title}
							subTitle={exercise.subTitle}
						/>
						<ResumeCard.Body>
							<div className='flex flex-col gap-2 text-xs'>
								<p className='text-sm'>Último entrenamiento:</p>
								{exercise.series.map((serie, index) => (
									<div
										className='flex items-center justify-between'
										key={index}
									>
										<p>Serie {index + 1}:</p>
										<p className='flex gap-2'>
											<span>{serie.reps} reps</span>
											<span>{serie.weight} Kg</span>
										</p>
									</div>
								))}
							</div>
						</ResumeCard.Body>
					</ResumeCard>
				))}
			</div>
		</section>
	);
};

"use client";

import { ResumeCard } from "@/components";

export const ExerciseSection = () => {
	return (
		<section>
			{/* TODO: Add filter to filtering exercises in according their muscle group */}
			{/* Use "Combobox" componnet by Shadcn */}
			<div>
				<ResumeCard>
					<ResumeCard.Header title='Bicep Curls' subTitle='12 reps completed' />
					<ResumeCard.Body>
						<div className='flex items-center justify-between text-sm'>
							<p>Bicep Curls</p>
							<p>12 reps</p>
						</div>
					</ResumeCard.Body>
				</ResumeCard>
			</div>
		</section>
	);
};

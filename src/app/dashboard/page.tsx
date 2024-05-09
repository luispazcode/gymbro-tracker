import { ResumeCard } from "@/components";

// [
// 	{ workout: "Workout A", date: "2021-09-01" },
// 	{ workout: "Workout B", date: "2021-09-02" },
// 	{ workout: "Workout C", date: "2021-09-03" },
// ];

export default function DashboardPage() {
	return (
		<div className='grid grid-cols-1 gap-6'>
			<ResumeCard>
				<ResumeCard.Header
					title='Recent Workouts'
					subTitle='Your recent workouts'
				/>
				<ResumeCard.Body>
					<div className='flex flex-col gap-2'>
						<p>Press Day</p>
						<p>Pull Day</p>
						<p>Leg Day</p>
					</div>
					<div className='flex flex-col gap-2'>
						<p>06/05/24</p>
						<p>06/05/24</p>
						<p>06/05/24</p>
					</div>
				</ResumeCard.Body>
				<ResumeCard.Link text='View all workouts' href='/workouts' />
			</ResumeCard>
			<ResumeCard>
				<ResumeCard.Header
					title='Completed Exercises'
					subTitle='Exercises you have completed recently'
				/>
				<ResumeCard.Body>
					<div className='flex flex-col gap-2'>
						<p>Bicep Curls</p>
						<p>Shoulder Press</p>
						<p>Lat Pulldowns</p>
					</div>
					<div className='flex flex-col gap-2'>
						<p>12 reps</p>
						<p>10 reps</p>
						<p>15 reps</p>
					</div>
				</ResumeCard.Body>
				<ResumeCard.Link text='View all exercises' href='/exercises' />
			</ResumeCard>
		</div>
	);
}

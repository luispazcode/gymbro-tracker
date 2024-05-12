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
					<div className='flex flex-col gap-4'>
						<div className='flex items-center justify-between text-sm'>
							<p>Bicep Curls</p>
							<p>11/05/2024</p>
						</div>
						<div className='flex items-center justify-between text-sm'>
							<p>Squats</p>
							<p>11/05/2024</p>
						</div>
						<div className='flex items-center justify-between text-sm'>
							<p>Bench Press with Dumbbells</p>
							<p>11/05/2024</p>
						</div>
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
					<div className='flex flex-col gap-4'>
						<div className='flex items-center justify-between text-sm'>
							<p>Bicep Curls</p>
							<p>12 reps</p>
						</div>
						<div className='flex items-center justify-between text-sm'>
							<p>Squats</p>
							<p>12 reps</p>
						</div>
						<div className='flex items-center justify-between text-sm'>
							<p>Bench Press with Dumbbells</p>
							<p>12 reps</p>
						</div>
					</div>
				</ResumeCard.Body>
				<ResumeCard.Link text='View all exercises' href='/exercises' />
			</ResumeCard>
		</div>
	);
}

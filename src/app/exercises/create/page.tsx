import { ExerciseForm, ResumeCard } from "@/components";
import { BiDumbbell } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

export default function CreateExercisePage() {
	return (
		<section className='flex flex-col gap-6'>
			<div className='flex flex-col gap-4 border border-gray-300 shadow-md p-6 rounded-md'>
				<div>
					<h2>Create New Exercise</h2>
					<p className='text-xs text-gray-400 mt-2'>
						Add a new exercise to your workout routine
					</p>
				</div>
				<ExerciseForm />
			</div>

			<ResumeCard>
				<ResumeCard.Header
					title='Recent Exercises'
					subTitle='Your latest added exercises'
				/>
				<ResumeCard.Body>
					<div className='flex flex-col gap-4'>
						<div className='flex items-center justify-between text-sm'>
							<p className='flex gap-2 items-center'>
								<BiDumbbell />
								<span>Bench Press</span>
							</p>
							<button>
								<FaTrash color='red' />
							</button>
						</div>
						<div className='flex items-center justify-between text-sm'>
							<p className='flex gap-2 items-center'>
								<BiDumbbell />
								<span>Squats</span>
							</p>
							<button>
								<FaTrash color='red' />
							</button>
						</div>
						<div className='flex items-center justify-between text-sm'>
							<p className='flex gap-2 items-center'>
								<BiDumbbell />
								<span>Bench Press with Dumbbells</span>
							</p>
							<button>
								<FaTrash color='red' />
							</button>
						</div>
					</div>
				</ResumeCard.Body>
				<ResumeCard.Link text='View all exercises' href='/exercises' />
			</ResumeCard>
		</section>
	);
}

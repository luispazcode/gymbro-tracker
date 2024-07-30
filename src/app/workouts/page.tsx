import { getWorkouts } from "@/actions";
import { WorkoutsSection } from "./components/WorkoutsSection";
import { WorkoutToDisplay } from "@/interfaces";

export default async function WorkoutsPage() {
	const createdWorkouts: WorkoutToDisplay[] = await getWorkouts();

	return (
		<section>
			<h1>Entrenamientos</h1>
			<p className='text-sm text-gray-400 mt-2'>
				Aquí se mostrarán todos tus entrenamientos registrados
			</p>
			<WorkoutsSection workoutsToDisplay={createdWorkouts} />
			{/* {createdWorkouts.map((workout) => (
				<div key={workout.id}>
					<h2>{workout.name}</h2>
					<div>
						{Object.keys(workout.sets).map((exerciseName) => (
							<div key={exerciseName}>
								<h3>{exerciseName}</h3>
								<ul>
									{workout.sets[exerciseName].map((set, index) => (
										<li key={set.id}>
											<span>Set {index + 1} - </span>
											<span>
												{set.weight} kg x {set.reps}
											</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			))} */}
		</section>
	);
}

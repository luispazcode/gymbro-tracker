import { getWorkouts } from "@/actions";
import { WorkoutsSection } from "./components/WorkoutsSection";
import { WorkoutToDisplay } from "@/interfaces";

export default async function WorkoutsPage() {
	const createdWorkouts: WorkoutToDisplay[] = await getWorkouts({});

	return (
		<section>
			<h1>Entrenamientos</h1>
			<p className='text-sm text-gray-400 mt-2'>
				Aquí se mostrarán todos tus entrenamientos registrados
			</p>
			<WorkoutsSection workoutsToDisplay={createdWorkouts} />
		</section>
	);
}

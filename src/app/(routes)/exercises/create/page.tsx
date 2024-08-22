import { getMuscleGroups } from "@/actions";
import { CreateExerciseForm, ResumeCard } from "@/components";

export default async function CreateExercisePage() {
	const muscleGroups = await getMuscleGroups();
	return (
		<section className='flex flex-col gap-6'>
			<div className='flex flex-col gap-4 border border-gray-300 shadow-md p-6 rounded-md'>
				<div>
					<h2>Crear nuevo ejercicio</h2>
					<p className='text-xs text-gray-400 mt-2'>
						Vamos a añadir la información del ejercicio que quieres crear
					</p>
				</div>
				<CreateExerciseForm listMuscleGroups={muscleGroups} />
			</div>
		</section>
	);
}

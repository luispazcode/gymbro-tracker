import { WorkoutForm } from "@/components";

export default function CreateWorkoutPage() {
	return (
		<section className='flex flex-col gap-6'>
			<div className='flex flex-col gap-4 border border-gray-300 shadow-md p-6 rounded-md'>
				<div>
					<h2>Crear entrenamiento</h2>
					<p className='text-xs text-gray-400 mt-2'>
						Agrega tus ejercicios con sus respectivas series y repeticiones
					</p>
				</div>
				<WorkoutForm />
			</div>
		</section>
	);
}

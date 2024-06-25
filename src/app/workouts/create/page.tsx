import { DialogAddExercise, SummaryWorkout } from "@/components";

export default function CreateWorkoutPage() {
	return (
		<main className='flex flex-col gap-6'>
			<section className='flex flex-col gap-6'>
				<div className='flex flex-col gap-4 border border-gray-300 shadow-md p-6 rounded-md'>
					<div>
						<h2>Crear entrenamiento</h2>
						<p className='text-xs text-gray-400 mt-2'>
							Vamos a crear tu entrenamiento, primero agrega cada uno de tus
							ejercicios con sus series, repeticiones y pesos.
						</p>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<DialogAddExercise />
					</div>
				</div>
			</section>
			<SummaryWorkout />
		</main>
	);
}

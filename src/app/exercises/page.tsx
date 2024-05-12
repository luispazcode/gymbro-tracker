import { ExerciseSection } from "./components/ExerciseSection";

export default function ExercisesPage() {
	return (
		<>
			<h2>Mis ejercicios</h2>
			<p className='text-xs text-gray-400 mt-2'>
				Aquí se mostrarán todos tus ejercicios registrados
			</p>
			<ExerciseSection />
		</>
	);
}

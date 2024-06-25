import { ExerciseSection } from "./components/ExerciseSection";

export default function ExercisesPage() {
	return (
		<>
			<h1>Mis ejercicios</h1>
			<p className='text-xs text-gray-400 mt-2'>
				Aquí se mostrarán todos tus ejercicios registrados
			</p>
			<ExerciseSection />
		</>
	);
}

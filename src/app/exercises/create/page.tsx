import { CreateExerciseForm, ResumeCard } from "@/components";
import { Pencil } from "lucide-react";
import { BiDumbbell } from "react-icons/bi";

export default function CreateExercisePage() {
	return (
		<section className='flex flex-col gap-6'>
			<div className='flex flex-col gap-4 border border-gray-300 shadow-md p-6 rounded-md'>
				<div>
					<h2>Crear nuevo ejercicio</h2>
					<p className='text-xs text-gray-400 mt-2'>
						Vamos a añadir la información del ejercicio que quieres crear
					</p>
				</div>
				<CreateExerciseForm />
			</div>

			<ResumeCard>
				<ResumeCard.Header
					title='Últimos ejercicios'
					subTitle='Aquí puedes ver los últimos ejercicios que has creado'
				/>
				<ResumeCard.Body>
					<div className='flex flex-col gap-2'>
						<div className='flex items-center justify-between text-sm'>
							<p className='flex gap-2 items-center'>
								<BiDumbbell />
								<span>Press banca con mancuernas</span>
							</p>
							<button className='bg-blue-600 p-2 rounded-sm hover:bg-blue-950'>
								<Pencil color='white' size={16} />
							</button>
						</div>
						<div className='flex items-center justify-between text-sm'>
							<p className='flex gap-2 items-center'>
								<BiDumbbell />
								<span>Curl de biceps con barra Z</span>
							</p>
							<button className='bg-blue-600 p-2 rounded-sm hover:bg-blue-950'>
								<Pencil color='white' size={16} />
							</button>
						</div>
						<div className='flex items-center justify-between text-sm'>
							<p className='flex gap-2 items-center'>
								<BiDumbbell />
								<span>Extensión de triceps con polea alta</span>
							</p>
							<button className='bg-blue-600 p-2 rounded-sm hover:bg-blue-950'>
								<Pencil color='white' size={16} />
							</button>
						</div>
					</div>
				</ResumeCard.Body>
				<ResumeCard.Link text='View all exercises' href='/exercises' />
			</ResumeCard>
		</section>
	);
}

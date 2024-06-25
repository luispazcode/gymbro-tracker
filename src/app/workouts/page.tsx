import { ResumeCard } from "@/components";
import { Button } from "@/components/ui/button";
import { DumbbellIcon } from "lucide-react";
import Link from "next/link";

export default function WorkoutsPage() {
	return (
		<section>
			<h1>Entrenamientos</h1>
			<p className='text-sm text-gray-400 mt-2'>
				Aquí se mostrarán todos tus entrenamientos registrados
			</p>
			<div className='flex flex-col gap-2 mt-8'>
				<ResumeCard>
					<ResumeCard.Header title='Leg Day' subTitle='June 7, 2024' />
					<ResumeCard.Body>
						<div className='flex flex-col gap-2 text-sm'>
							<p className='text-gray-400'>Resumen de tu entrenamiento:</p>
							<div className='flex items-center justify-between'>
								<p className='flex gap-1 items-center'>
									<DumbbellIcon size={14} />
									<span>Curl de biceps</span>
								</p>
								<p className='flex gap-2'>
									<span>3 series</span>
								</p>
							</div>
							<div className='flex items-center justify-between'>
								<p className='flex gap-1 items-center'>
									<DumbbellIcon size={14} />
									<span>Pull-ups</span>
								</p>
								<p className='flex gap-2'>
									<span>3 series</span>
								</p>
							</div>
							<div className='flex items-center justify-between'>
								<p className='flex gap-1 items-center'>
									<DumbbellIcon size={14} />
									<span>Remo con barra</span>
								</p>
								<p className='flex gap-2'>
									<span>3 series</span>
								</p>
							</div>
						</div>
						<Link href='#'>
							<Button className='w-full mt-6' type='button'>
								Ver entrenamiento
							</Button>
						</Link>
					</ResumeCard.Body>
				</ResumeCard>
			</div>
		</section>
	);
}

import { ResumeCard } from "@/components";
import { RegisterForm } from "./ui/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
	return (
		<ResumeCard>
			<ResumeCard.Header title='Crea una cuenta' className='items-center' />
			<ResumeCard.Body>
				<RegisterForm />
				<p className='mt-4 text-center'>
					<span className='text-gray-500 me-2'>¿Ya tienes una cuenta?</span>
					<Link href='/auth/login' className='hover:underline font-semibold'>
						Inicia sesión aquí.
					</Link>
				</p>
			</ResumeCard.Body>
		</ResumeCard>
	);
}

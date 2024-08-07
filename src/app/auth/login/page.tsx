import { ResumeCard } from "@/components";
import { LoginForm } from "./ui/LoginForm";
import Link from "next/link";

export default function LoginPage() {
	return (
		<ResumeCard>
			<ResumeCard.Header title='Inicio de sesión' className='items-center' />
			<ResumeCard.Body>
				<LoginForm />
				<p className='mt-4 text-center'>
					<span className='text-gray-500 me-2'>¿No tienes una cuenta?</span>
					<Link href='/auth/register' className='hover:underline font-semibold'>
						Registrate aquí.
					</Link>
				</p>
			</ResumeCard.Body>
		</ResumeCard>
	);
}

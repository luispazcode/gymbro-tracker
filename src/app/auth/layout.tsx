import { DumbbellIcon } from "lucide-react";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className='w-full h-screen flex items-center justify-center'>
			<section className='flex flex-col gap-6 w-full mx-10'>
				<h1 className='flex gap-2 items-center justify-center text-center'>
					<span>GymbroTracker</span>
					<DumbbellIcon />
				</h1>
				{children}
			</section>
		</main>
	);
}

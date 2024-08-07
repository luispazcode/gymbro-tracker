import { Header } from "@/components";
import { Toaster } from "@/components/ui/toaster";

export default function RoutesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main className='w-full h-full p-6'>{children}</main>
			<Toaster />
		</>
	);
}

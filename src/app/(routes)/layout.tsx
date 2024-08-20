import { Header } from "@/components";

export default function RoutesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main className='w-full h-full p-6'>{children}</main>
		</>
	);
}

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/providers";
import { Toaster } from "@/components/ui/toaster";
import MaintenancePage from "./maintenance/page";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "GymbroTracker",
	description:
		"Aplicación donde puedes registrar cada uno de tus entrenamientos y ejercicios realizados en el gimnasio.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

	return (
		<html lang='en'>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				{isMaintenance ? (
					<MaintenancePage />
				) : (
					<AuthProvider>{children}</AuthProvider>
				)}
				<Toaster />
			</body>
		</html>
	);
}

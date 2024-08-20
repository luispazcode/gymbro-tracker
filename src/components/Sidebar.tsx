"use client";
import { useUIStore } from "@/store";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import { FiActivity, FiPlus } from "react-icons/fi";
import { GiGymBag } from "react-icons/gi";
import { Button } from "./ui/button";
import { logout } from "@/actions";

interface MenuItem {
	title: string;
	icon: React.ReactNode;
	link: string;
}

const menuItems: MenuItem[] = [
	{
		title: "Dashboard",
		icon: <FaHouse className='w-4 h-4' />,
		link: "/dashboard",
	},
	{
		title: "Crear nuevo ejercicio",
		icon: <FiPlus className='w-4 h-4' />,
		link: "/exercises/create",
	},
	{
		title: "Mis ejercicios",
		icon: <GiGymBag className='w-4 h-4' />,
		link: "/exercises",
	},
	{
		title: "Crear nuevo entrenamiento",
		icon: <FiPlus className='w-4 h-4' />,
		link: "/workouts/create",
	},
	{
		title: "Mis entrenamientos",
		icon: <FiActivity className='w-4 h-4' />,
		link: "/workouts",
	},
];

export const Sidebar = () => {
	const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
	const closeSidebar = useUIStore((state) => state.closeSidebar);
	const { data: session } = useSession();
	return (
		<>
			<div
				className={clsx(
					"",
					isSidebarOpen
						? "absolute z-20 w-full left-0 bg-white dark:bg-gray-500 border-b border-gray-400"
						: "hidden"
				)}
			>
				<div className='w-full px-6 pb-4 flex flex-col gap-10'>
					<nav className='flex flex-col  gap-4'>
						{menuItems.map((item: MenuItem) => (
							<Link
								href={item.link}
								className='flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800'
								key={item.title}
								onClick={() => closeSidebar()}
							>
								{item.icon}
								<p>{item.title}</p>
							</Link>
						))}
						{session?.user && (
							<Button type='button' onClick={() => logout()}>
								Cerrar sesión
							</Button>
						)}
					</nav>
				</div>
			</div>
			{isSidebarOpen && (
				<div
					className='bg-black opacity-30 w-full h-screen fixed z-10'
					onClick={() => closeSidebar()}
				></div>
			)}
			{isSidebarOpen && (
				<div
					className='fade-in fixed bottom-0 left-0 w-full h-full z-10 backdrop-filter backdrop-blur-sm'
					onClick={() => closeSidebar()}
				></div>
			)}
		</>
	);
};

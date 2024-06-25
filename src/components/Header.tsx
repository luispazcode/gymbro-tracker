"use client";
import { LiaDumbbellSolid } from "react-icons/lia";
import { TiThMenu } from "react-icons/ti";
import { Sidebar } from "./Sidebar";
import { useUIStore } from "@/store";
import clsx from "clsx";

export const Header = () => {
	const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
	const openSidebar = useUIStore((state) => state.openSidebar);
	const closeSidebar = useUIStore((state) => state.closeSidebar);
	return (
		<>
			<header
				className={clsx(
					"px-6 py-4 flex items-center justify-between border-gray-400 transition-all ease-in",
					isSidebarOpen ? "border-none" : "border-b"
				)}
			>
				<div className='flex items-center gap-2'>
					<LiaDumbbellSolid className='w-6 h-6' />
					<h1 className='text-2xl font-bold'>Gymbro Tracker</h1>
				</div>
				<button
					onClick={() => {
						isSidebarOpen ? closeSidebar() : openSidebar();
					}}
					className='p-2 rounded-md border border-gray-400 hover:bg-slate-300 hover:text-black'
				>
					<TiThMenu />
				</button>
			</header>
			<Sidebar />
		</>
	);
};

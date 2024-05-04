"use client";
import { LiaDumbbellSolid } from "react-icons/lia";
import { TiThMenu } from "react-icons/ti";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export const Header = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<header
				className={`px-6 py-4 flex items-center justify-between ${
					open ? "border-none" : "border-b"
				}  border-gray-400 transition-all ease-in`}
			>
				<div className='flex items-center gap-2'>
					<LiaDumbbellSolid className='w-6 h-6' />
					<h1 className='text-2xl font-bold'>Gymbro Tracker</h1>
				</div>
				<button
					onClick={() => setOpen(!open)}
					className='p-2 rounded-md border border-gray-400 hover:bg-slate-300 hover:text-black'
				>
					<TiThMenu />
				</button>
			</header>
			<Sidebar isOpen={open} setOpen={setOpen} />
		</>
	);
};

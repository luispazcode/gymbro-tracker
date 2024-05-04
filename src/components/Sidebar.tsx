"use client";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import { FiActivity, FiPlus } from "react-icons/fi";
import { GiGymBag } from "react-icons/gi";

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
		title: "Create Workout",
		icon: <FiPlus className='w-4 h-4' />,
		link: "/workouts/create",
	},
	{
		title: "Workouts",
		icon: <FiActivity className='w-4 h-4' />,
		link: "/workouts",
	},
	{
		title: "Create Exercise",
		icon: <FiPlus className='w-4 h-4' />,
		link: "/exercises/create",
	},
	{
		title: "Exercises",
		icon: <GiGymBag className='w-4 h-4' />,
		link: "/exercises",
	},
];

export const Sidebar = ({
	isOpen,
	setOpen,
}: {
	isOpen: boolean;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div
			className={`${
				isOpen
					? "absolute w-full left-0 bg-black border-b border-gray-400"
					: "hidden"
			}`}
		>
			<div className='w-full px-6 pb-4 flex flex-col gap-10'>
				<nav className='flex flex-col  gap-4'>
					{menuItems.map((item: MenuItem) => (
						<Link
							href={item.link}
							className='flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800'
							key={item.title}
							onClick={() => setOpen && setOpen(false)}
						>
							{item.icon}
							<p>{item.title}</p>
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
};

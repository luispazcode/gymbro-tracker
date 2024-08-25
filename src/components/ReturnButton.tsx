"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Undo2 } from "lucide-react";

interface Props {
	children: React.ReactNode;
	variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link"
		| null
		| undefined;
}

export const ReturnButton = ({ children, variant }: Props) => {
	const router = useRouter();
	return (
		<Button
			type='button'
			variant={variant}
			className='flex items-center gap-2'
			onClick={() => {
				router.back();
			}}
		>
			<Undo2 />
			{children}
		</Button>
	);
};

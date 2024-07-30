"use client";
import { useUIStore } from "@/store";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { AddExerciseForm } from "./AddExerciseForm";
import { Exercise } from "@prisma/client";

interface Props {
	listExercises: Exercise[];
}

export const DialogAddExercise = ({ listExercises }: Props) => {
	const isDialogOpen = useUIStore((state) => state.isDialogOpen);
	const openDialog = useUIStore((state) => state.openDialog);
	const closeDialog = useUIStore((state) => state.closeDialog);
	const toggleDialog = isDialogOpen ? closeDialog : openDialog;

	return (
		<Dialog open={isDialogOpen} onOpenChange={toggleDialog}>
			<DialogTrigger asChild>
				<Button variant='outline'>Agregar ejercicio</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Agrega tus ejercicios</DialogTitle>
					<DialogDescription>
						Selecciona tu ejercicio con sus series, repeticiones y pesos.
					</DialogDescription>
				</DialogHeader>
				<div className='w-full mt-4'>
					<AddExerciseForm exercisesCreated={listExercises} />
				</div>
			</DialogContent>
		</Dialog>
	);
};

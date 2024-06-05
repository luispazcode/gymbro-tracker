"use client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

// TODO: Definir como será el formulario para crear un nuevo entrenamiento

export const WorkoutForm = () => {
	const form = useForm();
	return (
		<Form {...form}>
			<form className='space-y-4'>
				<FormField
					control={form.control}
					name='workoutName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre del entrenamiento</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder='Ingresa el nombre del entrenamiento'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
};

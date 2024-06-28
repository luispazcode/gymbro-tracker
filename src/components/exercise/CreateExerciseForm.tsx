"use client";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { muscleGroups } from "@/data/muscle-groups";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateExerciseSchema = z.object({
	exerciseName: z
		.string({
			required_error: "Agrega un nombre para tu ejercicio",
		})
		.min(4, {
			message: "El nombre de tu ejercicio debe tener por lo menos 4 caracteres",
		}),
	tagExercise: z.string(),
	description: z.string().optional(),
	muscleGroup: z.string().min(1, { message: "Selecciona un grupo muscular" }),
});

export const CreateExerciseForm = () => {
	const form = useForm<z.infer<typeof CreateExerciseSchema>>({
		resolver: zodResolver(CreateExerciseSchema),
		defaultValues: {
			exerciseName: "",
			description: "",
			muscleGroup: "",
		},
	});
	const onSubmit = (data: z.infer<typeof CreateExerciseSchema>) => {
		console.log({ data });
		form.reset();
	};
	return (
		<Form {...form}>
			<form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name='exerciseName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre de tu ejercicio:</FormLabel>
							<FormControl>
								<Input {...field} placeholder='Ej: Press de banca con barra' />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Descripción:</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									placeholder='Ej: Este ejercicio es ideal para trabajar el pecho y los tríceps'
									className='resize-none'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='muscleGroup'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Grupo muscular:</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder='Selecciona el grupo muscular' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{muscleGroups.map((group) => (
										<SelectItem key={group.slug} value={group.slug}>
											{group.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type='submit'
					onClick={() => {
						if (form.getValues("exerciseName").length > 3) {
							form.setValue(
								"tagExercise",
								form
									.getValues("exerciseName")
									.toLowerCase()
									.replace(/\s+/g, "-")
							);
						}
					}}
				>
					Create Exercise
				</Button>
			</form>
		</Form>
	);
};

"use client";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Minus, Plus } from "lucide-react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "../ui/command";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUIStore, useWorkoutStore } from "@/store";
import { Exercise } from "@prisma/client";

const setSchema = z.object({
	reps: z.number().min(1, { message: "Debes agregar tus repeticiones" }),
	weight: z
		.number()
		.min(1, { message: "Debes agregar el peso de tus repeticiones" }),
});

const setsSchema = z
	.array(setSchema)
	.min(1, { message: "Debes agregar al menos un set" })
	.max(5, { message: "Tómalo con calma!!" });

export const AddExerciseFormSchema = z.object({
	exerciseValue: z.string({
		required_error: "Por favor selecciona un ejercicio",
	}),
	exerciseName: z.string(),
	sets: setsSchema,
});

interface Props {
	exercisesCreated: Exercise[];
}

export const AddExerciseForm = ({ exercisesCreated }: Props) => {
	const closeDialog = useUIStore((state) => state.closeDialog);
	const addExercise = useWorkoutStore((state) => state.addExercise);
	const form = useForm<z.infer<typeof AddExerciseFormSchema>>({
		resolver: zodResolver(AddExerciseFormSchema),
		defaultValues: {
			sets: [{ reps: 0, weight: 0 }],
		},
	});
	const onSubmit = (data: z.infer<typeof AddExerciseFormSchema>) => {
		console.log({ data });
		addExercise(data);
		closeDialog();
	};
	return (
		<Form {...form}>
			<form
				className='flex flex-col gap-6'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='exerciseValue'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>Selecciona tu ejercicio:</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant='outline'
											role='combobox'
											className={cn(
												"w-full justify-between",
												!field.value && "text-muted-foreground"
											)}
										>
											{field.value
												? exercisesCreated.find(
														(exercise) => exercise.id === field.value
												  )?.name
												: "Selecciona un ejercicio"}
											<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className='w-full p-0'>
									<Command>
										<CommandInput placeholder='Selecciona un ejercicio...' />
										<CommandEmpty>No se encontró tu ejercicio.</CommandEmpty>
										<CommandGroup>
											<CommandList>
												{exercisesCreated.map((exercise) => (
													<CommandItem
														key={exercise.id}
														value={exercise.name}
														onSelect={() => {
															form.setValue("exerciseValue", exercise.id);
															form.setValue("exerciseName", exercise.name);
														}}
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																exercise.id === field.value
																	? "opacity-100"
																	: "opacity-0"
															)}
														/>
														{exercise.name}
													</CommandItem>
												))}
											</CommandList>
										</CommandGroup>
									</Command>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='sets'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>Sets:</FormLabel>
							<FormControl>
								<div className='flex gap-4 items-center justify-center'>
									<Button
										size='icon'
										type='button'
										onClick={() => {
											if (field.value.length > 1) {
												form.setValue(
													"sets",
													field.value.slice(0, field.value.length - 1)
												);
											}
										}}
									>
										<Minus />
									</Button>
									<span className='border border-gray-300 rounded-md px-4 py-1 text-center text-2xl font-bold'>
										{field.value.length}
									</span>
									<Button
										size='icon'
										type='button'
										onClick={() => {
											form.setValue("sets", [
												...field.value,
												{ reps: 0, weight: 0 },
											]);
										}}
									>
										<Plus />
									</Button>
								</div>
							</FormControl>
						</FormItem>
					)}
				/>
				<div>
					{form.watch("sets").map((_, index) => (
						<div key={index} className='flex flex-col my-4'>
							<p className='font-semibold'>Serie {index + 1}</p>
							<div className='flex gap-4 justify-between'>
								<FormField
									control={form.control}
									name={`sets.${index}.reps`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Repeticiones:</FormLabel>
											<FormControl>
												<Input
													{...field}
													type='number'
													placeholder='10'
													onChange={(e) => field.onChange(+e.target.value)}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name={`sets.${index}.weight`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Peso:</FormLabel>
											<FormControl>
												<Input
													{...field}
													type='number'
													placeholder='10'
													onChange={(e) => field.onChange(+e.target.value)}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
					))}
				</div>
				<Button type='submit' className='w-full mt-10'>
					Añadir ejercicio
				</Button>
			</form>
		</Form>
	);
};

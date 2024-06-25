"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ResumeCard } from "@/components";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { exercisesResume } from "@/data/resumeExercises";
import { useForm } from "react-hook-form";
import { z } from "zod";

const groups = [
	{ label: "Chest", value: "chest" },
	{ label: "Back", value: "back" },
	{ label: "Legs", value: "legs" },
	{ label: "Shoulders", value: "shoulders" },
	{ label: "Biceps", value: "biceps" },
	{ label: "Triceps", value: "triceps" },
	{ label: "Abs", value: "abs" },
];

const FormSchema = z.object({
	muscleGroup: z.string({
		required_error: "Por favor selecciona un grupo muscular",
	}),
});

export const ExerciseSection = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		const { muscleGroup } = data;
		console.log(muscleGroup);
	};
	return (
		<section className='mt-4 flex flex-col gap-6'>
			<Form {...form}>
				<form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name='muscleGroup'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Grupo muscular</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Selecciona un grupo muscular' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{groups.map((group, index) => (
											<SelectItem key={index} value={group.value}>
												{group.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
					<Button type='submit'>Filtrar</Button>
				</form>
			</Form>
			<div className='flex flex-col gap-4'>
				{exercisesResume.map((exercise, index) => (
					<ResumeCard key={index}>
						<ResumeCard.Header
							title={exercise.title}
							subTitle={exercise.subTitle}
						/>
						<ResumeCard.Body>
							<div className='flex flex-col gap-2 text-xs'>
								<p className='text-sm'>Último entrenamiento:</p>
								{exercise.series.map((serie, index) => (
									<div
										className='flex items-center justify-between'
										key={index}
									>
										<p>Serie {index + 1}:</p>
										<p className='flex gap-2'>
											<span>{serie.reps} reps</span>
											<span>{serie.weight} Kg</span>
										</p>
									</div>
								))}
							</div>
						</ResumeCard.Body>
					</ResumeCard>
				))}
			</div>
		</section>
	);
};

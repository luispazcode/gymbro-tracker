"use client";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

export const ExerciseForm = () => {
	const form = useForm();
	return (
		<Form {...form}>
			<form className='space-y-4'>
				<FormField
					control={form.control}
					name='exerciseName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Exercise Name</FormLabel>
							<FormControl>
								<Input {...field} placeholder='Enter exercise name' />
							</FormControl>
							<FormDescription>
								This is your exercises display name
							</FormDescription>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									placeholder='Enter exercise description'
									className='resize-none'
								/>
							</FormControl>
							<FormDescription>
								This is your exercises description
							</FormDescription>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='muscleGroup'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Muscle Group</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder='Select muscle group' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value='chest'>Chest</SelectItem>
									<SelectItem value='back'>Back</SelectItem>
									<SelectItem value='legs'>Legs</SelectItem>
									<SelectItem value='shoulders'>Shoulders</SelectItem>
									<SelectItem value='biceps'>Biceps</SelectItem>
									<SelectItem value='triceps'>Triceps</SelectItem>
									<SelectItem value='abs'>Abs</SelectItem>
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>
				<Button type='submit'>Create Exercise</Button>
			</form>
		</Form>
	);
};

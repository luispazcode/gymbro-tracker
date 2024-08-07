"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginFormSchema = z.object({
	email: z.string().email({ message: "Debe ingresar un correo válido" }),
	password: z.string().min(8, {
		message: "La contraseña debe tener al menos 8 caracteres",
	}),
});

type LoginFormValues = z.infer<typeof LoginFormSchema>;

export const LoginForm = () => {
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: LoginFormValues) => {
		console.log({ values });
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email:</FormLabel>
							<FormControl>
								<Input
									placeholder='jhon-doe@gmail.com'
									type='email'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Contraseña:</FormLabel>
							<FormControl>
								<Input placeholder='********' type='password' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full'>
					Ingresar
				</Button>
			</form>
		</Form>
	);
};

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

const RegisterFormSchema = z
	.object({
		firstName: z
			.string()
			.min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
		lastName: z
			.string()
			.min(3, { message: "El apellido debe tener al menos 3 caracteres" }),
		email: z.string().email({ message: "Debe ingresar un correo válido" }),
		password: z
			.string()
			.min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
		confirmPassword: z
			.string()
			.min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Las contraseñas no coinciden",
		path: ["confirmPassword"],
	});

type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

export const RegisterForm = () => {
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(RegisterFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = (values: RegisterFormValues) => {
		console.log({ values });
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
				<div className='flex gap-4 items-center'>
					<FormField
						control={form.control}
						name='firstName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nombre:</FormLabel>
								<FormControl>
									<Input placeholder='Jhon' {...field} type='text' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='lastName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Apellido:</FormLabel>
								<FormControl>
									<Input placeholder='Doe' {...field} type='text' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email:</FormLabel>
							<FormControl>
								<Input
									placeholder='jon-doe@gmail.com'
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
				<FormField
					control={form.control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirmar contraseña:</FormLabel>
							<FormControl>
								<Input placeholder='********' type='password' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full'>
					Registrarse
				</Button>
			</form>
		</Form>
	);
};
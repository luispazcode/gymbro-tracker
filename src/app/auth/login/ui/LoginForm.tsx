"use client";

import { authenticate } from "@/actions";
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
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const LoginFormSchema = z.object({
	email: z.string().email({ message: "Debe ingresar un correo válido" }),
	password: z.string().min(5, {
		message: "La contraseña debe tener al menos 5 caracteres",
	}),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;

export const LoginForm = () => {
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const [authStatus, setAuthStatus] = useState<String | null>(null);
	const { toast } = useToast();
	const onSubmit = async (values: LoginFormValues) => {
		const result = await authenticate(undefined, values);
		setAuthStatus(result);
	};

	useEffect(() => {
		if (authStatus === "Success") {
			toast({
				title: "Inicio de sesión exitoso",
				description: "Bienvenido de vuelta",
			});
			// router.replace("/dashboard");
			window.location.replace("/dashboard");
		}
		// TODO: Define the error message for invalid credentials {email or password or both}
		if (authStatus === "InvalidCredentials") {
			form.setError("email", {
				type: "manual",
				message: "Credenciales inválidas",
			});
			form.setError("password", {
				type: "manual",
				message: "Credenciales inválidas",
			});
		}
	}, [authStatus]);

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
				<Button
					type='submit'
					className='w-full'
					disabled={form.formState.isSubmitting}
				>
					{form.formState.isSubmitting ? (
						<>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							Iniciando sesión...
						</>
					) : (
						<span>Ingresar</span>
					)}
				</Button>
			</form>
		</Form>
	);
};

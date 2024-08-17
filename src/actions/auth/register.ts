"use server";

import { RegisterFormValues } from "@/app/auth/register/ui/RegisterForm";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const registerUser = async ({
	email,
	firstName,
	lastName,
	password,
}: RegisterFormValues) => {
	try {
		const user = await prisma.user.create({
			data: {
				email: email.toLowerCase(),
				firstName: firstName,
				lastName: lastName,
				password: bcryptjs.hashSync(password),
			},
			select: {
				id: true,
				email: true,
				firstName: true,
				lastName: true,
			},
		});
		return {
			ok: true,
			message: "Usuario registrado correctamente",
			user: user,
		};
	} catch (error: any) {
		console.log(error);
		if ((error.code as string) === "P2002") {
			return {
				ok: false,
				message: "Este correo ya está registrado",
			};
		}
		return {
			ok: false,
			message: "No se ha podido registrar el usuario",
		};
	}
};

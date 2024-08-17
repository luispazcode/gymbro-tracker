import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { z } from "zod";
import prisma from "./lib/prisma";
import { LoginFormSchema } from "./app/auth/login/ui/LoginForm";

export const authConfig: NextAuthConfig = {
	pages: {
		signIn: "/auth/login",
		newUser: "auth/register",
	},
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				token.data = user;
			}
			return token;
		},
		session({ session, token, user }) {
			session.user = token.data as any;
			return session;
		},
	},
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({
						email: z
							.string()
							.email({ message: "Debe ingresar un correo válido" }),
						password: z.string().min(5, {
							message: "La contraseña debe tener al menos 5 caracteres",
						}),
					})
					.safeParse(credentials);
				if (!parsedCredentials.success) {
					return null;
				}
				const { email, password } = parsedCredentials.data;

				// Look for user in database
				const user = await prisma.user.findFirst({
					where: {
						email: email.toLowerCase(),
					},
				});
				if (!user) return null;

				// Check password
				if (!bcryptjs.compareSync(password, user.password)) return null;

				// Return user object without the password
				const { password: _, ...rest } = user;
				// console.log({ rest });
				return rest;
			},
		}),
	],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);

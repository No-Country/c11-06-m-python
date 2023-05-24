import { z } from 'zod';

export const LoginFormSchema = z.object({
    email: z
        .string()
        .min(1, {message: 'Email obligatorio'})
        .email({
            message: 'Email no válido, Ingrese un email válido'
        }),
    password: z
        .string()
        .min(1, {message: 'Contraseña obligatoria'}),
})

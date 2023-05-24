import { z } from 'zod';

export const LoginFormSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Email obligatorio' })
        .email({
            message: 'Email no válido, Ingrese un email válido'
        }),
    password: z
        .string()
        .min(1, { message: 'Contraseña obligatoria' }),
})


export const RegisterFormSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Email obligatorio' })
        .email({
            message: 'Email no válido, Ingrese un email válido'
        }),
    password: z
        .string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    repeatPassword: z
        .string()
        .min(1, { message: 'Por favor, confirmar la contraseña' }),
    name: z
        .string()
        .min(1, { message: 'Nombre obligatorio' }),
    lastname: z
        .string()
        .min(1, { message: 'Apellido obligatorio' }),
    birthdate: z.coerce
        .date()
        .min(new Date(1920, 0, 1), {
            message: 'La fecha no puede superar el 1 de enero de 1920.'
        })
        .max(new Date(), {
            message: "La fecha debe estar en el pasado."
        })
    })
    .refine((data) => data.password === data.repeatPassword, {
        path: ['repeatPassword'],
        message: 'Las contraseñas con coinciden'
    })
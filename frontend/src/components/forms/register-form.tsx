"use client"
import { RegisterFormSchema } from "@/lib/validations/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


type RegisterInput = z.infer<typeof RegisterFormSchema>;

export const RegisterForm = () => {

  const {register, handleSubmit, formState: {errors} } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterFormSchema)
  });

  const onSubmit = (data:RegisterInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-11 flex flex-col gap-5">
        <label htmlFor="email">
          Correo electrónico
          <Input
            type="email"
            id="email"
            placeholder=""
            {...register('email')}
          />
          {errors?.email?.message && <p className="text-sm text-red-400 opacity-60">{errors.email.message}</p>}
        </label>

        <label htmlFor="password">
          Contraseña
          <Input
            type="password"
            id="password"
            placeholder=""
            {...register('password')}
          />
          {errors?.password?.message && <p className="text-sm text-red-400 opacity-60">{errors.password.message}</p>}
        </label>

        <label htmlFor="password2">
          Repetir contraseña
          <Input
            type="password"
            id="password2"
            placeholder=""
            {...register('repeatPassword')}
          />
          {errors?.repeatPassword?.message && <p className="text-sm text-red-400 opacity-60">{errors.repeatPassword.message}</p>}
        </label>

        <div className="flex gap-5">
          <label htmlFor="name">
            Nombre
            <Input
              type="text"
              id="name"
              placeholder=""
              {...register('name')}
            />
            {errors?.name?.message && <p className="text-sm text-red-400 opacity-60">{errors.name.message}</p>}
          </label>
          <label htmlFor="lastname">
            Apellido
            <Input
              type="text"
              id="lastname"
              placeholder=""
              {...register('lastname')}
            />
            {errors?.lastname?.message && <p className="text-sm text-red-400 opacity-60">{errors.lastname.message}</p>}
          </label>
        </div>

        <label htmlFor="birthdate">
          Fecha de nacimiento
          <Input
            type="date"
            id="birthdate"
            placeholder=""
            {...register('birthdate')}
          />
          {errors?.birthdate?.message && <p className="text-sm text-red-400 opacity-60">{errors.birthdate.message}</p>}
        </label>
      </div>
      <button className="px-12 w-full py-3 bg-slate-300 rounded-lg mb-7">
        Crear cuenta
      </button>
    </form>
  );
};

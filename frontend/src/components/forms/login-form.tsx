"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/lib/validations/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";

type LoginInput = z.infer<typeof LoginFormSchema>;

export const LoginForm = () => {

  const {register, handleSubmit, formState: {errors} } = useForm<LoginInput>({
    resolver: zodResolver(LoginFormSchema)
  });

  const onSubmit = (data:LoginInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-11 flex flex-col gap-5">
        <label htmlFor="email">
          E-mail
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
      </div>
      <button className="px-12 w-full py-3 bg-slate-300 rounded-lg mb-7">
        Ingresar
      </button>
    </form>
  );
};

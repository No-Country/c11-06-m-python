"use client"
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="mt-11 col-span-4 col-start-5">
        <h1 className="text-xl font-bold">Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="py-11 flex flex-col gap-5">
            <label htmlFor="email">
              E-mail
              <Input
                type="email"
                id="email"
                placeholder=""
              />
            </label>

            <label htmlFor="password">
              Contraseña
              <Input
                type="password"
                id="password"
                placeholder=""
              />
            </label>
          </div>
          <button className="px-12 w-full py-3 bg-slate-300 rounded-lg mb-7">
            Ingresar
          </button>
        </form>
        <p>¿No tenés una cuenta? <Link href={'/register'} className="underline">Crear una cuenta</Link></p>
      </section>
    </>
  );
};

export default LoginPage;

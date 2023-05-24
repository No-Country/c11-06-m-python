"use client"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="mt-11 col-span-4 col-start-5">
        <h1 className="text-xl font-bold">Crear una cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="py-11 flex flex-col gap-5">
            <label htmlFor="email">
              Correo electrónico
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

            <label htmlFor="password2">
              Repetir contraseña
              <Input
                type="password"
                id="password2"
                placeholder=""
              />
            </label>

            <div className="flex gap-5">
              <label htmlFor="name">
                Nombre
                <Input
                  type="text"
                  id="name"
                  placeholder=""
                />
              </label>
              <label htmlFor="lastname">
                Apellido
                <Input
                  type="text"
                  id="lastname"
                  placeholder=""
                />
              </label>
            </div>

            <label htmlFor="birthdate">
              Fecha de nacimiento
              <Input
                type="date"
                id="birthdate"
                placeholder=""
              />
            </label>
          </div>
          <button className="px-12 w-full py-3 bg-slate-300 rounded-lg mb-7">
            Crear cuenta
          </button>
        </form>
      </section>
    </>
  );
};

export default RegisterPage;

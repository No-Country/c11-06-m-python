import { RegisterForm } from "@/components/forms/register-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Crear cuenta",
};

const RegisterPage = () => {
  return (
    <>
      <h1 className="text-xl font-bold">Crear una cuenta</h1>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;

import { LoginForm } from "@/components/forms/login-form";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {

  return (
    <>
      <h1 className="text-xl font-bold">Iniciar sesión</h1>
      <LoginForm/>
      <p>¿No tenés una cuenta? <Link href={'/register'} className="underline">Crear una cuenta</Link></p>
    </>
  );
};

export default LoginPage;

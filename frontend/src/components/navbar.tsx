"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SelectUi } from "./ui/select";
import { Bell, HelpCircle, Search } from "lucide-react";
import { AvatarUi } from "./ui/avatar";

export const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="h-28 w-full px-10 fixed top-0 bg-slate-100 flex items-center justify-between">
      {/* logo component */}
      <Link href={"/"}>
        <div className="w-52 h-10 rounded-full bg-slate-300 grid place-content-center">
          Logo
        </div>
      </Link>

      {/* search */}
      {path !== "/login" && (
        <div className="h-12 w-1/3 relative">
          <input
            type="text"
            placeholder="¿Y... a donde querés ir esta vez?"
            className="pl-6 w-full h-full bg-slate-300 rounded-full"
          />
          <Search className="absolute -translate-y-1/2 top-1/2 right-5 text-slate-600" />
        </div>
      )}

      <div className="flex gap-4 items-center">
        <SelectUi />

        {/* TODO: button - icon - component?  */}

        {path === "/login" ? (
          <>
            <div className="px-4 py-1 h-10 flex items-center gap-2 bg-slate-300 rounded-full">
              <HelpCircle className="text-slate-600" />
              <span>Ayuda y soporte</span>
            </div>
          </>
        ) : (
          <>
            {"no-auth" && (
              <>
                <div className="px-2 -order-last">
                  <Bell />
                </div>
                <div className="px-4 py-1 h-10 flex items-center gap-4 bg-slate-300 rounded-full">
                  <span className="">Nombre de usuario</span>
                  <AvatarUi />
                </div>
              </>
            )}

            {/* signup options */}
            {!"authenticated" && (
              <div className="flex space-x-4 items-center">
                <Link href={"/login"}>
                  <p className="w-max">Crear cuenta</p>
                </Link>
                <Link href={"/login"}>
                  <button className="w-52 h-10 bg-slate-300 rounded-full">
                    Iniciar sesión
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

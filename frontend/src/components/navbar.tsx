"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SelectUi } from "./ui/select";
import { Bell, HelpCircle } from "lucide-react";
import { AvatarUi } from "./ui/avatar";
import { Search } from "./search";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="h-28 w-screen px-10 z-10 fixed top-0 grid grid-cols-12 gap-5 auto-rows-min content-center">
      {/* logo component */}
      <Link
        href={"/"}
        className="col-span-2">
        <div className="w-full h-10 rounded-full bg-slate-300 grid place-content-center">
          Logo
        </div>
      </Link>

      {/* search */}
      {path !== "/login" && path !== "/" && (
        <Search className="w-auto col-span-4 col-start-4" />
      )}

      <div className="col-start-9 col-span-4 grid grid-cols-4 gap-5 content-center">
        {/* TODO: button - icon - component?  */}

        {path === "/login" ? (
          <>
            <div className="px-4 py-1 h-10 col-span-2 flex items-center gap-2 bg-slate-300 rounded-full">
              <HelpCircle className="text-slate-600" />
              <span>Ayuda y soporte</span>
            </div>
          </>
        ) : (
          <>
            {!"no-auth" && (
              <>
                <div className="px-2 row-start-1 grid place-content-center bg-slate-300 rounded-full">
                  <Bell />
                </div>
                <div className="px-2 py-1 h-10 col-span-2 flex items-center justify-between bg-slate-300 rounded-full">
                  <span className="text-center w-full">Nombre de usuario</span>
                  <AvatarUi />
                </div>
              </>
            )}

            {/* signup options */}
            {"authenticated" && (
              <div className="flex space-x-4 items-center">
                <Link href={"/login"}>
                  <p className="w-max">Crear cuenta</p>
                </Link>
                <Link href={"/login"} className="col-span-2">
                  <button className="w-52 h-10 bg-slate-300 rounded-full">
                    Iniciar sesión
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
        <div className={cn("w-full row-start-1 col-start-2",{'col-start-1': 'authenticated'}, {'col-start-2': path==='/login'})}>
          <SelectUi />
        </div>
      </div>
    </nav>
  );
};

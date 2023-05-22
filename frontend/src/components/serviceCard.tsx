import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const ServiceCard = () => {
  return (
    <div className="col-span-3 text-sm">
      {/* image */}
      <Link href={'/servicio/lugar'}>
      <div className="relative h-[305px] bg-slate-300 rounded-[30px] mb-5">
        <HeartIcon className="absolute top-7 right-7" size={32}/>
      </div>
      </Link>

      {/* descripcion, tamaño fijo para no dañar el layout, usar overflow */}
      <div className="mb-2">
        <h3 className="font-medium">Buenos Aires, Argentina</h3>
        <p className="text-slate-500">Lorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non.</p>
      </div>

      {/* precio */}
      <div>
        <p className="font-medium">$456 USD <span className="font-light">noche</span></p>
      </div>
    </div>
  );
};

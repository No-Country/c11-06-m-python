import { Search } from "@/components/search";
import { ServiceSlider } from "@/components/serviceSlider";
import { ListFilter } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <>
      <Search className="my-24 col-start-4 col-span-6 w-auto" />

      {/* filter */}
      <div className="col-span-2 row-start-2 mb-12">
        {/* button ? */}
        <div className="bg-slate-300 w-full py-1 px-4 h-10 gap-2 flex items-center rounded-lg">
          <ListFilter />
          Filtro Busqueda
        </div>
      </div>

      <div className="row-start-3 col-span-12 mb-20">
        <ServiceSlider title="Destacados"/>
        <ServiceSlider title="Por Argentina"/>
        <ServiceSlider title="Lugares únicos"/>
        <ServiceSlider title="Ofertas por paquetes"/>
      </div>
    
    </>
  );
};

export default Home;

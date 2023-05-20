import { Search } from "@/components/search";
import { ListFilter } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <>  
      <Search className="my-24 col-start-4 col-span-6 w-auto"/>

      {/* filter */}
      <div className="col-span-2 row-start-2">
        <div className="bg-slate-300 w-full py-1 px-4 h-10 gap-2 flex items-center rounded-lg">
          <ListFilter/>
          Filtro Busqueda
          </div>
      </div>
    </>
  );
};

export default Home;

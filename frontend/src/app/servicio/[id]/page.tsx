import { FC } from "react";

interface ServicioPageProps {
  params: {
    id: string
  }
}

const ServicioPage: FC<ServicioPageProps> = ({params}) => {
  
  return <div>ServicioPage {params.id}</div>;
};

export default ServicioPage;
  
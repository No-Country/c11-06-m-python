import { FC } from "react";

interface ReservaPageProps {
    params: {
      id: string;
    };
  }

const ReservaPage: FC<ReservaPageProps> = ({ params })=> {
  return <div>ReservaReservaPage{params.id}</div>;
};

export default ReservaPage;

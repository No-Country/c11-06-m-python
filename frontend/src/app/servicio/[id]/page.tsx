import Link from "next/link";
import { FC } from "react";

interface ServicioPageProps {
  params: {
    id: string;
  };
}

const ServicioPage: FC<ServicioPageProps> = ({ params }) => {
  return (
    <>
      {/* hero */}
      <section className="mt-20 col-span-12 grid grid-cols-12 auto-rows-min gap-5 w-full">
        {/* image */}
        <div className="col-span-6 bg-slate-300 rounded-lg"></div>
        <section className="col-span-6 ml-9">
          <h1 className="font-semibold text-4xl mb-4">
            Buenos Aires - Argentina
          </h1>
          <p className="font-semibold text-4xl mb-14">
            $123 USD <span className="font-light text-xl">por noche</span>
          </p>
          <Link href={`/servicio/reserva/${params.id}`}>
            <div className="px-12 w-max py-4 bg-slate-300 rounded-lg mb-7">
              Reservar ahora
            </div>
          </Link>
          <p className="max-w-xs text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </section>
      </section>

      {/* Description */}
      <section className="mt-20 col-span-12 grid grid-cols-12 gap-5 w-full mb-16">
        <section className="col-span-6">
          <h2 className="font-semibold text-4xl py-4">Acerca del lugar</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            enim est voluptate dolore odio suscipit ex fugiat deleniti
            dignissimos cum nihil aperiam sapiente esse consequu doloremque.
            Atque aspernatur vitae aut laboriosam. Impedit, dignissimos nihil
            recessitatibus quidem mollitia magni rerum libero soluta unde.
            Laborum rem, beatae enim! Repudiandae fugiat necessitatibus, dolore
            consequatur perspiciatis amet, dolor! Sequi unde impedit dolorum
            laboriosam dolore nulla eaque ea minima nobis aliquid! Velit
            blanditiis error cum, iusto dolores, perferendis quasi
            exercitationem doloremque nostrum maiores? Voluptates debitis saepe
            dignissimos maxime quam. Suscipit nesciunt, quaerat facilis
            excepturi totam? In reprehenderit alias dolor saepe tempora? Illum
            odio cupiditate est facilis quas nulla nam, iusto aliquid eaque
            corrupti! Reiciendis tempore, voluptatibus quo labore doloremque.
          </p>
        </section>
        <section className="col-start-8 col-span-5 flex flex-col">
          <h2 className="font-semibold text-4xl py-4">A donde llegarás</h2>
          {/* map */}
          <div className="w-full flex-1 bg-slate-300 rounded-lg"></div>
        </section>
      </section>
    </>
  );
};

export default ServicioPage;

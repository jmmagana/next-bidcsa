import Link from "next/link";

export default function ExperienciaPage() {
  return (
    <>
      <h1>Experiencia</h1>
      <p>
        Contamos con más de 20 años de experiencia atendiendo las necesidades de
        nuestros clientes en la industria de la construcción y el sector
        inmobiliario en el Bajio Mexicano, tanto para la industria privada como
        para el sector público.Nuestros clientes nos perciben como un aliado
        estratégico que comprende su proyecto y agregua valor a su negocio.
        Estaremos encantados de dar respuesta a sus preguntas en cualquiera de
        nuestras formas de contacto.
      </p>
      <ul>
        <li>
          <Link href="/experiencia/avaluos_presupuestos_concursos">
            Avalúos, Presupuestos y Concursos de Obra
          </Link>
        </li>
        <li>
          <Link href="/experiencia/estudios">Elaboración de Estudios</Link>
        </li>
        <li>
          <Link href="/experiencia/proyectos_construccion">
            Proyectos de Construcción
          </Link>
        </li>
      </ul>
    </>
  );
}

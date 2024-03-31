import Link from "next/link";

export default function ServiciosPage() {
  return (
    <>
      <h1 class="py-4 font-serif text-2xl">Nuestros Servicios</h1>
      <ul class="list-outside list-style-type: none;">
        <li>
          <Link href="/servicios/gerencia_proyectos">
            Gerencia de Proyectos de Construcción
          </Link>
        </li>
        <li>
          <Link href="/servicios/ingenieria_costos">
            Ingeniería de Costos y Presupuestos
          </Link>
        </li>
        <li>
          <Link href="/servicios/supervision_obras">
            Supervición y Auditoría Técnica de Obras
          </Link>
        </li>
        <li>
          <Link href="/servicios/valuaciones">
            Valuaciones e Ingeniería Financiera
          </Link>
        </li>
      </ul>
    </>
  );
}

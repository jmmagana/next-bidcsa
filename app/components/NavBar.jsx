import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <ul className="flex py-4 gap-8 border-b">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/experiencia">Experiencia</Link>
        </li>
        <li>
          <Link href="/servicios" prefetch={false}>
            Servicios
          </Link>
        </li>
      </ul>
    </nav>
  );
}

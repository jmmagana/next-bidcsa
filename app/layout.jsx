import { Children } from "react";
import Link from "next/link";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col px-4 py-4 min-h-screen">
        <header>
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
        </header>
        <main className="px-4 py-4">{children}</main>
        <footer className="py-2 border-t text-xs">
          ©2024 Bufete de Ingeniería para el Desarrollo de la Construcción S.A.
          de C.V. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}

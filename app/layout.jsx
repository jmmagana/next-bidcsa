import { Children } from "react";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
            <ul>
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
        <main>{children}</main>
        <footer>
          ©2024 Bufete de Ingeniería para el Desarrollo de la Construcción S.A.
          de C.V. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}

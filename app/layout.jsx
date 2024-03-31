import { Children } from "react";
import Link from "next/link";
import NavBar from "./components/NavBar";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-stone-100 flex flex-col px-4 py-4 min-h-screen">
        <header>
          <NavBar />
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

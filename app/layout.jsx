import { Children } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}

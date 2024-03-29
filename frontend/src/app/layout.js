import "./globals.css";
import { Providers } from "./provider";
export const metadata = {
  title: "Brigada",
  description: "Template para proyectos de frontend en ISW",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
export function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
}

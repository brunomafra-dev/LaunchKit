import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchKit Growth",
  description: "Ferramenta interna da Mafra Labs para criar conteudo organico.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Rilo Solutions — Systemutveckling & arkitektur",
  description:
    "Rilo Solutions hjälper er att förvandla komplexa behov till stabila, skalbara digitala lösningar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}

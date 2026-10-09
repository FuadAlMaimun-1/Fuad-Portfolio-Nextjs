import "../src/styles/globals.css";

export const metadata = {
  title: "fuad-portfolio",
  description: "Fuad Al Maimun Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Preahvihear&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* We can copy the fuad.jpeg to public/ if needed for icon */}
      </head>
      <body>{children}</body>
    </html>
  );
}

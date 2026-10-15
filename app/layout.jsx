import "../src/styles/globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Preahvihear&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/jpeg" href="/images/profile.png" />
      </head>
      <body className="bg-dark-bg text-text-primary antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}


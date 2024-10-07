// components/HeadLinks.tsx
const fonts = [
  "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap",
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700;900&display=swap",
];

export const HeadLinks = () => (
  <>
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="/icons/icon-192x192.png" />
    <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
    <meta name="theme-color" content="#000000" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />

    {fonts.map((font, index) => (
      <link key={index} href={font} rel="stylesheet" />
    ))}
  </>
);

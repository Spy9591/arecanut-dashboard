export const metadata = {
  title: "Arecanut Dashboard"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}

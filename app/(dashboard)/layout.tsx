"use client";

import "../globals.css";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body>
        <main>
          <h1>Dashboard Navbar</h1>
          {children}
        </main>
      </body>
    </html>
  );
};

export default layout;

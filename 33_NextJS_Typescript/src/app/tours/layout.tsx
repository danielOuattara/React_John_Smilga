import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tours page",
  description: "A list of tours page fetched from John Smilga course server",
  keywords: "Next.js, React.js Typescript, TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="py-2 w-1/2 bg-amber-700 rounded mb-4">
        <h1 className="text-3xl text-white text-center">Nested Layout</h1>
      </header>
      {children}
    </>
  );
}

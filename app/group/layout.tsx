import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice Creator - Group",
  description: "Invoice creator example.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

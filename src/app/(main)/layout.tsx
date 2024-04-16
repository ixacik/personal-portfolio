import Nav from "@/components/shared/nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="mt-32">{children}</main>
    </>
  );
}

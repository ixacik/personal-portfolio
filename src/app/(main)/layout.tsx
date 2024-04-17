import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="mt-32 pb-section-large relative z-10 shadow-2xl shadow-white/5 rounded-b-lg border-b border-border px-5">
        {children}
      </main>
      <Footer />
    </>
  );
}

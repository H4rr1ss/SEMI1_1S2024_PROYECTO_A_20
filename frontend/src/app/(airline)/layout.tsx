'use client'
import TopMenu from "@/components/ui/top-menu/TopMenu";
import Footer from "@/components/ui/footer/Footer";

export default function AirlineLayout( { children }: {
  children: React.ReactNode;
} ) {

  return (
    <main className="flex flex-col h-screen">
        <TopMenu />
        { children }
        <Footer />
    </main>
  );
}

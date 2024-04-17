import Footer from "@/components/ui/footer/Footer";
import TopMenu from "@/components/ui/top-menu/TopMenu";

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

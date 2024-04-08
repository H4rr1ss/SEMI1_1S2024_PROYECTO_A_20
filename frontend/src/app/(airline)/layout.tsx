import TopMenu from "@/components/ui/top-menu/TopMenu";

export default function AirlineLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen bg-red-500">
      <TopMenu />
      { children }
    </main>
  );
}

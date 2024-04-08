import TopMenu from "@/components/ui/top-menu/TopMenu";

export default function AirlineLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="">
      <div className="">
        <TopMenu />
      </div>
      <div className="mt-10">
        { children }
      </div>
    </main>
  );
}

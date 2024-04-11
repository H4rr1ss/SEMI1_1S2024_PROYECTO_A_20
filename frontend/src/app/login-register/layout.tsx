export default function AirlineLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen" style={{background: "#E5E2DF"}}>
      { children }
    </main>
  );
}

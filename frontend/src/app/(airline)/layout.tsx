'use client'
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import TopMenu from "@/components/ui/top-menu/TopMenu";
import Footer from "@/components/ui/footer/Footer";
import { useEffect } from 'react';

export default function AirlineLayout( { children }: {
  children: React.ReactNode;
} ) {
  useEffect(() => {
    Kommunicate.init("3809f2f1a3caa627dcf92a8a49a7eaec8", {
      automaticChatOpenOnNavigation: true,
      popupWidget: true
    });
  }, []);

  return (
    <main className="flex flex-col h-screen">
        <TopMenu />
        { children }
        <Footer />
    </main>
  );
}

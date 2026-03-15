import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Screenshots from '@/components/sections/Screenshots';
import Technical from '@/components/sections/Technical';
import Documentation from '@/components/sections/Documentation';
import Download from '@/components/sections/Download';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Technical />
      <Documentation />
      <Download />
      <Footer />
    </main>
  );
}

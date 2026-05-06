import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Workflow from '@/components/sections/Workflow';
import Technical from '@/components/sections/Technical';
import Documentation from '@/components/sections/Documentation';
import Download from '@/components/sections/Download';
import Footer from '@/components/sections/Footer';
import { getLatestRelease, parseVersion } from '@/lib/github';

export const revalidate = 300;

export default async function Home() {
  const release = await getLatestRelease();
  const version = release ? parseVersion(release.tag_name) : 'v1.3.0';

  return (
    <main className="min-h-screen">
      <Header />
      <Hero version={version} />
      <Features />
      <Workflow />
      <Technical />
      <Documentation />
      <Download version={version} />
      <Footer />
    </main>
  );
}

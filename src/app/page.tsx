// src/app/page.tsx
import Hero from '@/components/Hero'; // The '@/' is an alias for the 'src/' folder

export default function Home() {
  return (
    <main>
      <Hero />
      {/* We will add other sections like Projects, Skills, Contact below the Hero */}
    </main>
  );
}
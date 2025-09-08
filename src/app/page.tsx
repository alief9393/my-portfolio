// src/app/page.tsx
import Hero from '@/components/Hero';
import Projects from '@/components/Projects'; // Import the new component

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects /> {/* Add it here */}
    </main>
  );
}
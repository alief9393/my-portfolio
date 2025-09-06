// src/components/Hero.tsx
import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
          Alief Chandra Wijaya
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
          Senior Fullstack Developer | Architecting High-Performance Distributed Systems
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          I specialize in building resilient, scalable backend systems and seamless frontend experiences for the FinTech and blockchain sectors.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/alief-chandra-wijaya/" // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={32} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/aliefchandra" // Replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github size={32} />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View My Work
          </a>
          <a
            href="/alief-wijaya-cv.pdf" // Place your CV pdf in the `public` folder
            download
            className="w-full sm:w-auto border border-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
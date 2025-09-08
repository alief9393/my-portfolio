// src/components/ProjectCard.tsx
import { Project } from '@/data/projects';
import { Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {project.link && (
        <div className="mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-gray-800 hover:text-blue-600 transition-colors"
          >
            {project.link.includes('github') ? <Github size={18} /> : <ArrowUpRight size={18} />}
            <span>View on GitHub</span>
          </a>
        </div>
      )}
    </div>
  );
}
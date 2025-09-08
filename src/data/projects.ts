// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string; // Optional link to GitHub or a live demo
}

export const featuredProjects: Project[] = [
  {
    title: 'Qualysoft: Large-Scale Tax Administration System',
    description:
      'Modernized and optimized a critical tax system for the Directorate General of Taxes, ensuring high availability and fault tolerance for millions of daily transactions. Implemented event-driven workflows with RabbitMQ and Redis, and leveraged a full stack of .NET Core, Angular, Oracle, and SQL Server.',
    technologies: ['.NET Core 7', 'Angular 14', 'RabbitMQ', 'Redis', 'Oracle', 'CI/CD', 'Microservices'],
  },
  {
    title: 'zond-indexer: Open-Source Blockchain Indexer',
    description:
      'Architected and developed a high-performance, open-source blockchain indexer in Go. It processes and stores real-time and historical data from a Zond node (an Ethereum fork) into PostgreSQL for efficient querying. The system is containerized with Docker and orchestrated on GCP with Kubernetes.',
    technologies: ['Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'gRPC', 'GitHub Actions', 'Blockchain'],
    link: 'https://github.com/aliefchandra/zond-indexer' // Replace with the actual link if different
  },
  {
    title: 'OCBC Bank: High-Availability Banking Platforms',
    description:
      'Led the development of mission-critical banking applications, including payment gateways and card management systems. Designed and implemented RESTful APIs and middleware for low-latency transaction flows, leveraging an event-driven microservices architecture with Docker and Kubernetes.',
    technologies: ['Go', 'Java', 'Spring Boot', 'Kubernetes', 'Docker', 'RabbitMQ', 'REST APIs'],
  },
];
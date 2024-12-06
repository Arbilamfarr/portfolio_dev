import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management application with collaborative features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['TypeScript', 'React', 'Firebase', 'Material-UI']
  },
  {
    title: 'AI Chat Interface',
    description: 'Modern chat interface powered by artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['Next.js', 'OpenAI', 'Tailwind CSS', 'Prisma']
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
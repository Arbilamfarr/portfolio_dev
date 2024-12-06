import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Full Stack Developer
              <span className="block text-green-600">Building Digital Experiences</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              I craft beautiful, scalable, and user-friendly applications using modern technologies.
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1000"
              alt="Developer"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
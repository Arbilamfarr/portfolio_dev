import React from 'react';

const skills = {
  'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
  'Backend': ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB'],
  'DevOps': ['Docker', 'AWS', 'CI/CD', 'Linux', 'Git'],
  'Tools': ['VS Code', 'Figma', 'Postman', 'Jest', 'Webpack']
};

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
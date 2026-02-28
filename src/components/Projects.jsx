import React, { useState } from 'react';
import { Database, ExternalLink, Code2 } from 'lucide-react';
import { projectsData, categories } from '../data/projectsData';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
                <Code2 className="text-emerald-400 w-6 h-6 mr-3" />
                <h3 className="text-3xl font-bold">Featured Projects</h3>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <Database className="w-8 h-8 text-blue-400" />
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                        <p className="text-xs text-blue-300 font-mono mb-3">{project.tech}</p>
                        <p className="text-gray-300 text-sm leading-relaxed flex-grow">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
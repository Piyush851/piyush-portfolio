import React from 'react';
import { BrainCircuit } from 'lucide-react';

export default function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Python", "JavaScript (ES6+)", "C", "C++", "Java", "SQL"]
        },
        {
            title: "AI, ML & Analytics",
            skills: ["Machine Learning", "Deep Learning", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Power BI", "Tableau", "Excel"]
        },
        {
            title: "Web Technologies",
            skills: ["React.js", "Next.js", "React Native", "Node.js", "Express.js", "Tailwind CSS", "Redux"]
        },
        {
            title: "Frameworks & Tools",
            skills: ["Django", "Flask", "Docker", "MongoDB", "MySQL", "Git", "GitHub", "IBM Watson Studio"]
        }
    ];

    return (
        <section className="py-20 bg-gray-800/30 border-y border-gray-800">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center mb-10">
                    <BrainCircuit className="text-blue-400 w-6 h-6 mr-3" />
                    <h3 className="text-3xl font-bold">Technical Arsenal</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                            <h4 className="text-lg font-semibold mb-4 text-gray-200">{category.title}</h4>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-md text-sm font-medium text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
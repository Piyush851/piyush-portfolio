import React from 'react';
import { Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section id="about" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[80vh]">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Piyush Saini</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-8 max-w-2xl">
                Analytical AI/ML Developer & Full-Stack Engineer bridging web architecture with predictive modeling.
            </h2>
            <p className="text-gray-400 max-w-2xl mb-10 text-lg leading-relaxed">
                I approach software engineering with the mathematical rigor of physics. Whether I'm architecting a MERN stack application, optimizing a machine learning pipeline, or building explainable AI systems, my goal is to translate complex logic into scalable, human-centric solutions.
            </p>
            <div className="flex space-x-4">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    View My Work
                </a>
                <a href="#contact" className="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    <Mail className="w-4 h-4 mr-2" /> Let's Talk
                </a>
            </div>
        </section>
    );
}
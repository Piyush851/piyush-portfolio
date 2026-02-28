import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center border-t border-gray-800 min-h-[50vh] flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Let's Build Something Great</h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
                I am currently seeking opportunities to bring my Full-Stack expertise and AI curiosity to an innovative engineering team. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className="flex justify-center space-x-6">
                <a
                    href="https://github.com/Piyush851"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 hover:text-blue-400 transition-all hover:-translate-y-1"
                    aria-label="GitHub"
                >
                    <Github className="w-6 h-6" />
                </a>
                <a
                    href="https://linkedin.com/in/piyush-saini-0527ps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 hover:text-blue-400 transition-all hover:-translate-y-1"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-6 h-6" />
                </a>
                <a
                    href="mailto:piyushsaini01@outlook.com"
                    className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 hover:text-blue-400 transition-all hover:-translate-y-1"
                    aria-label="Email"
                >
                    <Mail className="w-6 h-6" />
                </a>
            </div>
        </section>
    );
}
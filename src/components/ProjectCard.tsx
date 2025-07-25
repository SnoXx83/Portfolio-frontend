import React from 'react';
import { Project } from '../types/index';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

    if (!project || typeof project.id === 'undefined' || !project.name) {
        console.error("ProjectCard a reçu un objet projet invalide ou incomplet:", project);
        return (
            <div className="project-card error">
                <p className="error-message">Erreur: Données de projet invalides.</p>
            </div>
        );
    }

    const API_BASE_URL: string = 'http://localhost:4000';


     const truncateText = (text: string, maxLength: number): string => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    const truncatedResume = truncateText(project.resume, 150);

    return (
        <div className="flex flex-col h-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {project.img_url_1 && (
                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                    <Link to={`/project/${project.id}`} className="block w-full h-full">
                        <img
                            className="rounded-t-lg w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            src={API_BASE_URL + project.img_url_1}
                            alt={`Image du projet ${project.name}`}
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = 'https://placehold.co/600x400/333333/FFFFFF?text=Image+non+disponible';
                            }}
                        />
                    </Link>
                </div>
            )}
            <div className="p-5 flex flex-col flex-grow">
                <Link to={`/project/${project.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{project.name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-400 flex-grow">{truncatedResume}</p>
                <div className='mt-auto flex justify-between items-center'>
                    <Link to={`/project/${project.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Voir ce projet
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                    {project.github_link && (
                        <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl transform hover:scale-110"
                            aria-label="GitHub Profile"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

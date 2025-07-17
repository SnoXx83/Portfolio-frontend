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

    return (
        <div className="my-20">
            <div className=''>
                {project.img_url_1 && (
                    <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={project.img_url_1} alt={`Image du projet ${project.name}`} onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = 'https://static.wixstatic.com/media/d15f39_8f95644efb574e299e6bd943a89cacb8~mv2.png/v1/fill/w_980,h_619,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d15f39_8f95644efb574e299e6bd943a89cacb8~mv2.png';
                            }} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name} </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className='flex justify-between'>
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
                                        className="text-darkTextSecondary hover:text-blueAccentDark transition-all duration-300 text-2xl transform hover:scale-110"
                                        aria-label="GitHub Profile"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;

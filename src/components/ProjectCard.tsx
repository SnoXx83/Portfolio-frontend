import React from 'react';
import { Project } from '../types/index';


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
        <div className="project-card">
            <div className='card'>
                {project.img_url_1 && (
                    <img
                        src={project.img_url_1}
                        alt={`Image du projet ${project.name}`}
                        className="project-card-image"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = 'https://static.wixstatic.com/media/d15f39_8f95644efb574e299e6bd943a89cacb8~mv2.png/v1/fill/w_980,h_619,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d15f39_8f95644efb574e299e6bd943a89cacb8~mv2.png'; // Image de remplacement sombre
                        }}
                    />
                )}
                <h3 className="project-card-title">{project.name}</h3>
                <div className='d-flex'>
                    {project.github_link && (
                        <p className="project-card-link">
                            <a
                                href={project.github_link}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src="/github.png" alt="github" width={"30px "} />
                            </a>
                        </p>
                    )}
                    <p className="project-card-link">
                        <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-button">
                            Voir le Projet 
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

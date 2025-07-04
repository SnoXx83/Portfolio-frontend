// // src/components/ProjectCard.tsx
// import React from 'react';
// // import { Project, Technology } from '../types'; // Importez vos interfaces

// // Définition des props que le composant ProjectCard attend
// // interface ProjectCardProps {
// //   project: Project; // Un objet Project à afficher
// // }

// const ProjectCard = ({ project }:any) => {
//   return (
//     <div className="project-card">
//       <h3 className="project-card-title">{project.title}</h3>
//       {project.img_url_1 && (
//         <img
//           src={project.img_url_1}
//           alt={`Image du projet ${project.title}`}
//           className="project-card-image"
//           onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//             e.currentTarget.onerror = null; // Empêche la boucle d'erreur
//             e.currentTarget.src = 'https://placehold.co/600x400/282828/e0e0e0?text=Image+non+disponible'; // Image de remplacement sombre
//           }}
//         />
//       )}
//       <p className="project-card-resume">{project.resume}</p>
//       {project.github_link && (
//         <p className="project-card-link">
//           <a
//             href={project.github_link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="project-link-button"
//           >
//             Voir sur GitHub <i className="fab fa-github ml-2"></i>
//           </a>
//         </p>
//       )}
//       <h4 className="project-card-tech-title">Technologies:</h4>
//       {project.technologies && project.technologies.length > 0 ? (
//         <div className="project-card-tech-list">
//           {project.technologies.map((tech: any) => (
//             <span
//               key={tech.id}
//               className="project-card-tech-item"
//             >
//               {tech.name}
//             </span>
//           ))}
//         </div>
//       ) : (
//         <p className="project-card-no-tech">Aucune technologie associée.</p>
//       )}
//     </div>
//   );
// };

// export default ProjectCard;

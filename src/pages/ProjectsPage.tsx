import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import ProjectCard from '../components/ProjectCard'; 
import { Project } from '../types';
import '../styles/Project.css'


const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true); 
      setError(null); 

      try {
        const response = await axios.get<Project[]>(`http://localhost:4000/project`);
        console.log(response.data); 
        setProjects(response.data);

      } catch (err: any) {
        if (axios.isAxiosError(err) && err.response) {
          console.error("Erreur lors de la récupération des projets (Axios):", err.response.data || err.message);
          setError(`Impossible de charger les projets. Détails: ${err.response.data?.message || err.message}. Assurez-vous que votre backend est démarré et que CORS est configuré.`);
        } else {
          console.error("Erreur lors de la récupération des projets (générique):", err);
          setError(`Impossible de charger les projets. Détails: ${err.message || 'Erreur inconnue'}.`);
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchProjects(); 
  }, []); 

  return (
    <section id="projets" className="section projects-list-section">
      <h2 className="section-title">Tous mes Projets</h2>

      {loading && (
        <p className="loading-message">Chargement des projets...</p>
      )}
      {error && (
        <p className="error-message">{error}</p>
      )}

      {!loading && !error && projects.length === 0 && (
        <p className="no-projects-message">Aucun projet à afficher pour le moment.</p>
      )}

      <div className="projects-grid">
        {!loading && !error && projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

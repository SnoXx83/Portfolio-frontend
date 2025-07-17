import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import ProjectCard from '../components/ProjectCard'; 
import { Project } from '../types';

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
    <section id="projets" className="py-8 px-4 text-center">
      <h2 className="text-4xl text-white font-bold  mt-40">Tous mes Projets</h2>

      {loading && (
        <p className="text-xl text-blueAccentDark mt-8 p-4 rounded-lg bg-darkBgSection border border-darkBorderLight shadow-md">Chargement des projets...</p>
      )}
      {error && (
        <p className="text-xl text-redAccentDark mt-8 p-4 rounded-lg bg-darkBgSection border border-redAccentDark shadow-md">{error}</p>
      )}

      {!loading && !error && projects.length === 0 && (
        <p className="text-xl text-darkTextSecondary mt-8 p-4 rounded-lg bg-darkBgSection border border-darkBorderLight shadow-md">Aucun projet à afficher pour le moment.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        {!loading && !error && projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

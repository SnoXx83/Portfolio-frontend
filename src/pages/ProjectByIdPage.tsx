import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Project } from '../types';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const API_BASE_URL: string = 'http://localhost:4000';

  useEffect(() => {
    if (!id) {
      setError("Aucun ID de projet fourni dans l'URL.");
      setLoading(false);
      return;
    }

    const fetchProject = async () => {
      setLoading(true);
      setError(null);
      setCurrentSlideIndex(0);

      try {
        const response = await axios.get<Project>(`${API_BASE_URL}/project/${id}`);
        setProject(response.data);
      } catch (err: any) {
        if (axios.isAxiosError(err) && err.response) {
          if (err.response.status === 404) {
            setError("Projet non trouvé. L'ID spécifié n'existe pas.");
          } else {
            console.error("Erreur lors de la récupération du projet (Axios):", err.response.data || err.message);
            setError(`Impossible de charger le projet. Détails: ${err.response.data?.message || err.message}.`);
          }
        } else {
          console.error("Erreur lors de la récupération du projet (générique):", err);
          setError(`Impossible de charger le projet. Détails: ${err.message || 'Erreur inconnue'}.`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const imageUrls = project ?
    [project.img_url_1, project.img_url_2, project.img_url_3, project.img_url_4]
      .filter(url => url)
      .map(url => `${API_BASE_URL}${url}`)
    : [];

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      (prevIndex + 1) % imageUrls.length
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  return (
    <section id="project-detail" className=" mt-20 py-8 px-4 text-center">

      {loading && (
        <p className="text-xl text-blueAccentDark mt-8 p-4 rounded-lg bg-darkBgSection border border-darkBorderLight shadow-md">Chargement du projet...</p>
      )}
      {error && (
        <p className="text-xl text-redAccentDark mt-8 p-4 rounded-lg bg-darkBgSection border border-redAccentDark shadow-md">{error}</p>
      )}

      {!loading && !error && project && (
        <div className="bg-darkBgSection border border-darkBorderLight rounded-2xl shadow-custom-dark-3 p-12 max-w-7xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-5xl font-extrabold text-white mb-10 pb-8">{project.name}</h3>

          {imageUrls.length > 0 ? (
            <div className="relative w-full max-w-5xl mx-auto mb-20">
              <div className="relative h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-lg border border-darkBorderLight shadow-lg">
                <img
                  src={imageUrls[currentSlideIndex]}
                  alt={`Image du projet ${project.name} - ${currentSlideIndex + 1}`}
                  className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/800x500/282828/e0e0e0?text=Image+non+disponible';
                  }}
                />
              </div>

              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {imageUrls.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlideIndex ? 'bg-blueAccentDark' : 'bg-gray-400 hover:bg-gray-300'
                      }`}
                    aria-current={index === currentSlideIndex ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setCurrentSlideIndex(index)}
                  ></button>
                ))}
              </div>

              
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToPrevSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>

              
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToNextSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          ) : (
            <p className="text-darkTextSecondary text-lg mb-8">Aucune image disponible pour ce projet.</p>
          )}
          <h4 className="text-2xl font-bold text-darkTextPrimary mt-8 mb-4">Technologies utilisées:</h4>
          {project.technologies && project.technologies.length > 0 ? (
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              {project.technologies.map((tech) => (
                <span key={tech.id} className="bg-purpleAccentDark bg-opacity-20 text-purpleAccentDark text-base font-medium px-5 py-2 rounded-full border border-purpleAccentDark border-opacity-40 whitespace-nowrap">
                  {tech.name}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-darkTextSecondary text-base mb-10">Aucune technologie associée.</p>
          )}
          <div  className="block m-20 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <p className="text-lg text-darkTextPrimary leading-relaxed mb-8 text-left max-w-3xl mb-20" >
              <h4 className="text-center text-2xl font-bold text-darkTextPrimary mt-8 mb-10">Architecture du projet</h4>
              {project.resume}
            </p>
          </div>

          {project.github_link && (
            <div className="mt-6 mb-8 text-center">
              <h4 className="text-2xl font-bold text-darkTextPrimary mt-8 mb-10">Voir le code en détail :</h4>
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blueAccentDark text-white px-6 py-3 mb-20 rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:bg-blueHoverDark hover:shadow-lg transform hover:-translate-y-1"
              >
                Voir sur GitHub <i className="fab fa-github ml-2"></i>
              </a>
            </div>
          )}


        </div>
      )}

      {!loading && !error && !project && id && (
        <p className="text-xl text-darkTextSecondary mt-8 p-4 rounded-lg bg-darkBgSection border border-darkBorderLight shadow-md">Le projet avec l'ID "{id}" n'a pas été trouvé.</p>
      )}
    </section>
  );
};

export default ProjectDetailPage;


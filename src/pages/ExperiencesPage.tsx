import React from 'react';


interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[]; 
  technologies: string[]; 
}

const ExperiencesPage: React.FC = () => {
  
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Développeur Full-Stack (Alternance)',
      company: 'DigitecPharma (Intecmedia)',
      duration: 'Sept. 2023 - Sept. 2024',
      location: 'La Ciotat, France',
      description: [
        'Développement et maintenance d\'applications web full-stack en utilisant React.js pour le frontend et Node.js/Express pour le backend.',
        'Conception et implémentation d\'APIs RESTful robustes.',
        'Collaboration avec l\'équipe de design pour transformer les maquettes UI/UX en interfaces utilisateur fonctionnelles.',
        'Participation active aux revues de code et à l\'amélioration continue des processus de développement.'
      ],
      technologies: ['React', 'Node.js', 'Express', 'TypeScript', 'MySQL', 'MaterialUI', 'JWT']
    },
    {
      id: 2,
      title: 'Stagiaire Développeur Full Stack',
      company: 'Inetum (GFI)',
      duration: 'Juin 2022 - Octobre 2022',
      location: 'Paris, France',
      description: [
        'Contribution au développement de composants UI interactifs avec HTML, CSS et JavaScript.',
        'Optimisation des performances front-end et amélioration de la réactivité des applications.',
        'Apprentissage des bonnes pratiques de développement web et de la gestion de version avec Git.'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Git']
    },
    {
      id: 3,
      title: 'Stagiaire Développeur Web',
      company: 'Projet Indépendant',
      duration: 'Mars 2023 - Mai 2023',
      location: 'À distance',
      description: [
        'Conception et développement d\'une application de gestion de tâches avec authentification utilisateur.',
        'Implémentation d\'une base de données PostgreSQL pour la persistance des données.',
        'Déploiement de l\'application sur un service cloud (ex: Heroku ou Vercel).'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeORM', 'JWT']
    }
  ];

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-blueAccentDark mb-12 text-center">Mes Expériences Professionnelles & Projets</h2>

      <p className="text-lg text-darkTextSecondary leading-relaxed max-w-3xl mx-auto text-center mb-16">
        Découvrez mon parcours professionnel et les projets clés qui ont jalonné mon apprentissage et mon développement en tant que développeur full-stack.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-darkBgSection border border-darkBorderLight rounded-xl shadow-custom-dark-2 p-8 flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-custom-dark-3">
            <h3 className="text-3xl font-bold text-darkTextPrimary mb-3">{exp.title}</h3>
            <p className="text-blueAccentDark text-xl font-semibold mb-2">{exp.company}</p>
            <p className="text-darkTextSecondary text-base mb-4">{exp.duration} - {exp.location}</p>
            
            <ul className="list-disc list-inside text-darkTextSecondary text-lg mb-6 flex-grow space-y-2">
              {exp.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-darkTextPrimary mb-3">Technologies utilisées:</h4>
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="bg-greenAccentDark bg-opacity-20 text-greenAccentDark text-sm font-medium px-4 py-2 rounded-full border border-greenAccentDark border-opacity-40 whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesPage;

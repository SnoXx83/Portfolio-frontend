import React from 'react';

interface Formation {
    id: number;
    degree: string;
    institution: string;
    duration: string;
    location: string;
    description: string[]; 
    skills: string[]; 
}

const ParcoursPage: React.FC = () => {
    const formations: Formation[] = [
        {
            id: 1,
            degree: "Formation en Alternance de Concepteur Développeur d'Applications (option eco-conception)",
            institution: 'Simplon',
            duration: 'Oct. 2025 - Févr. 2027 (En cours)',
            location: 'À distance',
            description: [
                'Développer un client web',
                "Gérer et optimiser les données et les composants d'accès aux données en appliquant les bonnes pratiques d’éco-conception",
                "Piloter le développement d’une application éco-conçue par les tests",
                "Concevoir et développer une application sécurisée organisée en couches",
                "Préparer le déploiement d'une application sécurisée",
                "Projets de groupe axés sur le développement de solutions innovantes et la gestion de projets agiles."
            ],
            skills: ['REACT', 'VUE', 'DevOps', 'Angular', 'Gestion de Projet Agile', 'API REST', 'Git', 'Docker', 'NodeJS']
        },
        {
            id: 2,
            degree: "Formation en Alternance de Concepteur Développeur d'Applications",
            institution: 'WildCodeSchool',
            duration: 'Sept. 2023 - Sept. 2024',
            location: 'À distance',
            description: [
                'Réalisation de plusieurs projets concrets, de la conception à la mise en production.',
                "Gérer et optimiser les données et les composants d'accès aux données en appliquant les bonnes pratiques d’éco-conception",
                'Modélisation et création de base de données relationnelles.',
                "Préparer le déploiement d'une application sécurisée",
                "Création d'API REST et GraphQL"
            ],
            skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Typescript', 'React', 'Node.js', 'Express', 'GraphQL', 'SQL', 'Git', 'Méthodes Agiles', 'Docker', 'Apollo', 'REST', 'tests automatisés', 'JWT']
        },
        {
            id: 3,
            degree: 'Formation de Développeur Web et Web Mobile',
            institution: 'AFPA Digital',
            duration: 'Sept. 2022 - Oct. 2023',
            location: 'À distance',
            description: [
                'Acquisition des fondamentaux du développement web frontend et backend.',
                'Apprentissage des bonnes pratiques de code et de la collaboration en équipe.',
                'Développement d\'une pensée analytique et résolution de problèmes.',
            ],
            skills: ['PHP', 'Symfony', 'Doctrine', 'Javascript', 'React', 'Angular']
        },
        {
            id: 4,
            degree: 'Formation de Développeur Web et Applications mobiles (Professionnalisante)',
            institution: 'MODE83',
            duration: '2021(3 mois)',
            location: 'À distance',
            description: [
                'Acquisition des fondamentaux du développement web frontend et backend.',
                'Apprentissage des bonnes pratiques de code et de la collaboration en équipe.',
                'Découverte du métier',
            ],
            skills: ['PHP', 'HTML', 'CSS', 'Javascript', 'Wordpress']
        }
    ];

    return (
        <div className="py-8 px-4 max-w-6xl mx-auto w-full">
            <h2 className="text-4xl font-bold text-blueAccentDark mb-12 text-center mt-20">Mon Parcours Académique</h2>

            <h1 className="text-xl text-darkTextSecondary leading-relaxed max-w-3xl mx-auto text-center mb-16">
                Découvrez les différentes étapes de ma parcours de formation, des fondamentaux aux spécialisations, qui ont forgé mes compétences en développement.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {formations.map((formation) => (
                    <div key={formation.id} className="bg-darkBgSection border border-darkBorderLight rounded-xl shadow-custom-dark-2 p-8 flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-custom-dark-3">
                        <h3 className="text-3xl font-bold text-darkTextPrimary mb-3">{formation.degree}</h3>
                        <p className="text-blueAccentDark text-xl font-semibold mb-2">{formation.institution}</p>
                        <p className="text-darkTextSecondary text-base mb-4">{formation.duration} - {formation.location}</p>

                        <ul className="list-disc list-inside text-darkTextSecondary text-lg mb-6 flex-grow space-y-2">
                            {formation.description.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>

                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-darkTextPrimary mb-3">Compétences clés:</h4>
                            <div className="flex flex-wrap gap-3">
                                {formation.skills.map((skill, index) => (
                                    <span key={index} className="bg-purpleAccentDark bg-opacity-20 text-purpleAccentDark text-sm font-medium px-4 py-2 rounded-full border border-purpleAccentDark border-opacity-40 whitespace-nowrap">
                                        {skill}
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

export default ParcoursPage;

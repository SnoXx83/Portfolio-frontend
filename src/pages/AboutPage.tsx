import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-blueAccentDark mb-12 text-center">À Propos de Moi</h2>

      <div className="bg-darkBgSection border border-darkBorderLight rounded-2xl shadow-custom-dark-3 p-12 mb-16 flex flex-col items-center text-center">
        
        <div className="w-full max-w-2xl mx-auto mb-10">
          <img
            src="/maxime.jpg"
            alt="Votre photo de profil"
            className="w-48 h-48 rounded-full object-cover mx-auto mb-8 border-4 border-blueAccentDark shadow-lg"
          />
          <p className="text-lg text-darkTextPrimary leading-relaxed mb-6">
            Bonjour ! Je suis Maxime Larquetoux, un développeur passionné par la création de solutions web innovantes et performantes. Mon parcours m'a permis d'acquérir une expertise solide en développement full-stack, avec une affinité particulière pour React.js côté frontend et Node.js ou PHP pour le backend mais j'ai sutout appris à m’adapter à n'importe quel langage.
          </p>
          <p className="text-lg text-darkTextPrimary leading-relaxed">
            Mon objectif est de transformer des idées complexes en applications intuitives et efficaces, en mettant toujours l'accent sur la qualité du code et l'expérience utilisateur. Je suis constamment à l'affût des nouvelles technologies et des meilleures pratiques pour améliorer mes compétences et relever de nouveaux défis.
          </p>
        </div>

        
        <div className="w-full max-w-2xl mx-auto mt-10 p-8 bg-darkBgMain rounded-xl border border-darkBorderLight shadow-custom-dark-1">
          <h3 className="text-3xl font-bold text-blueAccentDark mb-6">Me Contacter</h3>
          <div className="space-y-4 text-lg text-darkTextSecondary">
            <p className="flex items-center justify-center gap-3">
              <i className="fas fa-envelope text-blueAccentDark"></i>
              Email: <a href="mailto:maximelarquetoux@gmail.com" className="text-indigoAccentDark hover:underline">maximelarquetoux@gmail.com</a>
            </p>
            <p className="flex items-center justify-center gap-3">
              <i className="fas fa-phone-alt text-blueAccentDark"></i>
              Téléphone: <a href="tel:+33612345678" className="text-indigoAccentDark hover:underline">+33 6 59 22 86 55</a>
            </p>
          </div>

          
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/SnoXx83"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkTextSecondary hover:text-blueAccentDark transition-all duration-300 text-3xl transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/maxime-larquetoux-40b7751a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkTextSecondary hover:text-blueAccentDark transition-all duration-300 text-3xl transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://linktr.ee/Maxime_L"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkTextSecondary hover:text-blueAccentDark transition-all duration-300 text-3xl transform hover:scale-110"
              aria-label="Linktree Profile"
            >
              <i className="fas fa-tree"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

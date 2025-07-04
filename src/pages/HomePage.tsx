import React from 'react';

function HomePage() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="inner-header-content">
          <div className="social-links">
            <a
              href="https://github.com/MaximeLarquetoux"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub Profile"
            >
              <img src="/github.png" alt="github" />
            </a>
            <a
              href="https://linkedin.com/in/MaximeLarquetoux"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn Profile"
            >
              <img src="/linkedin.png" alt="linkedin" />
            </a>
            <a
              href="https://linktr.ee/MaximeLarquetoux"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Linktree Profile"
            >
              <img src="/linktree.png" alt="linktree" />
            </a>
          </div>
          <nav className="main-nav">
            <a href="#accueil" className="nav-item">Accueil</a>
            <a href="#projets" className="nav-item">Projets</a>
            <a href="#experiences" className="nav-item">Expériences</a>
            <a href="#parcours" className="nav-item">Parcours</a>
            <a href="#about" className="nav-item">À propos</a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className="new-intro-section">
        <div className="hero-banner">
          <h1>Développeur Full-Stack</h1>
        </div>
        <div>
          <h2>A la recherche d'une Alternance</h2>
        </div>
        <div>
          <h3>Maxime Larquetoux</h3>
        </div>
        <div>
          <button className="main-button parcours-button">
            Téléchargez mon CV
          </button>
        </div>
      </section>

      <main className="main-content">

        <section className='About'>
          <img src='/maxime.jpg' />
          <article className="section hero-section">
            <h2>Salut !</h2>
            <div>
              Moi c'est maxime, j'ai été sélectionné par Simplon pour une formation de Concepteur Développeur d'Application qui débute en Octobre 

            </div>
          </article>
        </section>

        {/* Parcours */}
        <section id="experience" className="section parcours-section">
          <div className="parcours-content">
            <h2 className="section-title">Mes Expériences</h2>
            <p className="section-description">
              Découvrez les étapes clés de ma formation et de mon expérience,
              qui m'ont mené à devenir un développeur full-stack polyvalent.
            </p>
            <button className="main-button parcours-button">
              Détails des Experiences
            </button>
          </div>
          <div className="parcours-image-container">
            {/* Placeholder pour une image de parcours/timeline */}
            <img
              src="/company.svg"
              alt="Illustration de parcours"
            // className="parcours-image"
            />
          </div>
        </section>

        {/* Section Portfolio (bouton pour les projets) */}
        <section id="projets" className="section portfolio-section">
          <h2 className="section-title">Découvrez mes Projets</h2>
          <p className="section-description">
            Explorez mes réalisations techniques, des applications web complètes aux scripts utilitaires.
          </p>
          <button className="main-button portfolio-button">
            Voir mon Portfolio
          </button>
        </section>

        {/* Section Parcours */}
        <section id="parcours" className="section parcours-section">
          <div className="parcours-image-container">
            {/* Placeholder pour une image de parcours/timeline */}
            <img
              src="/programing.svg"
              alt="Illustration de parcours"
            // className="parcours-image"
            />
          </div>
          <div className="parcours-content">
            <h2 className="section-title">Mon Parcours Académique</h2>
            <p className="section-description">
              Découvrez les étapes clés de ma formation et de mon expérience,
              qui m'ont mené à devenir un développeur full-stack polyvalent.
            </p>
            <button className="main-button parcours-button">
              Détails du Parcours
            </button>
          </div>
        </section>

        {/* Section À propos */}
        <section id="about" className="section about-section">
          <h2 className="section-title">À Propos de Moi</h2>
          <p className="section-description">
            Bonjour ! Je suis Maxime Larquetoux, un développeur passionné par la création et l'innovation. Mon objectif est de construire des applications web intuitives et performantes, en mettant l'accent sur une expérience utilisateur fluide et un code propre. Je suis actuellement à la recherche d'une alternance pour approfondir mes compétences et contribuer à des projets stimulants. N'hésitez pas à me contacter !
          </p>
          <button className="main-button contact-button">
            En Savoir plus
          </button>
        </section>
      </main>

      {/* Pied de page */}
      <footer className="app-footer">
        <div className="footer-content">
          &copy; {new Date().getFullYear()} Maxime Larquetoux. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
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
      </section><div className="main-content">
        <section className='About'>
          <img src='/maxime.jpg' alt='maxime' />
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
            <img
              src="/company.svg"
              alt="Illustration de parcours" />
          </div>
        </section>

        {/* Section Portfolio*/}
        <section id="projets" className="section portfolio-section">
          <h2 className="section-title">Découvrez mes Projets</h2>
          <p className="section-description">
            Explorez mes réalisations techniques, des applications web complètes aux scripts utilitaires.
          </p>

          <Link className="main-button portfolio-button" to={'/ProjectsPage'}>Portfolio</Link>
        </section>

        {/* Section Parcours */}
        <section id="parcours" className="section parcours-section">
          <div className="parcours-image-container">
            <img
              src="/programing.svg"
              alt="Illustration de parcours" />
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
      </div>
    </>
  );
}

export default HomePage;

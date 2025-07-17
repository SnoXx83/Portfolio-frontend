import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center text-center bg-banner bg-cover bg-center text-white p-8 box-border mb-32 md:p-4 md:text-center sm:p-4 sm:text-center">
        <div className="mb-6 block">
          <h1 className="text-6xl font-extrabold font-montserrat text-shadow-lg mb-0.5 md:text-4xl sm:text-3xl">Maxime Larquetoux</h1>
          <h2 className="text-4xl font-medium text-shadow-md mb-2 md:text-2xl sm:text-lg">Développeur Full-Stack</h2>
          <h3 className="text-2xl font-normal text-shadow-sm mb-4 md:text-base sm:text-sm">A la recherche d'une alternance</h3>
        </div>
      </section>

      <div className='max-w-6xl mx-auto w-full'>
        <section className="flex flex-col items-center gap-10 text-center p-10 mb-44 bg-darkBgSection rounded-xl shadow-custom-dark-2 border border-darkBorderLight md:flex-row md:text-left md:justify-center">
          <div className="w-full max-w-xs h-96 overflow-hidden rounded-xl shadow-custom-dark-1 flex justify-center items-center">
            <img
              src="/maxime.jpg"
              alt="Votre photo de profil"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full text-center md:text-left md:max-w-xl">
            <h3 className="text-3xl font-semibold text-darkTextPrimary mb-4">Lorem Ipsum is simply !</h3>
            <p className="text-lg text-darkTextSecondary leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since.
            </p>
          </div>
        </section>

        <section id="experiences" className="mb-44 p-10 rounded-xl bg-darkBgSection shadow-custom-dark-2 border border-darkBorderLight">
          <h2 className="text-4xl font-bold text-darkTextPrimary text-center mb-20 leading-tight">Mes Expériences</h2>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
            <div className="p-8 rounded-xl flex flex-col justify-between transition-all duration-300 ease-in-out text-justify bg-darkBgSection border border-darkBorderLight shadow-custom-dark-1 hover:-translate-y-1.5 hover:shadow-custom-dark-2">
              <h3 className="text-2xl font-semibold text-darkTextPrimary mb-4 text-center">Première Expérience</h3>
              <p className="text-darkTextSecondary leading-relaxed mb-6 flex-grow text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum vitae ratione atque consequatur impedit aspernatur corporis, hic nostrum eveniet voluptatem minima ullam, culpa dicta earum libero nulla expedita similique repellendus.
              </p>
              <button className="inline-block px-8 py-4 text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-primaryBlue text-white">
                En savoir plus
              </button>
            </div>
            <div className="p-8 rounded-xl flex flex-col justify-between transition-all duration-300 ease-in-out text-justify bg-darkBgSection border border-darkBorderLight shadow-custom-dark-1 hover:-translate-y-1.5 hover:shadow-custom-dark-2">
               <img
              src="/company.svg"
              alt="Votre photo de profil"
              className="w-full h-full object-cover rounded-xl"
            />
            </div>
          </div>
        </section>
        
        <section id="projets" className="mb-44 p-10 rounded-xl bg-darkBgSection shadow-custom-dark-2 border border-darkBorderLight text-center">
          <h2 className="text-4xl font-bold text-darkTextPrimary mb-8 leading-tight">Découvrez mes Projets</h2>
          <p className="text-lg text-darkTextSecondary leading-relaxed max-w-2xl mx-auto mb-8 text-center">
            Explorez mes réalisations techniques, des applications web complètes aux scripts utilitaires.
          </p>
          <Link to="/projets" className="inline-block px-8 py-4 text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-primaryBlue text-white">
            Voir mon Portfolio
          </Link>
        </section>

        <section id="parcours" className="mb-44 p-10 rounded-xl bg-darkBgSection shadow-custom-dark-2 border border-darkBorderLight flex flex-col items-center gap-10 text-center
                                  md:flex-row md:justify-center">
          <div className="flex justify-center w-full md:w-2/5 md:flex-shrink-0">
             <img
              src="/programing.svg"
              alt="Votre photo de profil"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-4xl font-bold text-darkTextPrimary mb-8 leading-tight">Mon Parcours Académique & Professionnel</h2>
            <p className="text-lg text-darkTextSecondary leading-relaxed max-w-2xl mx-auto mb-8 text-center">
              Découvrez les étapes clés de ma formation et de mon expérience,
              qui m'ont mené à devenir un développeur full-stack polyvalent.
            </p>
            <button className="inline-block px-8 py-4 text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-primaryBlue text-white">
              Détails du Parcours
            </button>
          </div>
        </section>

        <section id="about" className="mb-44 p-10 rounded-xl bg-darkBgSection shadow-custom-dark-2 border border-darkBorderLight text-center">
          <h2 className="text-4xl font-bold text-darkTextPrimary mb-8 leading-tight">À Propos de Moi</h2>
          <p className="text-lg text-darkTextSecondary leading-relaxed max-w-2xl mx-auto mb-8 text-center">
            Bonjour ! Je suis Maxime Larquetoux, un développeur passionné par la création et l'innovation. Mon objectif est de construire des applications web intuitives et performantes, en mettant l'accent sur une expérience utilisateur fluide et un code propre. Je suis actuellement à la recherche d'une alternance pour approfondir mes compétences et contribuer à des projets stimulants. N'hésitez pas à me contacter !
          </p>
          <button className="inline-block px-8 py-4 text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-primaryBlue text-white mt-8">
            En savoir plus
          </button>
        </section>
      </div>
    </>
  );
}

export default HomePage;

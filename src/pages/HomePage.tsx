import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <section className="relative h-screen flex flex-col justify-center items-center text-center text-white p-8 overflow-hidden mb-20 z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="absolute inset-0 bg-banner bg-cover bg-center animate-fade-in-slow z-0"></div>
        <div className="relative z-10 p-8 bg-gray-900 bg-opacity-40 rounded-xl shadow-2xl backdrop-blur-sm
                  transform transition-transform duration-500 ease-out hover:scale-[1.01] hover:shadow-3xl
                  max-w-6xl mx-auto w-full">
          <div className="mb-8 block">
            <h1 className="text-6xl font-extrabold font-montserrat text-shadow-lg mb-3 {/* Increased margin-bottom */}
                     md:text-5xl sm:text-4xl xs:text-3xl
                     animate-slide-in-top">
              Maxime Larquetoux
            </h1>
            <h2 className="text-5xl font-bold text-shadow-md mb-4 {/* Increased font size and made bolder, increased margin-bottom */}
                     md:text-4xl sm:text-3xl xs:text-2xl
                     animate-slide-in-left">
              Développeur Full-Stack
            </h2>
            <h3 className="text-3xl font-bold text-shadow-sm mb-6 {/* Increased font size and made bolder, increased margin-bottom */}
                     md:text-2xl sm:text-xl xs:text-lg
                     animate-slide-in-right">
              À la recherche d'une alternance
            </h3>
          </div>
          <Link to="/projets" className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full
            shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl animate-fade-in-up">
            Découvrir mes projets
          </Link>
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
            <h3 className="text-3xl font-semibold text-darkTextPrimary mb-4">👋 Bonjour, Moi c'est Maxime,</h3>
            <p className="text-lg text-darkTextSecondary leading-relaxed mb-6">
              je suis développeur full stack passionné par le développement. Je suis motivé, curieux et toujours prêt à apprendre de nouvelles choses. J’aime relever des défis techniques, explorer de nouvelles technologies et progresser continuellement dans mon métier.
            </p>
            <p className="text-lg text-darkTextSecondary leading-relaxed mb-6">
              Mon objectif : monter en compétences, me challenger sur des projets variés et apporter des solutions concrètes avec du code propre et efficace. Que ce soit en front-end ou en back-end, j’aime comprendre comment tout fonctionne, du design à la base de données.

            </p>
            <p className="text-lg text-darkTextSecondary leading-relaxed mb-6">👉 Prêt à contribuer, évoluer et construire des projets qui ont du sens !</p>
          </div>
        </section>

        <section id="experiences" className="mb-44 p-10 rounded-xl bg-darkBgSection shadow-custom-dark-2 border border-darkBorderLight">
          <h2 className="text-4xl font-bold text-darkTextPrimary text-center mb-20 leading-tight">Mes Expériences</h2>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
            <div className="p-8 rounded-xl flex flex-col justify-between transition-all duration-300 ease-in-out text-justify bg-darkBgSection border border-darkBorderLight shadow-custom-dark-1 hover:-translate-y-1.5 hover:shadow-custom-dark-2">
              <h3 className="text-2xl font-semibold text-darkTextPrimary mb-4 text-center">Expériences professionnelles</h3>
              <p className="text-darkTextSecondary leading-relaxed mb-6 flex-grow text-base">
                💼 Découvrez mon expérience en entreprise dans le domaine du développement !
                Au fil de mes stages et de mon alternance, j’ai eu l’opportunité de travailler sur des projets concrets au sein d’équipes professionnelles. Ces expériences m’ont permis de mettre en pratique mes compétences techniques, de comprendre les enjeux du métier sur le terrain, et de progresser dans un environnement réel.

                J’ai appris à m’adapter, à collaborer avec d’autres développeurs, à respecter des délais, et à contribuer à des applications utiles et fonctionnelles.
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
            🛠️ Explorez mes réalisations techniques
            De la création d'applications web complètes aux scripts utilitaires, je conçois des solutions fonctionnelles et efficaces. Chaque projet est pour moi une occasion d’apprendre, de tester de nouvelles approches et de relever des défis techniques concrets.
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
              💻 Découvrez mon parcours de formation pour apprendre le développement web !
              J’ai décidé de me lancer dans l’univers passionnant du code, et je partage ici les étapes de mon apprentissage, mes projets, mes réussites (et mes galères aussi 😅).
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

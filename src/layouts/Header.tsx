import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-headerBg shadow-lg py-4 rounded-b-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <a
            href="https://github.com/MaximeLarquetoux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkTextSecondary hover:text-blueAccentDark transition-all duration-300 text-2xl transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/MaximeLarquetoux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkTextSecondary hover:text-blueAccentDark transition-all duration-300 text-2xl transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://linktr.ee/MaximeLarquetoux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkTextSecondary hover:text-blueAccentDark transition-all duration-300 text-2xl transform hover:scale-110"
            aria-label="Linktree Profile"
          >
            <i className="fas fa-tree"></i>
          </a>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-lg font-medium md:gap-x-8">
          <Link to="/" className="text-darkTextSecondary hover:text-blueAccentDark hover:bg-headerShadow px-3 py-2 rounded-md transition-colors duration-300 whitespace-nowrap">Accueil</Link>
          <Link to="/projets" className="text-darkTextSecondary hover:text-blueAccentDark hover:bg-headerShadow px-3 py-2 rounded-md transition-colors duration-300 whitespace-nowrap">Projets</Link>
          <Link to={"/experiences"} className="text-darkTextSecondary hover:text-blueAccentDark hover:bg-headerShadow px-3 py-2 rounded-md transition-colors duration-300 whitespace-nowrap">Expériences</Link>
          <a href="/#parcours" className="text-darkTextSecondary hover:text-blueAccentDark hover:bg-headerShadow px-3 py-2 rounded-md transition-colors duration-300 whitespace-nowrap">Parcours</a>
          <a href="/#about" className="text-darkTextSecondary hover:text-blueAccentDark hover:bg-headerShadow px-3 py-2 rounded-md transition-colors duration-300 whitespace-nowrap">À propos</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;
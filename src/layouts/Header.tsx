const Header = ()=>{
    return(
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
    )
}


export default Header;
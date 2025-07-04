import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './styles/App.css'

export function App() {
  return (
    <Router> 
      <div className="app-container">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ProjectsPage" element={<ProjectsPage />} />
          </Routes>
        </main>
      </div>
      <Footer/>
    </Router>
  );
}
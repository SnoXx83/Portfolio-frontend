import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import ExperiencesPage from './pages/ExperiencesPage';
import ProjectByIdPage from './pages/ProjectByIdPage';
import './styles/App.css'

export function App() {
  return (
    <Router>
      <div className='min-h-screen bg-darkBgMain text-darkTextPrimary flex flex-col'>
        <Header />
        <main className="flex-grow pt-15 pb-10 ">
          {/* <main> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectByIdPage />} />
            <Route path='/experiences' element={<ExperiencesPage />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
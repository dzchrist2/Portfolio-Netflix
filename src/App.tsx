import React, { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './Layout';
import NetflixTitle from './pages/NetflixTitle/NetflixTitle';
import PageTransition from './components/PageTransition/PageTransition';

const ProfileSelect = lazy(() => import('./pages/ProfileSelect/ProfileSelect'));
const Home = lazy(() => import('./pages/Home/Home'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Certifications = lazy(() => import('./pages/Certifications/Certifications'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const PageFallback: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: '#e50914' }}>
    Loading…
  </div>
);

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<NetflixTitle />} />
          <Route path="/profiles" element={<ProfileSelect />} />
          <Route path="/profile/:profileName" element={<Layout><PageTransition><Home /></PageTransition></Layout>} />
          <Route path="/skills" element={<Layout><PageTransition><Skills /></PageTransition></Layout>} />
          <Route path="/experience" element={<Layout><PageTransition><Experience /></PageTransition></Layout>} />
          <Route path='/projects' element={<Layout><PageTransition><Projects /></PageTransition></Layout>} />
          <Route path="/projects/:slug" element={<Layout><PageTransition><ProjectDetail /></PageTransition></Layout>} />
          <Route path='/contact' element={<Layout><PageTransition><Contact /></PageTransition></Layout>} />
          <Route path='/certifications' element={<Layout><PageTransition><Certifications /></PageTransition></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default App

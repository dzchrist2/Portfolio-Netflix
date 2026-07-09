import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import NetflixTitle from './pages/NetflixTitle/NetflixTitle';

const ProfileSelect = lazy(() => import('./pages/ProfileSelect/ProfileSelect'));
const Home = lazy(() => import('./pages/Home/Home'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Certifications = lazy(() => import('./pages/Certifications/Certifications'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const PageFallback: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: '#e50914' }}>
    Loading…
  </div>
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<NetflixTitle />} />
        <Route path="/profiles" element={<ProfileSelect />} />
        <Route path="/profile/:profileName" element={<Layout><Home /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/experience" element={<Layout><Experience /></Layout>} />
        <Route path='/projects' element={<Layout><Projects /></Layout>} />
        <Route path='/contact' element={<Layout><Contact /></Layout>} />
        <Route path='/certifications' element={<Layout><Certifications /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App

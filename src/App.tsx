import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ProfileSelect from './pages/ProfileSelect/ProfileSelect'
import NetflixTitle from './pages/NetflixTitle/NetflixTitle';
import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/profiles" element={<ProfileSelect />} />
      <Route path="/profile/:profileName" element={<Layout><Home /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/experience" element={<Layout><Experience /></Layout>} />
      <Route path='/projects' element={<Layout><Projects /></Layout>} />
      <Route path='/contact' element={<Layout><Contact /></Layout>} />
      <Route path='/resume' element={'../../assets/Drew Christner - Resume.pdf'} />
    </Routes>
  );
};

export default App
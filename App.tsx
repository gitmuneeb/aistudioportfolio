
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Now from './pages/Now';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import WorkDetail from './pages/WorkDetail';
import Layout from './components/Layout';
import Loader from './components/Loader';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Artificial delay to let loader shine
    const timer = setTimeout(() => setIsLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader />
      {isLoaded && (
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/now" element={<Now />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work/:slug" element={<WorkDetail />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </>
  );
};

export default App;

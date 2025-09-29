import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
    <div className="bg-[#121212] text-gray-200 min-h-screen font-inter">
      {/* Header */}
      <header className="bg-[#121212] bg-opacity-90 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-8">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Rodolfo L. Abando, Jr.</span>
          <div className="space-x-4 md:space-x-8">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#resume" className="hover:text-cyan-400 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a>
          </div>
        </nav>
      </header>
      <main>
        <AboutMe />
        <Projects />
        <Resume />
        <Contact />
        <Blog />
      </main>
      <footer className="bg-gray-950 py-8 px-6 text-center text-gray-500 text-sm">
        <p>&copy; 2024 Rodolfo L. Abando, Jr. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
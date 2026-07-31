import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-wrapper flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            YS
          </div>
          <span className="text-xl font-bold text-gradient">Portfolio</span>
        </div>
        
        <ul className="hidden md:flex gap-8 items-center">
          <li><a href="#home" className="hover:text-blue-600 transition-colors font-medium">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors font-medium">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition-colors font-medium">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors font-medium">Contact</a></li>
        </ul>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-0 container-wrapper py-4">
            <li><a href="#home" className="block py-2 hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="block py-2 hover:text-blue-600">About</a></li>
            <li><a href="#projects" className="block py-2 hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="block py-2 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

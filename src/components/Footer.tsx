import React from 'react';
import { Heart, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} AI Yoga Instructor
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-600 text-sm">Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-slate-600 text-sm">and React</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
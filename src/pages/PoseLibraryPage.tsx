import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import PoseCard from '../components/PoseCard';
import { poseLibrary } from '../data/poseLibrary';
import { YogaPose } from '../types';

const PoseLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedDifficulty(null);
    setSelectedCategory(null);
  };
  
  const filteredPoses = poseLibrary.filter(pose => {
    const matchesSearch = pose.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pose.sanskritName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty ? pose.difficulty === selectedDifficulty : true;
    const matchesCategory = selectedCategory ? pose.category === selectedCategory : true;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });
  
  // Extract unique categories and difficulties for filters
  const categories = Array.from(new Set(poseLibrary.map(pose => pose.category)));
  const difficulties = Array.from(new Set(poseLibrary.map(pose => pose.difficulty)));
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Pose Library</h1>
        <p className="text-slate-600">
          Explore our collection of yoga poses with detailed guidance and AI feedback.
        </p>
      </motion.div>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search poses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                value={selectedDifficulty || ''}
                onChange={(e) => setSelectedDifficulty(e.target.value || null)}
                className="appearance-none block w-full pr-8 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              >
                <option value="">All Difficulties</option>
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <Filter className="h-4 w-4 text-slate-400" />
              </div>
            </div>
            
            <div className="relative">
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="appearance-none block w-full pr-8 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <Filter className="h-4 w-4 text-slate-400" />
              </div>
            </div>
            
            {(searchTerm || selectedDifficulty || selectedCategory) && (
              <button
                onClick={handleClearFilters}
                className="flex items-center px-3 py-2 text-sm bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <X className="h-4 w-4 mr-1" /> Clear
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Results */}
      {filteredPoses.length > 0 ? (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredPoses.map((pose) => (
            <motion.div key={pose.id} variants={fadeIn}>
              <PoseCard pose={pose} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center p-4 bg-slate-100 rounded-full mb-4">
            <Search className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-2">No poses found</h3>
          <p className="text-slate-600 max-w-md mx-auto">
            We couldn't find any poses matching your search criteria. Try adjusting your filters or search term.
          </p>
          <button
            onClick={handleClearFilters}
            className="mt-4 btn btn-primary"
          >
            Show All Poses
          </button>
        </div>
      )}
    </div>
  );
};

export default PoseLibraryPage;
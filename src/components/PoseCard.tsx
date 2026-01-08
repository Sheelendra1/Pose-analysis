import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Info, Play } from 'lucide-react';
import { YogaPose } from '../types';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

interface PoseCardProps {
  pose: YogaPose;
  showDetails?: boolean;
}

const PoseCard: React.FC<PoseCardProps> = ({ pose, showDetails = false }) => {
  const { setCurrentPose, favoriteIds, toggleFavorite } = useAppContext();
  const navigate = useNavigate();
  const isFavorite = favoriteIds.includes(pose.id);

  const handlePracticeClick = () => {
    setCurrentPose(pose);
    navigate('/practice');
  };

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(pose.id);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card card-hover h-full flex flex-col overflow-hidden"
    >
      <div className="relative overflow-hidden rounded-lg h-48 mb-4">
        <img 
          src={pose.imageUrl} 
          alt={pose.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <button 
            onClick={handleFavoriteToggle}
            className={`p-2 rounded-full ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-white/80 text-slate-500 hover:text-red-500'} transition-colors`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(pose.difficulty)}`}>
            {pose.difficulty.charAt(0).toUpperCase() + pose.difficulty.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-slate-800">{pose.name}</h3>
          <span className="text-xs text-slate-500 italic">{pose.sanskritName}</span>
        </div>
        
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{pose.description}</p>
        
        {showDetails && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-700 mb-1">Benefits:</h4>
            <ul className="text-xs text-slate-600 space-y-1 pl-4 list-disc">
              {pose.benefits.slice(0, 3).map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
              {pose.benefits.length > 3 && <li>And {pose.benefits.length - 3} more...</li>}
            </ul>
          </div>
        )}
      </div>
      
      <div className="flex space-x-2 mt-2">
        <button 
          onClick={handlePracticeClick}
          className="flex-1 btn btn-primary flex items-center justify-center"
        >
          <Play className="h-4 w-4 mr-1" />
          Practice
        </button>
      </div>
    </motion.div>
  );
};

export default PoseCard;
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Settings, User } from 'lucide-react';
import ProgressStats from '../components/ProgressStats';
import { useAppContext } from '../context/AppContext';
import { poseLibrary } from '../data/poseLibrary';

const ProfilePage: React.FC = () => {
  const { userProgress, favoriteIds } = useAppContext();
  
  const favoritePoses = poseLibrary.filter(pose => favoriteIds.includes(pose.id));
  const recentCompletedPoses = poseLibrary.filter(pose => 
    userProgress.completedPoses.includes(pose.id)
  ).slice(0, 3);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2">My Profile</h1>
        <p className="text-slate-600">
          Track your progress and manage your yoga journey.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - User Profile */}
        <div className="lg:col-span-1">
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="relative h-32 bg-gradient-to-r from-teal-500 to-teal-400"></div>
            <div className="relative px-6 pb-6">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white shadow-md">
                  <User className="h-12 w-12 text-slate-400" />
                </div>
              </div>
              <div className="mt-14 text-center">
                <h2 className="text-xl font-semibold text-slate-800">Yoga Enthusiast</h2>
                <p className="text-slate-500 text-sm mb-4">Member since April 2025</p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Beginner</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">25 Day Streak</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 space-y-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h3 className="font-medium text-slate-800 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-slate-500" />
              Settings
            </h3>
            
            {/* Settings Options */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Daily Reminders</span>
                <div className="relative inline-block w-10 align-middle select-none">
                  <input type="checkbox" name="toggle" id="reminder-toggle" defaultChecked className="sr-only peer" />
                  <label htmlFor="reminder-toggle" className="block h-6 rounded-full bg-slate-200 cursor-pointer peer-checked:bg-teal-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Voice Guidance</span>
                <div className="relative inline-block w-10 align-middle select-none">
                  <input type="checkbox" name="toggle" id="voice-toggle" defaultChecked className="sr-only peer" />
                  <label htmlFor="voice-toggle" className="block h-6 rounded-full bg-slate-200 cursor-pointer peer-checked:bg-teal-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Dark Mode</span>
                <div className="relative inline-block w-10 align-middle select-none">
                  <input type="checkbox" name="toggle" id="dark-toggle" className="sr-only peer" />
                  <label htmlFor="dark-toggle" className="block h-6 rounded-full bg-slate-200 cursor-pointer peer-checked:bg-teal-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></label>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <button className="w-full btn bg-slate-100 text-slate-700 hover:bg-slate-200">
                Edit Profile
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column - Progress and Stats */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <ProgressStats />
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-teal-500 mr-2" />
              <h3 className="text-lg font-medium text-slate-800">Practice Calendar</h3>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="text-center text-xs font-medium text-slate-500">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 28 }).map((_, i) => {
                // Randomly assign practice statuses
                const intensity = Math.random();
                let bgColor = 'bg-slate-100';
                
                if (intensity > 0.7) bgColor = 'bg-teal-500';
                else if (intensity > 0.4) bgColor = 'bg-teal-300';
                else if (intensity > 0.2) bgColor = 'bg-teal-200';
                
                return (
                  <div 
                    key={i} 
                    className={`aspect-square rounded ${bgColor} cursor-pointer transition-transform hover:scale-110`}
                    title={`April ${i + 1}, 2025`}
                  ></div>
                );
              })}
            </div>
            
            <div className="flex justify-center mt-3 space-x-3 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded bg-slate-100 mr-1"></div>
                <span className="text-slate-500">No Practice</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded bg-teal-200 mr-1"></div>
                <span className="text-slate-500">Light</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded bg-teal-300 mr-1"></div>
                <span className="text-slate-500">Regular</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded bg-teal-500 mr-1"></div>
                <span className="text-slate-500">Intense</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Favorite Poses */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium text-slate-800 mb-4">Favorite Poses</h3>
              
              {favoriteIds.length > 0 ? (
                <ul className="space-y-3">
                  {favoritePoses.slice(0, 5).map(pose => (
                    <li key={pose.id} className="flex items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <img src={pose.imageUrl} alt={pose.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-slate-800 font-medium">{pose.name}</p>
                        <p className="text-xs text-slate-500">{pose.sanskritName}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        pose.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                        pose.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {pose.difficulty.charAt(0).toUpperCase() + pose.difficulty.slice(1)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-6">
                  <p className="text-slate-500">No favorite poses yet.</p>
                  <a href="/poses" className="text-teal-600 hover:underline text-sm mt-2 inline-block">
                    Browse pose library
                  </a>
                </div>
              )}
            </div>
            
            {/* Recently Completed */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium text-slate-800 mb-4">Recently Completed</h3>
              
              {recentCompletedPoses.length > 0 ? (
                <ul className="space-y-3">
                  {recentCompletedPoses.map(pose => (
                    <li key={pose.id} className="flex items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <img src={pose.imageUrl} alt={pose.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-slate-800 font-medium">{pose.name}</p>
                        <p className="text-xs text-slate-500">Completed today</p>
                      </div>
                      <span className="text-sm text-teal-600">
                        85% <span className="text-xs">accuracy</span>
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-6">
                  <p className="text-slate-500">No poses completed yet.</p>
                  <a href="/practice" className="text-teal-600 hover:underline text-sm mt-2 inline-block">
                    Start practicing
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
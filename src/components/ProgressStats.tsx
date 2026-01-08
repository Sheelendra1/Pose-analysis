import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, FireExtinguisher, Award } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { poseLibrary } from '../data/poseLibrary';

const ProgressStats: React.FC = () => {
  const { userProgress } = useAppContext();
  
  const completedPercentage = Math.round((userProgress.completedPoses.length / poseLibrary.length) * 100);
  
  const stats = [
    {
      title: 'Poses Mastered',
      value: userProgress.completedPoses.length,
      total: poseLibrary.length,
      icon: <Award className="h-5 w-5 text-purple-500" />,
      color: 'from-purple-500 to-purple-400',
    },
    {
      title: 'Current Streak',
      value: userProgress.streakDays,
      unit: 'days',
      icon: <FireExtinguisher className="h-5 w-5 text-orange-500" />,
      color: 'from-orange-500 to-orange-400',
    },
    {
      title: 'Practice Time',
      value: userProgress.totalMinutes,
      unit: 'min',
      icon: <Clock className="h-5 w-5 text-teal-500" />,
      color: 'from-teal-500 to-teal-400',
    },
    {
      title: 'Last Practice',
      value: '2 hours ago',
      icon: <Calendar className="h-5 w-5 text-blue-500" />,
      color: 'from-blue-500 to-blue-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="card"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="text-slate-500 text-sm">{stat.title}</div>
            <div className="p-2 bg-slate-100 rounded-full">{stat.icon}</div>
          </div>
          
          <div className="flex items-end">
            <div className="text-2xl font-semibold text-slate-800">
              {stat.value}
            </div>
            {stat.unit && (
              <div className="ml-1 text-sm text-slate-500 mb-1">
                {stat.unit}
              </div>
            )}
            {stat.total && (
              <div className="ml-1 text-sm text-slate-500 mb-1">
                / {stat.total}
              </div>
            )}
          </div>
          
          {stat.total && (
            <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                style={{ width: `${completedPercentage}%` }}
              ></div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProgressStats;
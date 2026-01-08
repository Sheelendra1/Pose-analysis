import React, { createContext, useContext, useState, ReactNode } from 'react';
import { YogaPose } from '../types';
import { poseLibrary } from '../data/poseLibrary';

interface AppContextType {
  currentPose: YogaPose | null;
  setCurrentPose: (pose: YogaPose | null) => void;
  isCameraActive: boolean;
  setIsCameraActive: (active: boolean) => void;
  userProgress: {
    completedPoses: string[];
    streakDays: number;
    totalMinutes: number;
  };
  updateProgress: (poseId: string, minutes: number) => void;
  favoriteIds: string[];
  toggleFavorite: (poseId: string) => void;
}

const defaultContext: AppContextType = {
  currentPose: null,
  setCurrentPose: () => {},
  isCameraActive: false,
  setIsCameraActive: () => {},
  userProgress: {
    completedPoses: [],
    streakDays: 0,
    totalMinutes: 0,
  },
  updateProgress: () => {},
  favoriteIds: [],
  toggleFavorite: () => {},
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPose, setCurrentPose] = useState<YogaPose | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedPoses: [] as string[],
    streakDays: 0,
    totalMinutes: 0,
  });
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const updateProgress = (poseId: string, minutes: number) => {
    setUserProgress(prev => ({
      ...prev,
      completedPoses: [...new Set([...prev.completedPoses, poseId])],
      totalMinutes: prev.totalMinutes + minutes,
    }));
  };

  const toggleFavorite = (poseId: string) => {
    setFavoriteIds(prev => 
      prev.includes(poseId)
        ? prev.filter(id => id !== poseId)
        : [...prev, poseId]
    );
  };

  return (
    <AppContext.Provider
      value={{
        currentPose,
        setCurrentPose,
        isCameraActive,
        setIsCameraActive,
        userProgress,
        updateProgress,
        favoriteIds,
        toggleFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
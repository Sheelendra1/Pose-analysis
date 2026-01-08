import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, Clock, Volume2, VolumeX } from 'lucide-react';
import CameraView from '../components/CameraView';
import PoseAnalysis from '../components/PoseAnalysis';
import { useAppContext } from '../context/AppContext';

const PracticePage: React.FC = () => {
  const { currentPose, setCurrentPose } = useAppContext();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const handleImageCapture = (imageData: string) => {
    setCapturedImage(imageData);
  };

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  React.useEffect(() => {
    let interval: number | null = null;
    
    if (timerActive) {
      interval = window.setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Practice Session</h1>
        <p className="text-slate-600">
          Follow along with your chosen pose or select one from our library.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Camera View */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <CameraView onCapture={handleImageCapture} />
          </div>
          
          <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center">
              <div className="bg-slate-100 p-2 rounded-full mr-3">
                <Clock className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Practice Time</div>
                <div className="text-xl font-semibold text-slate-800">{formatTime(timerSeconds)}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleAudio}
                className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              >
                {audioEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </button>
              <button 
                onClick={() => setTimerActive(!timerActive)}
                className={`btn ${timerActive ? 'bg-red-500 hover:bg-red-600' : 'bg-teal-500 hover:bg-teal-600'} text-white`}
              >
                {timerActive ? 'Pause' : 'Start'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Pose Info & Analysis */}
        <div className="space-y-6">
          {currentPose ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={currentPose.imageUrl} 
                  alt={currentPose.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-slate-800">{currentPose.name}</h2>
                  <span className="text-sm text-slate-500 italic">{currentPose.sanskritName}</span>
                </div>
                <p className="text-slate-600 mb-4">{currentPose.description}</p>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-slate-700 mb-2">Key Points:</h3>
                  <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                    {currentPose.keyPoints.slice(0, 3).map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                    {currentPose.keyPoints.length > 3 && (
                      <li className="text-teal-600 font-medium cursor-pointer hover:underline">
                        Show {currentPose.keyPoints.length - 3} more points...
                      </li>
                    )}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-2">Common Mistakes:</h3>
                  <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                    {currentPose.commonMistakes.slice(0, 2).map((mistake, index) => (
                      <li key={index}>{mistake}</li>
                    ))}
                    {currentPose.commonMistakes.length > 2 && (
                      <li className="text-teal-600 font-medium cursor-pointer hover:underline">
                        Show {currentPose.commonMistakes.length - 2} more mistakes...
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center text-teal-500 mb-3">
                <Info className="h-5 w-5 mr-2" />
                <h3 className="font-medium">No Pose Selected</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                To get started, select a pose from the Pose Library.
              </p>
              <a href="/poses" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                Browse Pose Library →
              </a>
            </div>
          )}
          
          <PoseAnalysis imageData={capturedImage} />
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
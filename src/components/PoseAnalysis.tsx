import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { AIAnalysisResult } from '../types';
import { Check, AlertTriangle, X } from 'lucide-react';
import { analyzePose } from '../services/poseAnalysisService';

interface PoseAnalysisProps {
  imageData: string | null;
}

const PoseAnalysis: React.FC<PoseAnalysisProps> = ({ imageData }) => {
  const { currentPose, isCameraActive } = useAppContext();
  const [result, setResult] = useState<AIAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  useEffect(() => {
    if (imageData && isCameraActive) {
      analyzeUserPose(imageData);
    } else {
      setResult(null);
    }
  }, [imageData, isCameraActive]);

  const analyzeUserPose = async (image: string) => {
    setIsAnalyzing(true);
    try {
      const analysisResult = await analyzePose(image);
      setResult(analysisResult);
    } catch (error) {
      console.error('Error analyzing pose:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!isCameraActive) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-md">
        <p className="text-slate-500 text-center">
          Start the camera to begin pose analysis
        </p>
      </div>
    );
  }

  if (isAnalyzing && !result) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mb-4"></div>
          <p className="text-slate-700">Analyzing your pose...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-md">
        <p className="text-slate-500 text-center">
          Waiting for pose analysis...
        </p>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 85) return <Check className="h-5 w-5 text-green-500" />;
    if (score >= 70) return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    return <X className="h-5 w-5 text-red-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-6 shadow-md"
    >
      <div className="mb-4">
        <h3 className="text-lg font-medium text-slate-800 mb-4">
          AI Pose Analysis
        </h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 p-3 rounded-lg">
            <div className="text-sm text-slate-500 mb-1">Confidence</div>
            <div className="flex items-center">
              <div className={`text-xl font-semibold ${getScoreColor(result.confidence)}`}>
                {result.confidence}%
              </div>
              <div className="ml-2">
                {getScoreIcon(result.confidence)}
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-3 rounded-lg">
            <div className="text-sm text-slate-500 mb-1">Alignment</div>
            <div className="flex items-center">
              <div className={`text-xl font-semibold ${getScoreColor(result.alignmentScore)}`}>
                {result.alignmentScore}%
              </div>
              <div className="ml-2">
                {getScoreIcon(result.alignmentScore)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium text-slate-700 mb-2">Feedback:</h4>
        <ul className="space-y-2">
          {result.feedbackPoints.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start"
            >
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-teal-100 text-teal-600 mr-2 mt-0.5 flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-slate-600">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      
      {currentPose && (
        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500">Current pose:</div>
            <div className="font-medium text-teal-600">{currentPose.name}</div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PoseAnalysis;
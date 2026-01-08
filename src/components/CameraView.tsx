import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { AlertCircle, Camera, CameraOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

interface CameraViewProps {
  onCapture: (imageData: string) => void;
}

const CameraView: React.FC<CameraViewProps> = ({ onCapture }) => {
  const webcamRef = useRef<Webcam>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const { isCameraActive, setIsCameraActive } = useAppContext();

  useEffect(() => {
    // Check for camera permissions
    const checkCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasPermission(true);
        setCameraError(null);
        // Clean up the stream
        stream.getTracks().forEach(track => track.stop());
      } catch (err) {
        console.error('Camera permission error:', err);
        setHasPermission(false);
        setCameraError('Camera access denied. Please enable camera permissions.');
      }
    };

    checkCameraPermission();
  }, []);

  const handleStartCamera = () => {
    setIsCameraActive(true);
  };

  const handleStopCamera = () => {
    setIsCameraActive(false);
  };

  const captureFrame = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        onCapture(imageSrc);
      }
    }
  };

  // Continuously capture frames when camera is active
  useEffect(() => {
    let intervalId: number | null = null;
    
    if (isCameraActive) {
      intervalId = window.setInterval(() => {
        captureFrame();
      }, 3000); // Capture every 3 seconds
    }
    
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [isCameraActive]);

  if (hasPermission === false) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-red-50 rounded-xl border border-red-200 p-6">
        <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-lg font-medium text-red-700 mb-2">Camera Access Required</h3>
        <p className="text-red-600 text-center mb-4">{cameraError || 'Please enable camera access to use the AI pose detection.'}</p>
        <button 
          className="btn btn-accent"
          onClick={() => setHasPermission(null)}
        >
          Retry Camera Access
        </button>
      </div>
    );
  }

  return (
    <div className="camera-container relative bg-slate-100 rounded-xl overflow-hidden w-full aspect-video shadow-md">
      {isCameraActive ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: "user",
              width: 1280,
              height: 720,
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-white p-3 rounded-full shadow-md text-red-500 hover:bg-red-50 transition-colors"
              onClick={handleStopCamera}
            >
              <CameraOff size={20} />
            </motion.button>
          </div>
          <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <span className="mr-2">Live Analysis</span>
            <span className="animate-pulse relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <Camera className="h-12 w-12 text-slate-400 mb-4" />
          <p className="text-slate-500 mb-6">Camera is currently inactive</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            onClick={handleStartCamera}
          >
            Start Camera
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default CameraView;
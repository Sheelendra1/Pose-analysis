export interface YogaPose {
  id: string;
  name: string;
  sanskritName: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'standing' | 'seated' | 'balancing' | 'backbend' | 'inversion' | 'twist';
  benefits: string[];
  imageUrl: string;
  keyPoints: string[];
  commonMistakes: string[];
}

export interface PoseFeedback {
  poseId: string;
  score: number;
  feedback: string[];
  timestamp: number;
}

export interface AIAnalysisResult {
  poseName: string;
  confidence: number;
  alignmentScore: number;
  feedbackPoints: string[];
  timeInPose: number;
}
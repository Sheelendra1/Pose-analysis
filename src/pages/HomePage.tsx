import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Award, Bot as Lotus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { poseLibrary } from '../data/poseLibrary';
import PoseCard from '../components/PoseCard';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredPoses = poseLibrary.slice(0, 3);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <motion.section 
        className="relative rounded-3xl overflow-hidden mb-16 bg-gradient-to-r from-teal-500 to-teal-400 text-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 p-8 md:p-16 max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Perfect Your Yoga Practice with AI
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-teal-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Get real-time feedback on your poses, track your progress, and deepen your practice with our AI-powered yoga assistant.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button 
              onClick={() => navigate('/practice')}
              className="btn bg-white text-teal-600 hover:bg-teal-50 flex items-center"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Practice
            </button>
            <button 
              onClick={() => navigate('/poses')}
              className="btn bg-teal-600 text-white hover:bg-teal-700 flex items-center"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Explore Poses
            </button>
          </motion.div>
        </div>
        <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 opacity-10">
          <Lotus className="w-64 h-64 md:w-96 md:h-96" />
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-slate-800 mb-4"
            variants={fadeIn}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-slate-600 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Our AI-powered platform makes practicing yoga at home more effective by providing real-time feedback on your form.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Camera className="h-10 w-10 text-teal-500" />,
              title: "Real-time Analysis",
              description: "Our AI analyzes your posture through your camera and provides instant feedback."
            },
            {
              icon: <MessageSquare className="h-10 w-10 text-purple-500" />,
              title: "Personalized Guidance",
              description: "Get specific tips and corrections tailored to your body and practice level."
            },
            {
              icon: <BarChart className="h-10 w-10 text-orange-500" />,
              title: "Track Progress",
              description: "Monitor your improvement over time and celebrate your yoga journey."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="card text-center p-8"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Poses */}
      <motion.section 
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            className="text-2xl font-bold text-slate-800"
            variants={fadeIn}
          >
            Popular Poses
          </motion.h2>
          <motion.button 
            onClick={() => navigate('/poses')}
            className="text-teal-600 hover:text-teal-700 font-medium flex items-center"
            variants={fadeIn}
          >
            View All <span className="ml-1">→</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPoses.map((pose, index) => (
            <motion.div 
              key={pose.id}
              variants={fadeIn}
            >
              <PoseCard pose={pose} showDetails />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="rounded-2xl bg-slate-50 p-8 mb-16"
      >
        <motion.h2 
          className="text-2xl font-bold text-slate-800 mb-8 text-center"
          variants={fadeIn}
        >
          What Our Users Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              quote: "The AI feedback helped me correct my Warrior pose after years of doing it incorrectly!",
              name: "Sarah J.",
              role: "Yoga Enthusiast"
            },
            {
              quote: "As a yoga teacher, I recommend this to all my students for home practice. It's like having me there.",
              name: "Michael T.",
              role: "Yoga Instructor"
            },
            {
              quote: "I've seen more progress in my flexibility and alignment in two months than in my previous year of practice.",
              name: "Elena K.",
              role: "Beginner Yogi"
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index}
              className="card card-hover p-6"
              variants={fadeIn}
            >
              <div className="mb-4 text-yellow-500 flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        className="text-center py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Transform Your Practice?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Join thousands of yogis enhancing their practice with AI-powered feedback and guidance.
        </p>
        <button 
          onClick={() => navigate('/practice')}
          className="btn btn-primary text-lg px-8 py-3"
        >
          Start Your Journey Now
        </button>
      </motion.section>
    </div>
  );
};

// Additional components for Home page
const Camera = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>;

const MessageSquare = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;

const BarChart = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>;

const StarIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;

export default HomePage;
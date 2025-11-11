import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';
import './OnboardingModal.css';

const OnboardingModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Blaqsbi!",
      content: "Your gateway to African innovation and community. Let's get you started with a quick tour.",
      icon: "🌟"
    },
    {
      title: "Explore the Dashboard",
      content: "Check out your analytics, user stats, and engagement trends. See how the community is growing!",
      icon: "📊"
    },
    {
      title: "Join Huddles",
      content: "Connect with people from across Africa. Share ideas, collaborate, and earn points in country-specific communities.",
      icon: "🤝"
    },
    {
      title: "Earn & Redeem Points",
      content: "Post content, engage with others, and level up. Use your points in the marketplace for premium features.",
      icon: "🏆"
    },
    {
      title: "Customize Your Experience",
      content: "Personalize your profile, unlock achievements, and explore premium tiers for enhanced features.",
      icon: "🎨"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const finishOnboarding = () => {
    onClose();
    // Here you could save to localStorage that onboarding is complete
    localStorage.setItem('onboardingComplete', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="onboarding-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="onboarding-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}>
              <FaTimes />
            </button>

            <div className="step-indicator">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`step-dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                />
              ))}
            </div>

            <motion.div
              className="step-content"
              key={currentStep}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="step-icon">{steps[currentStep].icon}</div>
              <h2>{steps[currentStep].title}</h2>
              <p>{steps[currentStep].content}</p>
            </motion.div>

            <div className="step-navigation">
              <button
                className="nav-btn prev"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <FaChevronLeft />
                Previous
              </button>

              {currentStep < steps.length - 1 ? (
                <button className="nav-btn next" onClick={nextStep}>
                  Next
                  <FaChevronRight />
                </button>
              ) : (
                <button className="nav-btn finish" onClick={finishOnboarding}>
                  Get Started
                  <FaCheck />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnboardingModal;
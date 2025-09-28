import React, { useState, useEffect, useRef } from 'react';
import { SlideContent } from '../types';

interface SlideProps {
  content: SlideContent;
}

const Slide: React.FC<SlideProps> = ({ content }) => {
  // State for Slide 1 bubbles
  const [showBubble1, setShowBubble1] = useState(false);
  const [showBubble2, setShowBubble2] = useState(false);
  const [showBubble3, setShowBubble3] = useState(false);
  const [showBubble4, setShowBubble4] = useState(false);
  const [showBubble5, setShowBubble5] = useState(false);
  const [showBubble6, setShowBubble6] = useState(false);
  const [showBubble7, setShowBubble7] = useState(false);

  // State for Slide 2 bubbles
  const [showSlide2Bubble1, setShowSlide2Bubble1] = useState(false);
  const [showSlide2Bubble2, setShowSlide2Bubble2] = useState(false);
  const [showSlide2Bubble3, setShowSlide2Bubble3] = useState(false);
  const [showSlide2Bubble4, setShowSlide2Bubble4] = useState(false);
  const [showSlide2Bubble5, setShowSlide2Bubble5] = useState(false);
  
  // State for Slide 3 bubbles
  const [showSlide3Bubble1, setShowSlide3Bubble1] = useState(false);
  const [showSlide3Bubble2, setShowSlide3Bubble2] = useState(false);
  const [showSlide3Bubble3, setShowSlide3Bubble3] = useState(false);
  const [showSlide3Bubble4, setShowSlide3Bubble4] = useState(false);
  const [showSlide3Bubble5, setShowSlide3Bubble5] = useState(false);
  const [showSlide3Bubble6, setShowSlide3Bubble6] = useState(false);

  // State for Slide 4 bubbles
  const [showSlide4Bubble1, setShowSlide4Bubble1] = useState(false);
  const [showSlide4Bubble2, setShowSlide4Bubble2] = useState(false);
  const [showSlide4Bubble3, setShowSlide4Bubble3] = useState(false);
  const [showSlide4Bubble4, setShowSlide4Bubble4] = useState(false);
  const [showSlide4Bubble5, setShowSlide4Bubble5] = useState(false);

  const slide1BubblesRef = useRef<HTMLDivElement>(null);
  const slide2BubblesRef = useRef<HTMLDivElement>(null);
  const slide3BubblesRef = useRef<HTMLDivElement>(null);
  const slide4BubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset all bubble states on slide change
    setShowBubble1(false);
    setShowBubble2(false);
    setShowBubble3(false);
    setShowBubble4(false);
    setShowBubble5(false);
    setShowBubble6(false);
    setShowBubble7(false);
    setShowSlide2Bubble1(false);
    setShowSlide2Bubble2(false);
    setShowSlide2Bubble3(false);
    setShowSlide2Bubble4(false);
    setShowSlide2Bubble5(false);
    setShowSlide3Bubble1(false);
    setShowSlide3Bubble2(false);
    setShowSlide3Bubble3(false);
    setShowSlide3Bubble4(false);
    setShowSlide3Bubble5(false);
    setShowSlide3Bubble6(false);
    setShowSlide4Bubble1(false);
    setShowSlide4Bubble2(false);
    setShowSlide4Bubble3(false);
    setShowSlide4Bubble4(false);
    setShowSlide4Bubble5(false);

    const initialDelay = 500; // ms to wait before the first bubble
    

    if (content.id === 1) {
      const interval = 5000; // 5 seconds between bubbles
      const timer1 = setTimeout(() => setShowBubble1(true), initialDelay);
      const timer2 = setTimeout(() => setShowBubble2(true), initialDelay + interval * 1);
      const timer3 = setTimeout(() => setShowBubble3(true), initialDelay + interval * 2);
      const timer4 = setTimeout(() => setShowBubble4(true), initialDelay + interval * 3);
      const timer5 = setTimeout(() => setShowBubble5(true), initialDelay + interval * 4);
      const timer6 = setTimeout(() => setShowBubble6(true), initialDelay + interval * 5);
      const timer7 = setTimeout(() => setShowBubble7(true), initialDelay + interval * 6);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
        clearTimeout(timer7);
      };
    } else if (content.id === 2) {
      const interval = 5000; // 5 seconds between bubbles
      const timer1 = setTimeout(() => setShowSlide2Bubble1(true), initialDelay);
      const timer2 = setTimeout(() => setShowSlide2Bubble2(true), initialDelay + interval * 1);
      const timer3 = setTimeout(() => setShowSlide2Bubble3(true), initialDelay + interval * 2);
      const timer4 = setTimeout(() => setShowSlide2Bubble4(true), initialDelay + interval * 3);
      const timer5 = setTimeout(() => setShowSlide2Bubble5(true), initialDelay + interval * 4);
       return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    } else if (content.id === 3) {
      const firstInterval = 3000; // 3 seconds
      const subsequentInterval = 10000; // 10 seconds

      const timer1 = setTimeout(() => setShowSlide3Bubble1(true), initialDelay);
      const timer2 = setTimeout(() => setShowSlide3Bubble2(true), initialDelay + firstInterval);
      const timer3 = setTimeout(() => setShowSlide3Bubble3(true), initialDelay + firstInterval + subsequentInterval);
      const timer4 = setTimeout(() => setShowSlide3Bubble4(true), initialDelay + firstInterval + subsequentInterval * 2);
      const timer5 = setTimeout(() => setShowSlide3Bubble5(true), initialDelay + firstInterval + subsequentInterval * 3);
      const timer6 = setTimeout(() => setShowSlide3Bubble6(true), initialDelay + firstInterval + subsequentInterval * 4);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
      };
    } else if (content.id === 4) {
      const interval1 = 3000; // 1st to 2nd
      const interval2 = 10000; // 2nd to 3rd
      const interval3 = 8000; // 3rd to 4th
      const interval4 = 8000; // 4th to 5th
      const timer1 = setTimeout(() => setShowSlide4Bubble1(true), initialDelay);
      const timer2 = setTimeout(() => setShowSlide4Bubble2(true), initialDelay + interval1);
      const timer3 = setTimeout(() => setShowSlide4Bubble3(true), initialDelay + interval1 + interval2);
      const timer4 = setTimeout(() => setShowSlide4Bubble4(true), initialDelay + interval1 + interval2 + interval3);
      const timer5 = setTimeout(() => setShowSlide4Bubble5(true), initialDelay + interval1 + interval2 + interval3 + interval4);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    }
  }, [content.id]);

  useEffect(() => {
    if (slide1BubblesRef.current) {
      slide1BubblesRef.current.scrollTop = slide1BubblesRef.current.scrollHeight;
    }
  }, [showBubble1, showBubble2, showBubble3, showBubble4, showBubble5, showBubble6, showBubble7]);

  useEffect(() => {
    if (slide2BubblesRef.current) {
      slide2BubblesRef.current.scrollTop = slide2BubblesRef.current.scrollHeight;
    }
  }, [showSlide2Bubble1, showSlide2Bubble2, showSlide2Bubble3, showSlide2Bubble4, showSlide2Bubble5]);

  useEffect(() => {
    if (slide3BubblesRef.current) {
      slide3BubblesRef.current.scrollTop = slide3BubblesRef.current.scrollHeight;
    }
  }, [showSlide3Bubble1, showSlide3Bubble2, showSlide3Bubble3, showSlide3Bubble4, showSlide3Bubble5, showSlide3Bubble6]);

  useEffect(() => {
    if (slide4BubblesRef.current) {
      slide4BubblesRef.current.scrollTop = slide4BubblesRef.current.scrollHeight;
    }
  }, [showSlide4Bubble1, showSlide4Bubble2, showSlide4Bubble3, showSlide4Bubble4, showSlide4Bubble5]);

  const renderContent = () => {
    switch (content.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            {content.title && <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-lg mb-4">{content.title}</h1>}
            {content.text && <p className="text-2xl text-gray-700 drop-shadow-md">{content.text}</p>}
          </div>
        );
      case 'image_text':
        return (
          <div className="flex flex-col h-full p-6 text-center">
            {content.title && <h2 className="text-3xl font-bold text-gray-800 mb-4">{content.title}</h2>}
            <div className="flex-grow flex flex-col items-center justify-center space-y-4">
              {content.imageUrl && (
                <img 
                  src={content.imageUrl} 
                  alt={content.title || 'Slide image'} 
                  className="rounded-lg shadow-xl max-w-full h-auto max-h-[40vh] object-contain border-4 border-white"
                />
              )}
              {content.text && <p className="text-lg text-gray-700 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md mt-4">{content.text}</p>}
            </div>
          </div>
        );
      case 'bullet_points':
        return (
          <div className="flex flex-col h-full p-6">
            {content.title && <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{content.title}</h2>}
            <ul className="space-y-4 text-lg text-gray-700 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md flex-grow">
              {content.points?.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full relative">
      <style>{`
        @keyframes slide-up-fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up-fade-in {
          animation: slide-up-fade-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
      {renderContent()}

      {/* Slide 1 Conversation */}
      {content.id === 1 && (
        <>
          <div 
            ref={slide1BubblesRef} 
            className="absolute top-4 left-4 right-4 bottom-28 overflow-y-auto p-4 z-10 flex flex-col bg-white/50 backdrop-blur-md rounded-2xl shadow-lg"
            aria-live="polite"
          >
            <div className="flex-grow" />
            <div className="flex flex-col items-start space-y-2 max-w-xs">
              {showBubble1 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    "<span className="font-bold text-2xl">5,759</span> cases in MALES"<br/>
                    "<span className="font-bold text-2xl">3,534</span> cases in FEMALES"
                  </p>
                  <a href="https://www.nccs.com.sg/your-care/about-cancer/cancer-statistics" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-left block mt-2">
                    source
                  </a>
                </div>
              )}
              {showBubble2 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800 text-center">
                      <span className="font-bold text-xl">18-22%</span> 5-year survival rate in SG
                  </p>
                  <a href="https://www.nccs.com.sg/news/patient-care/its-not-a-death-sentence-how-mum-of-two-overcomes-stage-4-lung-cancer-and-finds-calling-in-comforting-others" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-left block mt-2">
                      source
                  </a>
                </div>
              )}
              {showBubble3 && (
                  <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                      5-year survival rate by stages :<br/>
                      - Stage III: <span className="font-bold text-2xl">15-35% ‼️</span><br/>
                      - Stage IV: <span className="font-bold text-2xl">5% ‼️</span>
                  </p>
                  <a href="https://aaro.sg/understanding-lung-cancer-stages-from-diagnosis-to-treatment/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-left block mt-2">
                      source
                  </a>
                </div>
              )}
              {showBubble4 && (
                  <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                      LDCT Lung Screening is recommended by public health programs in many countries 🌏 for EARLY DETECTION:<br/>
                      <span className="flex items-center">JAPAN <a href="https://www.mhlw.go.jp/topics/2003/05/dl/tp0530-3c1.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline ml-2">source</a></span>
                      <span className="flex items-center">TAIWAN <a href="https://www.hpa.gov.tw/File/Attach/16010/File_22158.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline ml-2">source</a></span>
                      <span className="flex items-center">CHINA <a href="https://www.nhc.gov.cn/yzygj/c100068/202204/0c1f7d3aca0545abbeb02030ce255930/files/1732863054387_68585.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline ml-2">source</a></span>
                      <span className="flex items-center">U.S <a href="https://www.cdc.gov/lung-cancer/screening/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline ml-2">source</a></span>
                      <span className="flex items-center">E.U <a href="https://health.ec.europa.eu/non-communicable-diseases/cancer/europes-beating-cancer-plan-eu4health-financed-projects/projects/solace_en#:~:text=Screening%20using%20low%2Ddose%20computed,mortality%20by%20at%20least%2020" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline ml-2">source</a></span>
                  </p>
                </div>
              )}
              {showBubble5 && (
                  <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                      ❓The answer is SMOKING.<br/>
                      👋🏻Longterm data of vaping is lacking, thus Lung Screening is especially valuable for those with a history of vaping. <br/> 
                  </p>
                </div>
              )}
              {showBubble6 && (
                  <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                      No it's not a typo. Data shows nearly half of lung cancer patients are non-smoker !
                  </p>
                  <a href="http://www.smj.org.sg/sites/default/files/OA-2021-032-epub.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-left block mt-2">
                      source
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="absolute bottom-28 right-4 z-20 pointer-events-none">
            <img src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/gif/bunny-book.gif" alt="Bunny reading a book" className="w-20 h-auto" />
          </div>
        </>
      )}

      {/* Slide 2 Conversation */}
      {content.id === 2 && (
        <>
          <div 
            ref={slide2BubblesRef} 
            className="absolute top-4 left-4 right-4 bottom-28 overflow-y-auto p-4 z-10 flex flex-col bg-white/50 backdrop-blur-md rounded-2xl shadow-lg"
            aria-live="polite"
          >
            <div className="flex-grow" />
            <div className="flex flex-col items-start space-y-2 max-w-xs">
              {showSlide2Bubble1 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    The number is a cold fact. Finding out other causes is important.🧐
                  </p>
                </div>
              )}
              {showSlide2Bubble2 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    🍳Several toxic agents, including some accepted or suspected carcinogens, have been detected in the emissions of the heated cooking oils. Chinese-style cooking is indeed a cause of lung cancer.
                  </p>
                  <a href="https://www.sjweh.fi/show_abstract.php?abstract_id=440" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-left block mt-2">
                    source
                  </a>
                </div>
              )}
              {showSlide2Bubble3 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    👷🏻‍♂️Welding fumes contain carcinogens like fluorides, metallic oxides, and silicates. Meanwhile, benzene is a natural part of mixtures such as crude oil and gasoline, which are commonly found in the oil and gas industry.
                  </p>
                  <a href="https://radiotherapysingapore.com/top-5-lung-cancer-causes-in-non-smokers/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-left block mt-2">
                    source
                  </a>
                </div>
              )}
              {showSlide2Bubble4 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    🏕️Radioactive gas that comes from natural uranium decay in soil and seeps into homes through foundation cracks. Though it's uncommon in SG, it's still one of the major risk factor.
                  </p>
                  <a href="https://www.epa.gov/radon/health-risk-radon" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-left block mt-2">
                    source
                  </a>
                </div>
              )}
              {showSlide2Bubble5 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    CT scan technology has advanced rapidly in recent years, evolving from mainly diagnosing illness to playing a vital role in <span className="font-bold">early detection</span> and prevention.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="absolute bottom-28 right-4 z-20 pointer-events-none">
            <img src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/gif/bunny-laptop.gif" alt="Bunny with laptop" className="w-20 h-auto" />
          </div>
        </>
      )}

      {/* Slide 3 Conversation */}
      {content.id === 3 && (
        <>
          <div 
            ref={slide3BubblesRef} 
            className="absolute top-4 left-4 right-4 bottom-28 overflow-y-auto p-4 z-10 flex flex-col bg-white/50 backdrop-blur-md rounded-2xl shadow-lg"
            aria-live="polite"
          >
            <div className="flex-grow" />
            <div className="flex flex-col items-start space-y-2 max-w-xs">
              {showSlide3Bubble1 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    OK, now let's explore how CANON excels 🚀
                  </p>
                </div>
              )}
              {showSlide3Bubble2 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    Dual camera system detects patient features and spatial orientation for automatic couch height, lateral and longitudinal position adjustment. Two environment data ensure accurate positioning avoid common errors such as inaccurate depth calculation due to room lighting differences for ceiling mounted single camera.
                  </p>
                </div>
              )}
              {showSlide3Bubble3 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    Canon's SilverBeam energy-shaping filter removes low energy photons from X-ray beam, those photons are useless in forming diagnostic images. By doing so, radiation dose delivered to the patient can be significantly reduced.
                  </p>
                </div>
              )}
              {showSlide3Bubble4 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    Traditional dual planar acquisition is replaced with an ultra-low dose, three-dimensional helical scan - 3D Landmark Scan. 1mm slice width images from this step offer a wealth of anatomical details which AI used to drive Anatomical Landmark Detection ALD for quick, a-ccurate and consistent scan planning.
                  </p>
                </div>
              )}
              {showSlide3Bubble5 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    Based on user feedback survey, the INSTINX UX user-interface eliminated unnecessary redundancies / information, its new design uses recognizable icons placed in intuitive locations on the screen, consistent terminology, clear visual flow from the start to the end of the scan. And more visual elements such as flow progression, functions badges etc. <br/>
                    FOCUS ON THE SCAN !<br/> 
                    DISTRACTIONS GO AWAY !
                  </p>
                </div>
              )}
              {showSlide3Bubble6 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    AiCE DLR was trained from wide range of data, thousands of phantom and patient images were examined by medical physicists and radiologists for the development. Its algorithm generates high quality images from low quality images while preserving signal and spatial resolution across the clinical spectrum, providing improvements in noise, low contrast detectability, and spatial resolution preservation. Making ULTRA-HIGH RESOLUTION CT at standard dose. 💯
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="absolute bottom-28 right-4 z-20 pointer-events-none">
            <img src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/gif/bunny-xray.gif" alt="Bunny with X-ray" className="w-20 h-auto" />
          </div>
        </>
      )}

      {/* Slide 4 Conversation */}
      {content.id === 4 && (
        <>
          <div 
            ref={slide4BubblesRef} 
            className="absolute top-4 left-4 right-4 bottom-28 overflow-y-auto p-4 z-10 flex flex-col bg-white/50 backdrop-blur-md rounded-2xl shadow-lg"
            aria-live="polite"
          >
            <div className="flex-grow" />
            <div className="flex flex-col items-start space-y-2 max-w-xs">
              {showSlide4Bubble1 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-4 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <p className="text-base text-gray-800">
                    🐰 Let's have a virtual demo ~
                  </p>
                </div>
              )}
              {showSlide4Bubble2 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-2 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <img 
                    src="https://raw.githubusercontent.com/samchuchu/canonradbit/refs/heads/main/components/step1.gif" 
                    alt="Step 1 Demo" 
                    className="rounded-md w-full h-auto object-contain"
                  />
                </div>
              )}
              {showSlide4Bubble3 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-2 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <img 
                    src="https://raw.githubusercontent.com/samchuchu/canonradbit/refs/heads/main/components/step2.gif" 
                    alt="Step 2 Demo" 
                    className="rounded-md w-full h-auto object-contain"
                  />
                </div>
              )}
              {showSlide4Bubble4 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-2 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <img 
                    src="https://raw.githubusercontent.com/samchuchu/canonradbit/refs/heads/main/components/step3.gif" 
                    alt="Step 3 Demo" 
                    className="rounded-md w-full h-auto object-contain"
                  />
                </div>
              )}
              {showSlide4Bubble5 && (
                <div className="bg-gray-200/80 backdrop-blur-sm p-2 rounded-lg rounded-bl-none shadow-md animate-slide-up-fade-in">
                  <img 
                    src="https://raw.githubusercontent.com/samchuchu/canonradbit/refs/heads/main/components/step4.gif" 
                    alt="Step 4 Demo" 
                    className="rounded-md w-full h-auto object-contain"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="absolute bottom-28 right-4 z-20 pointer-events-none">
            <img src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/gif/bunny-file.gif" alt="Bunny with files for demo" className="w-20 h-auto" />
          </div>
        </>
      )}
    </div>
  );
};

export default Slide;
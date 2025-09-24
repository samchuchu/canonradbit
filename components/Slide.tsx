import React, { useState, useEffect } from 'react';
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

    if (content.id === 1) {
      const timer1 = setTimeout(() => setShowBubble1(true), 500);
      const timer2 = setTimeout(() => setShowBubble2(true), 3500);
      const timer3 = setTimeout(() => setShowBubble3(true), 6500);
      const timer4 = setTimeout(() => setShowBubble4(true), 8500);
      const timer5 = setTimeout(() => setShowBubble5(true), 11500);
      const timer6 = setTimeout(() => setShowBubble6(true), 14500);
      const timer7 = setTimeout(() => setShowBubble7(true), 16500);

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
      const timer1 = setTimeout(() => setShowSlide2Bubble1(true), 1000);
      const timer2 = setTimeout(() => setShowSlide2Bubble2(true), 4000); // 1000ms + 3000ms
       return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [content.id]);

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
      {renderContent()}

      {/* Slide 1 Conversation */}
      {content.id === 1 && (
        <div className="absolute bottom-20 right-4 flex flex-col items-end space-y-2">
          <div className="flex flex-col items-end space-y-2 max-w-xs">
            {showBubble1 && (
              <div className="bg-gray-200 p-4 rounded-lg rounded-br-none shadow-md">
                <p className="text-base text-gray-800">
                  "5,759 cases in males"<br/>
                  "3,534 cases in females"
                </p>
                <a href="https://www.nccs.com.sg/your-care/about-cancer/cancer-statistics" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-right block mt-2">
                  source
                </a>
              </div>
            )}
            {showBubble2 && (
              <div className="bg-gray-200 p-4 rounded-lg rounded-br-none shadow-md">
                 <p className="text-base text-gray-800">
                    Singapore has one of the lowest five-year survival rates for lung cancer globally !<br/> 
                    21.9% for males / 37.8% for females
                </p>
                 <a href="https://www.nccs.com.sg/news/patient-care/its-not-a-death-sentence-how-mum-of-two-overcomes-stage-4-lung-cancer-and-finds-calling-in-comforting-others" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-right block mt-2">
                    source
                </a>
              </div>
            )}
            {showBubble3 && (
                 <div className="bg-gray-200 p-4 rounded-lg rounded-br-none shadow-md">
                 <p className="text-base text-gray-800">
                    Lung cancer TNM system :<br/>
                    - Stage III: Locally advanced with lymph node involvement<br/>
                    - Stage IV: Metastatic disease with distant spread
                </p>
                 <a href="https://aaro.sg/understanding-lung-cancer-stages-from-diagnosis-to-treatment/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-right block mt-2">
                    source
                </a>
              </div>
            )}
             {showBubble4 && (
                 <div className="bg-gray-200 p-4 rounded-lg rounded-br-none shadow-md">
                 <p className="text-base text-gray-800">
                    5-year survival rates DROP!!<br/>
                    Stage I SCLC: 25-30%<br/>
                    Stage I NSCLC: 70-80%<br/>
                    Advanced stages: Significantly lower survival rates
                </p>
                 <a href="https://www.rafflesmedicalgroup.com/health-resources/health-articles/what-you-need-to-know-about-lung-cancer/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-right block mt-2">
                    source
                </a>
              </div>
            )}
            {showBubble5 && (
                 <div className="bg-gray-200 p-4 rounded-lg rounded-br-none shadow-md">
                 <p className="text-base text-gray-800">
                    Singapore shows a unique pattern for the high rate non-smoker patient
                </p>
                 <a href="https://www.singhealth.com.sg/symptoms-treatments/lung-cancer" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-right block mt-2">
                    source
                </a>
              </div>
            )}
            {showBubble6 && (
                 <div className="bg-gray-200 p-4 rounded-lg rounded-br-none shadow-md">
                 <p className="text-base text-gray-800">
                    Factors are Air pollution (asbestos, radon, chromates, nickel) and cooking style..etc
                </p>
                 <a href="https://www.ntu.edu.sg/news/detail/linking-increasing-air-pollution-to-the-rise-of-a-type-of-lung-cancer" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-right block mt-2">
                    source
                </a>
              </div>
            )}
            {showBubble7 && (
                 <div className="bg-gray-200 p-4 rounded-lg rounded-br-none shadow-md">
                 <p className="text-base text-gray-800">
                    Radon is a radioactive gas formed naturally by the decay of uranium, thorium, or radium in rocks, soil, and groundwater.
                </p>
              </div>
            )}
          </div>
          <img src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/gif/bunny-book.gif" alt="Bunny reading a book" className="w-40 h-auto" />
        </div>
      )}

      {/* Slide 2 Conversation */}
      {content.id === 2 && (
        <div className="absolute bottom-20 right-4 flex flex-col items-end space-y-2">
            <div className="flex flex-col items-end space-y-2 max-w-xs">
              {showSlide2Bubble1 && (
                <div className="bg-gray-200 p-4 rounded-lg rounded-br-none shadow-md">
                  <p className="text-base text-gray-800">
                    Many people often feel anxious about radiation risks and generally lack a clear understanding of the procedure and its safety
                  </p>
                  <a href="https://www.jneonatalsurg.com/index.php/jns/article/view/7402" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-right block mt-2">
                    source
                  </a>
                </div>
              )}
              {showSlide2Bubble2 && (
                <div className="bg-gray-200 p-4 rounded-lg rounded-br-none shadow-md">
                  <p className="text-base text-gray-800">
                    NOW - provides detection of many diseases, including cancers, cardiovascular, and neurological disorders, by providing detailed images
                  </p>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11526153/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline text-right block mt-2">
                    source
                  </a>
                </div>
              )}
            </div>
          <img src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/gif/bunny-laptop.gif" alt="Bunny with laptop" className="w-40 h-auto" />
        </div>
      )}
    </div>
  );
};

export default Slide;
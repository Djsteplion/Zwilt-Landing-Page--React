import { useState } from 'react';
import step1 from '../images/Frame 626623 (2).png';
import step2 from '../images/Frame 626623 (1).png';

const ZwiltAccordion = () => {
  // Store the index of the open item (null means all are closed)
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { title: "Resume Screening", step: "Step 1: ", content: "We pick the best resumes..." },
    { title: "Video Interview", step: "Step 2: ",content: " Candidates are accessed through skill based questions in a virtual setting, allowing you to guage personality and cultural fit." },
    { title: "Technical Evaluation",step: "Step 3: ", content: "Solving real-world problems..." },
    { title: "Application Review",step: "Step 4: ", content: "Meet the whole team..." },
    { title: "Let's get to work", step: "Step 5: ",content: "Joining the Zwilt family..." },
  ];

  return (
    <div className="accordion-container">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div 
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`accordion-item ${isActive ? 'step2' : 'step1'}`}
          >
            <div className="step2Header">
                <img src={isActive ? step2 : step1} alt=""/>
                <p><span className={isActive ? 'hBold' : 'hlight'}>{item.step}</span>{item.title}</p> 
            </div>
            
            {/* Reveal text only if active */}
            {isActive && (
              <div className="step2content">
                    {item.content}
                </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ZwiltAccordion;
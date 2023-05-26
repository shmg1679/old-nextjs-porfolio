import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RelevantClasses = () => {
  const cards = [
    { courseName: "Object-Oriented Programming", courseClassname: 'CSCI 272', title: '' },
    { courseName: "Computer Architecture", courseClassname: 'CSCI 274', title: '' },
    { courseName: "Cryptography and Cryptoanalysis", courseClassname: 'CSCI 360', title: '' },
    { courseName: "Advanced Data Structures", courseClassname: 'CSCI 373', title: '' },
    { courseName: "Programming Languages", courseClassname: 'CSCI 374', title: '' },
    { courseName: "Operating Systems", courseClassname: 'CSCI 375', title: '' },
    { courseName: "Computer Algorithms", courseClassname: 'CSCI 377', title: '' },
    { courseName: "Computer Networks", courseClassname: 'CSCI 379', title: '' },
    { courseName: "Computer Security and Forensics", courseClassname: 'CSCI 411', title: '' },
    { courseName: "Network Security and Forensics", courseClassname: 'CSCI 412', title: '' },
    { courseName: "Digital Foren./Cybersecurity I", courseClassname: 'CSCI 400', title: 'Capstone Exp. in Digital Foren./Cybersecurity I' },
    { courseName: "Digital Foren./Cybersecurity II", courseClassname: 'CSCI 401', title: 'Capstone Exp. in Digital Foren./Cybersecurity II' },
  ];

  const [expandedCard, setExpandedCard] = useState(undefined);

  const handleCardExpand = (index: number) => {
    setExpandedCard(index);
  };

  const handleCardCollapse = () => {
    setExpandedCard(undefined);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-5xl xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-400 text-2xl">
        Relevant classes
      </h3>

      <h3 className="absolute top-36 uppercase tracking-wider text-gray-400 text-sm">
        Here are some of the undergraduate courses I've taken.
      </h3>

      <div className="flex flex-wrap gap-8">
        {cards.map((card, index) => (
          <div
            className={`w-48 sm:w-56 md:w-64 justify-center items-center transition-transform duration-1000 ease-out overflow-hidden ${
              expandedCard === index ? 'h-full' : 'h-40'
            }`}
            key={index}
            onMouseEnter={() => handleCardExpand(index)}
            onMouseLeave={handleCardCollapse}
          >
            <div className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 hover:bg-gray-300">
              {expandedCard === index ? (
                <span className="text-xl font-bold mb-2 text-black">{card.courseName}</span>
              ) : (
                <span className="text-xl font-bold mb-2 text-black">{card.courseClassname}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RelevantClasses;

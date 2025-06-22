import { useState, useEffect } from "react";

const ExperienceCard = ({ experience, index }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, 800 + (index * 200));
    
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`relative flex items-center mb-6 sm:mb-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline Dot */}
      <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full border-2 sm:border-4 border-gray-900 z-10 animate-pulse"></div>

      {/* Card */}
      <div className={`ml-10 sm:ml-12 md:ml-0 md:w-5/12 transition-all duration-700 transform ${
        isCardVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${isEven ? 'md:mr-auto md:pr-4 lg:pr-8' : 'md:ml-auto md:pl-4 lg:pl-8'}`}>
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/40 transition-all duration-300 group">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
            <span className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full w-fit ${
              experience.type === 'Full-time' ? 'bg-green-900/30 text-green-400 border border-green-700/30' :
              experience.type === 'Internship' ? 'bg-blue-900/30 text-blue-400 border border-blue-700/30' :
              experience.type === 'Leadership' ? 'bg-purple-900/30 text-purple-400 border border-purple-700/30' :
              'bg-orange-900/30 text-orange-400 border border-orange-700/30'
            }`}>
              {experience.type}
            </span>
            <span className="text-gray-400 text-xs sm:text-sm">{experience.period}</span>
          </div>
          
          <h3 className="text-white font-semibold text-base sm:text-lg mb-1 group-hover:text-blue-400 transition-colors duration-300">
            {experience.role}
          </h3>
          <p className="text-blue-400 font-medium mb-3 text-sm sm:text-base">{experience.company}</p>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{experience.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
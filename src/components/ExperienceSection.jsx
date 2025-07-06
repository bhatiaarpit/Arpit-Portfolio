import ExperienceCard from "./ExperienceCard";

const ExperienceSection = ({ experiences, isVisible }) => {
  return (
    <section className={`py-10 md:py-16 transition-all duration-1000 transform delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {/* Section Header */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Professional <span className="text-blue-500">Journey</span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed px-4">
          Explore my career progression, key achievements, and the valuable experiences that have shaped my professional growth
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 rounded-full shadow-lg shadow-blue-500/30"></div>
          
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 rounded-full"></div>

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id || index} 
                experience={experience} 
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 lg:mt-20">
        <p className="text-gray-400 mb-6 text-lg">
          Want to know more about my experience?
        </p>
        <a
          href="https://drive.google.com/file/d/1UaChAJQPNYH8Uh2dOKvdALgdLyxb22pf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ExperienceSection;
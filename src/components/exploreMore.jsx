import React, { useState } from 'react';
import { Github, ExternalLink, Code, Zap, Coffee, Palette, BookOpen, Trophy } from 'lucide-react';

const ExploreMore = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const exploreCards = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Open Source Contributions",
      description: "Contributions to popular repositories and community projects",
      link: "https://github.com/bhatiaarpit?tab=repositories&type=fork",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Experimental Projects",
      description: "Bleeding-edge experiments with new technologies and frameworks",
      link: "https://github.com/bhatiaarpit?tab=repositories&q=experimental",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Side Projects & Hacks",
      description: "Weekend builds, hackathon projects, and fun coding challenges",
      link: "https://github.com/bhatiaarpit?tab=repositories&q=hack",
      gradient: "from-pink-400 to-red-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Experiments",
      description: "Creative interfaces, animations, and design system explorations",
      link: "https://github.com/bhatiaarpit?tab=repositories&q=ui",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning Projects",
      description: "Code from tutorials, courses, and skill-building exercises",
      link: "https://github.com/bhatiaarpit?tab=repositories&q=learning",
      gradient: "from-indigo-400 to-cyan-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competition Entries",
      description: "Hackathon submissions, coding contests, and challenge solutions",
      link: "https://github.com/bhatiaarpit?tab=repositories&q=competition",
      gradient: "from-amber-400 to-yellow-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Repositories" },
    { number: "500+", label: "Commits This Year" },
    { number: "15+", label: "Languages Used" },
    { number: "25+", label: "Open Source Contributions" }
  ];

  return (
    <section
      id="explore"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Explore My Universe
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Beyond the main projects lies a galaxy of experiments, contributions, and creative explorations. 
            Each repository tells a story of learning, growth, and the endless pursuit of building something amazing.
          </p>
          
          {/* GitHub Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {exploreCards.map((card, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                hoveredCard === index ? 'shadow-2xl shadow-purple-500/20' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${card.gradient} mb-6 text-white`}>
                {card.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                {card.description}
              </p>
              
              {/* Link */}
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Explore <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/bhatiaarpit?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View All Repositories
            </a>
            <a
              href="https://github.com/bhatiaarpit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 font-semibold hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              Follow on GitHub
            </a>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            Always building, always learning, always sharing
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
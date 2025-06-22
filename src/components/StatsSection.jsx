const StatsSection = ({ isVisible }) => {
  const stats = [
    { number: "1+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
    { number: "15+", label: "Projects Delivered", color: "from-emerald-500 to-green-500" },
    { number: "24/7", label: "Learning Mode", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className={`transition-all duration-1000 transform delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="relative overflow-hidden rounded-xl p-4 sm:p-6 bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group-hover:scale-105">
              <div className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
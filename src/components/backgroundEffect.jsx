const BackgroundEffects = () => (
  <>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-700"></div>
    </div>
    
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-cyan-500/8 to-emerald-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-emerald-500/12 to-blue-500/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
    </div>
  </>
);

export default BackgroundEffects;
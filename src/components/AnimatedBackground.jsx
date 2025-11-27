const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
      
      {/* Geometric patterns */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/20 rounded-lg rotate-45 animate-float opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-secondary/20 rounded-lg -rotate-12 animate-float-delayed opacity-20"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
};

export default AnimatedBackground;

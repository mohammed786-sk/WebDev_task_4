export default function Hero() {
  return (
    <section id="home" className="section gradient-secondary">
      <div className="container-wrapper">
        <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center">
          {/* Avatar */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center text-white text-5xl font-bold shadow-lg hover:shadow-2xl transition-shadow">
              YS
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="mb-4 text-gradient">
              Welcome to My Portfolio
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold">
              Full Stack Web Developer | React Enthusiast | Problem Solver
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I craft beautiful and functional web applications that deliver exceptional user experiences. 
              Specializing in modern web technologies, I transform innovative ideas into reality with clean, scalable code.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center flex-wrap" style={{ animationDelay: '0.4s' }}>
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

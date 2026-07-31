export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include product catalog, shopping cart, and secure payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress in real-time.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather and forecasts. Built with React and integrated with a weather API for real-time data.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A social networking platform where users can create profiles, post content, and interact with other users. Features include messaging and notifications.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A blogging platform with Markdown support. Users can write, edit, and publish articles with SEO optimization and social sharing features.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A fitness tracking application that monitors workouts, calories, and health metrics. Includes data visualization and goal-setting features.',
      technologies: ['React', 'Chart.js', 'Local Storage'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section section-gray">
      <div className="container-wrapper">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Explore my recent work and technical achievements</p>
        </div>
        
        <div className="grid-auto-fit">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="card hover:shadow-2xl group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-400 to-purple-500 flex items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-black"></div>
                <span className="text-6xl font-bold text-white text-opacity-20 group-hover:text-opacity-30 transition-all">
                  {String(project.id).padStart(2, '0')}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[60px]">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium hover:bg-blue-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Link */}
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group/link"
                >
                  View Project 
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

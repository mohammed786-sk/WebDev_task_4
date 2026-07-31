export default function About() {
  const skills = [
    'HTML & CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Tailwind CSS',
    'Git & GitHub'
  ];

  return (
    <section id="about" className="section section-light">
      <div className="container-wrapper">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Discover my professional journey and expertise</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          {/* Bio Section */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate full-stack web developer with a strong foundation in computer science and a proven track record of delivering elegant solutions to complex problems. 
              With 2+ years of professional experience, I've collaborated with diverse teams on projects ranging from ambitious startups to established enterprises.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in web development began with curiosity about how things work on the internet, which has evolved into a career dedicated to creating user-centric, high-quality applications. 
              I'm committed to continuous learning and staying at the forefront of web technologies and best practices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I contribute to open-source projects, write technical blogs, and explore emerging frameworks to expand my skill set and help the community.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill} 
                  className="card bg-gradient-to-br from-blue-50 to-purple-50 p-4 border border-blue-200 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-gray-800 text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 md:p-12 rounded-xl border border-blue-200">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Education & Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <div className="flex items-center mb-2">
                <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <p className="font-bold text-lg text-gray-900">B.S. in Computer Science</p>
              </div>
              <p className="text-gray-600 font-medium mb-2">University Name</p>
              <p className="text-gray-700 text-sm">Graduated 2022 with focus on web development and software engineering principles</p>
            </div>

            {/* Experience */}
            <div className="border-l-4 border-purple-600 pl-6 py-2">
              <div className="flex items-center mb-2">
                <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                <p className="font-bold text-lg text-gray-900">Full Stack Web Developer</p>
              </div>
              <p className="text-gray-600 font-medium mb-2">Tech Company • 2022 - Present</p>
              <p className="text-gray-700 text-sm">Building modern web applications using React, Node.js, and MongoDB with focus on user experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

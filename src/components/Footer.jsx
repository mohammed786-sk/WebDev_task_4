export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Quick: ['Home', 'About', 'Projects', 'Contact'],
    Resources: ['Blog', 'GitHub', 'LinkedIn', 'Resume'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-wrapper section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                YS
              </div>
              <span className="text-xl font-bold text-white">Portfolio</span>
            </div>
            <p className="text-sm leading-relaxed">
              Crafting beautiful and functional web experiences with modern technologies and clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.Quick.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.Resources.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <p className="text-sm mb-4">Let's create something amazing together!</p>
            <a href="#contact" className="inline-block btn btn-primary text-sm">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
          <p>Designed and developed with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

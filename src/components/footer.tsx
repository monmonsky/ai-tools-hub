export default function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-purple-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent dark:from-purple-900/20 dark:to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                AI Tools Hub
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md">
              Empowering the future with AI. Discover, compare, and implement the most innovative artificial intelligence tools for your projects.
            </p>
            <div className="flex space-x-4 mt-6">
              {["Twitter", "GitHub", "LinkedIn", "Discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800/50 border border-gray-300 dark:border-purple-500/20 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-purple-500/20 hover:border-gray-400 dark:hover:border-purple-500/40 transition-all duration-300"
                >
                  <span className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors">
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["AI Tools", "Categories", "Compare", "Reviews", "Blog", "Pricing"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "API", "Help Center", "Community", "Status", "Changelog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 dark:border-purple-500/20 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Get the latest AI tools and insights delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-purple-500/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} AI Tools Hub. All rights reserved. Built with ❤️ for the AI community.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
    </footer>
  );
}
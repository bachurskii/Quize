const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-8 grid grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-3">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/quizzes"
                className="hover:text-gray-300 transition-colors"
              >
                Quizzes
              </a>
            </li>
            <li>
              <a
                href="/how-to-play"
                className="hover:text-gray-300 transition-colors"
              >
                How to Play
              </a>
            </li>
            <li>
              <a
                href="/leaderboard"
                className="hover:text-gray-300 transition-colors"
              >
                Leaderboard
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-3">Support</h2>
          <ul>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-300 transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-3">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/george-bachurskii-0915ab282"
              className="hover:text-gray-300 transition-colors"
            >
              Linkedin
            </a>
            <a
              href="https://instagram.com/bachurskii_n1"
              className="hover:text-gray-300 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://github.com/bachurskii"
              className="hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>© 2024 QuizMaster. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import "./style/reset.css";
import "./style/index.css";

function App() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to QuizMaster!</h1>
            <p className="py-6">
              Join us and test your knowledge with exciting and interactive
              quizzes! From general knowledge to specialized topics, QuizMaster
              offers something for everyone.
            </p>
            <button className="btn btn-primary">Start Playing</button>
            <img
              src="/hero.webp"
              alt="Quiz Time"
              className="mt-4 mx-auto w-full max-w-lg"
            />
          </div>
        </div>
      </div>

      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <img
                src="/icons/quiz-icon.png"
                alt="Quizzes"
                className="w-12 h-12 mx-auto"
              />
              <h2 className="text-lg font-bold mt-2">Diverse Topics</h2>
              <p>
                Choose from a wide range of topics, from history to science!
              </p>
            </div>
            <div>
              <img
                src="/icons/timer-icon.png"
                alt="Timer"
                className="w-12 h-12 mx-auto"
              />
              <h2 className="text-lg font-bold mt-2">Time Challenges</h2>
              <p>
                Test your abilities under pressure with our quick-paced quizzes.
              </p>
            </div>
            <div>
              <img
                src="/icons/community-icon.png"
                alt="Community"
                className="w-12 h-12 mx-auto"
              />
              <h2 className="text-lg font-bold mt-2">Community</h2>
              <p>
                Join a community of quiz lovers and share your achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8">
        <a href="/register" className="btn btn-lg btn-success">
          Register and Play Now
        </a>
      </div>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-6">
            What Our Users Say
          </h2>
          <p className="text-center max-w-3xl mx-auto">
            "I've never had so much fun learning! QuizMaster's quizzes are
            challenging and entertaining, perfect for anyone looking to test
            their knowledge!" - Jane Doe
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

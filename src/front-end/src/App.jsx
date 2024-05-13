import "./style/reset.css";
import "./style/index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };
  return (
    <div>
      <div className="hero mb-16 bg-base-200">
        <div className="hero-content text-center flex flex-col items-center justify-center mt-14">
          <div className="max-w-md ">
            <h1 className="text-5xl font-bold">Welcome to QuizMaster!</h1>
            <p className="py-6">
              Join us and test your knowledge with exciting and interactive
              quizzes! From general knowledge to specialized topics, QuizMaster
              offers something for everyone.
            </p>
            <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
              <Link to="/register"> Start Playing</Link>
            </button>
          </div>
          <div className=""></div>
        </div>
      </div>

      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <img
                width={400}
                height={300}
                src="quize1.webp"
                alt="Quizzes"
                className=" mx-auto rounded-full transition-transform duration-300 hover:scale-105"
              />
              <h2 className="text-lg font-bold mt-2">Diverse Topics</h2>
              <p>
                Choose from a wide range of topics, from history to science!
              </p>
            </div>
            <div>
              <img
                src="quize2.webp"
                width={400}
                height={300}
                alt="Timer"
                className=" mx-aut rounded-full transition-transform duration-300 hover:scale-105"
              />
              <h2 className="text-lg font-bold mt-2">Time Challenges</h2>
              <p>
                Test your abilities under pressure with our quick-paced quizzes.
              </p>
            </div>
            <div>
              <img
                src="quize3.webp"
                width={400}
                height={300}
                alt="Community"
                className=" mx-auto rounded-full transition-transform duration-300 hover:scale-105"
              />
              <h2 className="text-lg font-bold mt-2 ">Community</h2>
              <p>
                Join a community of quiz lovers and share your achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8">
        <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
          <Link to="/register" className="btn btn-lg btn-success">
            Register and Play Now
          </Link>
        </button>
      </div>
      <div className="bg-gray-100 py-8">
        <h2 className="text-center text-3xl font-bold mb-6">
          What Our Users Say
        </h2>
        <div className="container mx-auto px-4 flex flex-col ">
          <Slider {...settings}>
            <div>
              <img
                className="rounded-full m-auto mb-3"
                src="user1.jpg"
                width={100}
                height={100}
                alt="User Jane Doe"
              />
              <p className="text-center max-w-3xl mx-auto">
                "I've never had so much fun learning! QuizMaster's quizzes are
                challenging and entertaining, perfect for anyone looking to test
                their knowledge!" - Jane Doe
              </p>
            </div>
            <div>
              <img
                className="rounded-full m-auto mb-3"
                src="user2.jpg"
                width={100}
                height={100}
                alt="User Alex Turner"
              />
              <p className="text-center max-w-3xl mx-auto">
                "QuizMaster has completely changed the way I approach learning.
                The quizzes are not only informative but also incredibly
                engaging. It's a fantastic way to brush up on old knowledge and
                learn new facts!" - Alex Turner
              </p>
            </div>
            <div>
              <img
                className="rounded-full m-auto mb-3"
                src="user3.jpg"
                width={100}
                height={100}
                alt="User Maria Gonzalez"
              />
              <p className="text-center max-w-3xl mx-auto">
                "Every quiz on QuizMaster offers a unique challenge that keeps
                me coming back for more. The wide range of topics means there’s
                always something new to explore. Highly recommended for anyone
                who loves to learn through play!" - Maria Gonzalez
              </p>
            </div>
            <div>
              <img
                className="rounded-full m-auto mb-3"
                src="user4.jpg"
                width={100}
                height={100}
                alt="User Samuel Lee"
              />
              <p className="text-center max-w-3xl mx-auto">
                "The interactive format of QuizMaster makes it stand out from
                other quiz platforms. I’ve improved my trivia skills
                significantly since I started playing. It's fun, educational,
                and perfect for quiz lovers of all ages!" - Samuel Lee
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;

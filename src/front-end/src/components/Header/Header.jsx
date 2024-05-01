import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-blue-800 text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            className="rounded-xl mr-3"
            src="/logo.webp"
            alt="logo"
            width={50}
            height={50}
          />
          <span className="text-lg font-bold">QuizMaster</span>
        </Link>
        <nav className="flex gap-8 items-center text-sm uppercase font-semibold">
          <Link
            href="/quizzes"
            className="hover:text-gray-300 transition-colors"
          >
            Quizzes
          </Link>
          <Link
            href="/how-to-play"
            className="hover:text-gray-300 transition-colors"
          >
            How to Play
          </Link>
          <Link
            href="/profile"
            className="hover:text-gray-300 transition-colors"
          >
            Profile
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link
            to="/sign-in"
            className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

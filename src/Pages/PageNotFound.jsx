import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-gray-900 to-black text-gray-200">
      <h1 className="text-2xl font-semibold tracking-wide text-gray-300 animate-fade-in">
        Oops! Page Not Found
      </h1>
      <h1 className="text-[10rem] font-extrabold text-white drop-shadow-[0_4px_15px_rgba(206,132,207,0.8)]">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-300 max-w-md animate-fade-in">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;

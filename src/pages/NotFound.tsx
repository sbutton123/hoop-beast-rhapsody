import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-beast">
      <div className="text-center">
        <h1 className="font-bangers text-8xl text-white mb-4">404</h1>
        <p className="text-xl text-white/90 mb-8">Oops! This page went beast mode and disappeared!</p>
        <a 
          href="/" 
          className="btn-beast inline-flex items-center"
        >
          Return to Beast Mode
        </a>
      </div>
    </div>
  );
};

export default NotFound;

import React from "react";
import { HeartIcon } from '@heroicons/react/24/solid';
const Footer = () => {
  return (
    <>
      <footer className="text-center py-6">
      <p className="text-gray-300 text-sm">
        Made with{' '}
        <HeartIcon className="inline-block w-4 h-4 text-red-500 mx-1" /> by{' '}
        <a href="https://yourportfolio.com" className="text-red-500 hover:underline">
          Developer
        </a>
      </p>
    </footer>
    </>
  );
};

export default Footer;
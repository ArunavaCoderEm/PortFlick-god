import React from "react";
import { HeartIcon } from '@heroicons/react/24/solid';
const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-950 text-center py-6">
      <p className="text-gray-300 text-sm">
        Made with{' '}
        <HeartIcon className="inline-block w-4 h-4 text-purple-500 mx-1" /> by{' '}
        <a href="https://yourportfolio.com" className="text-purple-500 hover:underline">
          Priyanshu Dutta
        </a>
      </p>
    </footer>
    </>
  );
};

export default Footer;
import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#080808] text-center py-4 border-t border-gray-800 w-full  z-10">
        <p className="text-gray-300 text-sm">
          Made with{" "}
          <HeartIcon className="inline-block w-4 h-4 text-purple-500 mx-1" /> by{" "}
          <a href="" className="text-purple-500 hover:underline">
            Jugadu
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;

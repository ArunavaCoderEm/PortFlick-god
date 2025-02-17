import { navigation } from "@/data/data";
import { NavigationItem, SocialItem } from "@/types/types";
import React from "react";

const Footer = (): React.ReactNode => {
  return (
    <footer className="w-full bg-[#080808]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {navigation.main.map((item: NavigationItem) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-sm text-gray-300 hover:text-gray-500"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-5 flex justify-center space-x-6">
          {navigation.social.map((item: SocialItem) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {item.Icon && (
                <item.Icon className="h-5 w-5" aria-hidden="true" />
              )}
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-purple-500 font-bold">Jugadu</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

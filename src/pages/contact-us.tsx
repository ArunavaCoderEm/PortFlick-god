import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { contactDetails, contactOptions } from "@/data/data";

export default function ContactUs(): React.ReactNode {
  return (
    <div className="min-h-screen bg-[#000] text-gray-100">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-12 mt-20 hidden md:block">
            <div>
              <h2 className="text-4xl font-bold mb-8">Let's get in touch</h2>

              <div className="space-y-8">
                {contactDetails.map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <item.icon className="w-6 h-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400 mb-1">{item.description}</p>
                      {item.subtext && (
                        <p className="text-gray-400 whitespace-pre-line">
                          {item.subtext}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8">
            <div className="mb-8">
              <h2 className="text-5xl text-center font-bold mb-8">
                Contact Us
              </h2>
              <p className="text-gray-400">
                Tell us more about yourself and what you're got in mind.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium mb-2"
                >
                  Tell us a little about the project...
                </label>
                <textarea
                  id="project"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Your message..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  How can we help?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {contactOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        name="help"
                        value={option.id}
                        className="w-4 h-4 text-purple-500 border-gray-600 rounded focus:ring-purple-500"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-600 transition-colors"
              >
                Let's get started!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

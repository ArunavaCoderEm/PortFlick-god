import React from "react";
import { Palette, Camera, Code, Briefcase } from "lucide-react";
import { templates } from "@/data/data";

function TemplateChoose() {
  const handleTemplateClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen ">
      <div className="text-white py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Your Portfolio, Your Story
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our professionally designed portfolio templates to
            showcase your work and make a lasting impression
          </p>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group bg-gray-950 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden cursor-pointer border border-gray-700"
              onClick={() => handleTemplateClick(template.demoUrl)}
            >
              {/* Preview Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-300" />
                <div
                  className={`${template.bgColor} absolute top-4 right-4 p-2 rounded-full`}
                >
                  <div className="text-white">
                    <template.icon />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {template.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">{template.description}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="inline-block px-3 py-1 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                    Preview Template
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Every Template Includes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="text-purple-400 mb-4">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Responsive Design
              </h3>
              <p className="text-gray-400">
                Looks perfect on every screen size
              </p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="text-purple-400 mb-4">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Fast Performance
              </h3>
              <p className="text-gray-400">Optimized for quick loading times</p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="text-purple-400 mb-4">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Easy Customization
              </h3>
              <p className="text-gray-400">
                Simple to modify and make your own
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateChoose;

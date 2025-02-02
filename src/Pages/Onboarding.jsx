import React, { useState } from "react";
import NavBar from "./Components/Navbar";

export default function OnboardingPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      title: "Tell us more about yourself",
      subtitle: "Select an option to proceed",
      options: [
        {
          id: 1,
          title: "Option 1",
          description: "Description of option 1.",
          image: "https://placehold.co/600x400",
        },
        {
          id: 2,
          title: "Option 2",
          description: "Description of option 2.",
          image: "https://placehold.co/600x400",
        },
      ],
    },
    {
      id: 2,
      title: "Tell us more about yourself",
      subtitle: "Choose your preference",
      options: [
        {
          id: 3,
          title: "Option A",
          description: "Description of option A.",
          image: "https://placehold.co/600x400",
        },
        {
          id: 4,
          title: "Option B",
          description: "Description of option B.",
          image: "https://placehold.co/600x400",
        },
      ],
    },
    {
      id: 3,
      title: "Tell us more about yourself",
      subtitle: "Choose your preference",
      options: [
        {
          id: 3,
          title: "Option A",
          description: "Description of option A.",
          image: "https://placehold.co/600x400",
        },
        {
          id: 4,
          title: "Option B",
          description: "Description of option B.",
          image: "https://placehold.co/600x400",
        },
      ],
    },
    {
      id: 4,
      title: "Tell us more about yourself",
      subtitle: "Choose your preference",
      options: [
        {
          id: 3,
          title: "Option A",
          description: "Description of option A.",
          image: "https://placehold.co/600x400",
        },
        {
          id: 4,
          title: "Option B",
          description: "Description of option B.",
          image: "https://placehold.co/600x400",
        },
      ],
    },
  ];

  const totalQuestions = questions.length;

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-grow justify-center h-screen w-full bg-gradient-to-tl from-gray-900 to-[#080808]">
        <div className="p-8 pt-20 shadow-lg justify-center rounded-xl w-1/2 flex flex-col h-full">
          <div className="flex mb-6">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 mx-1 rounded-full transition-all ${
                  currentQuestion >= index ? "bg-violet-600" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <h1 className="text-4xl text-white font-bold mb-6 mt-[2rem]">
            {questions[currentQuestion].title}
          </h1>
          <h2 className="text-lg text-white font-semibold mb-4">
            {questions[currentQuestion].subtitle}
          </h2>

          <div className="flex-grow space-y-4 mb-6">
            {questions[currentQuestion].options.map((option) => (
              <div
                key={option.id}
                className={`p-6 border-2 rounded-lg cursor-pointer flex justify-between items-center ${
                  selectedOption === option.id
                    ? "bg-violet-100 border-violet-600"
                    : "border-gray-300"
                } hover:border-violet-600`}
                onClick={() => setSelectedOption(option.id)}
              >
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
                <img src={option.image} className="w-40 h-30 rounded-lg" />
              </div>
            ))}
          </div>

          <div className="mt-auto flex">
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="ml-6 px-4 py-2 bg-violet-600 text-white rounded-lg"
              onClick={handleNext}
            >
              {currentQuestion < totalQuestions - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>

        <div className="w-1/2 bg-gray-600 rounded-lg border m-8 flex items-center justify-center text-white text-2xl font-bold">
          Section for Image
        </div>
      </div>
    </div>
  );
}

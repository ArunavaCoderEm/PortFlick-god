import React from "react";
import { ArrowRightCircle, Book, Code2, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SparklesText } from "@/components/my-component/sparkle-text";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { BorderBeam } from "@/components/magicui/border-beam";

const Hero = (): React.ReactNode => {
  const { isSignedIn } = useUser();

  const navigate = useNavigate();

  const handleGetStarted = async () => {
    if (isSignedIn) {
      navigate("/dashboard");
    } else {
      await navigate("/login");
    }
  };

  return (
    <>
      <div className="py-4 barlow bg-[#000]">
        <div className="mt-20 flex flex-col items-center mx-auto px-4 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="absolute h-64 animate-pulse w-44 -left-32 blur-3xl opacity-50 bg-purple-500/40 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="absolute h-40 w-40 -right-24 animate-pulse top-52 blur-3xl opacity-50 bg-purple-500/40 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="shadow-inner shadow-[#CE84CF] w-52 items-center justify-center flex py-2 rounded-full mb-4"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className="font-medium">✨ Get Started</span>
              <ArrowRightCircle className="ml-1 w-4 transition-transform text-gray-600 duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 mb-6 leading-tight">
              <div className="flex justify-center items-center gap-x-3 gap-y-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <Code2 className="w-12 h-12 text-[#CE84CF]" />
                </motion.div>
                <span className="flex lg:flex-row flex-col items-center justify-center">
                  Craft Your Dream <SparklesText text={"\u00A0Portfolio"} />
                </span>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <Code2 className="w-12 h-12 text-[#CE84CF]" />
                </motion.div>
              </div>
              <div className="flex items-center justify-center flex-col gap-2">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 1 }}
                  className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#CE84CF] to-violet-500"
                >
                  In Minutes
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="text-3xl md:text-5xl font-bold text-white"
                >
                  .With Ease.
                </motion.span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="text-xl text-gray-400 max-w-2xl mt-5 mx-auto mb-8"
            >
              Create a stunning portfolio in minutes with our easy-to-use
              templates. No coding required – fill form, drag image, and
              showcase your talent!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex items-center justify-center gap-3"
            >
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-b from-[#CE84CF] to-violet-500 text-white px-8 py-3 rounded-lg font-bold flex gap-2 items-center hover:opacity-90 transition-all duration-200"
              >
                <UserCircle className="text-white w-6" />
                {isSignedIn ? "Dashboard" : "Sign In"}
              </button>
              <button className="border-[1px] border-white px-8 py-3 text-white font-bold rounded-lg hover:scale-95 flex items-center gap-2 transition-all duration-200">
                <Book className="w-6" />
                Docs
              </button>
            </motion.div>
            <div className="relative mt-4 md:mt-5 flex flex-col items-center justify-center w-full px-4 py-8">
              <div className="relative md:h-[400px] h-auto w-full md:w-[90%] flex-col items-center justify-center overflow-hidden rounded-lg">
                <span className="myrelative pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  <img
                    src="/images/pic.webp"
                    alt="Showcase"
                    className="myshadow relative z-10 w-full object-cover h-auto rounded-2xl"
                  />
                  <div className="shadow-overlay absolute inset-0"></div>
                </span>
                <BorderBeam size={250} duration={12} delay={9} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;

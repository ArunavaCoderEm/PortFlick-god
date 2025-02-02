import React, { useEffect } from "react";
import NavBar from "./Components/Navbar";
import { useNavigate } from "react-router-dom";
import BackgroundGrid from "./Components/BGGrid";
import { AnimatedShinyText } from "./Components/ShinyText";
import { SparklesText } from "./Components/Sparkle";
import { ArrowRightCircle, Book, Code2, UserCircle } from "lucide-react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import Features from "../Sections/features-section"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Home = () => {
  const navigate = useNavigate();
  const color = useMotionValue(COLORS_TOP[0]);
  const { isSignedIn } = useUser();

  const handleGetStarted = async () => {
    if (isSignedIn) {
      navigate("/dashboard");
    } else {
      await navigate("/login");
    }
  };

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // const backgroundImage = useMotionTemplate`radial-gradient(140% 140% at 50% 0%, #020617 50%, ${color})`;

  // const border = useMotionTemplate`1px solid ${color}`;
  // const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    // <div className="flex flex-col min-h-screen">
    // <NavBar/>
    // <motion.section
    //   style={{
    //     backgroundImage
    //   }}
    //   className="relative flex-grow grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    // >

    //   <div className="relative z-10 flex flex-col items-center">

    //     <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
    //       <StarIcon className="w-3 h-3 inline-block mr-2 mb-1 " />
    //       My3DShowcase
    //     </span>

    //     <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
    //       Design, Display, Dominate
    //     </h1>

    //     <motion.h1
    //       style={{
    //         color,
    //       }}
    //       className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight"
    //     >
    //       Your 3D Portfolio Awaits
    //     </motion.h1>
    //     <p className="my-6 max-w-xl text-center text-sm leading-relaxed md:text-xl md:leading-relaxed">
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
    //       distinctio eum impedit nihil ipsum modi.
    //     </p>

    //     <motion.button
    //       style={{
    //         border,
    //         boxShadow
    //       }}
    //       whileHover={{
    //         scale: 1.015,
    //       }}
    //       whileTap={{
    //         scale: 0.985,
    //       }}
    //       className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
    //       onClick={handleGetStarted}
    //     >
    //       {isSignedIn ? "Go To Dashboard" : "Get Started"}
    //       <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
    //     </motion.button>

    //   </div>

    //   <div className="absolute inset-0 z-0">
    //     <Canvas>
    //       <Stars radius={100} count={1500} factor={4} fade speed={3} />
    //     </Canvas>
    //   </div>

    //   {/* <Footer/> */}

    // </motion.section>

    // </div>
    <>
      <BackgroundGrid />
      <NavBar />
      <div className="min-h-screen py-4 barlow bg-[#080808] flex flex-col items-center noise-container">
        <div className="container mt-20 flex flex-col items-center mx-auto px-4 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="shadow-inner shadow-[#CE84CF] w-48 items-center justify-center flex py-2 rounded-full mb-4"
          >
            <AnimatedShinyText
              className={"text-sm flex items-center gap-2 font-normal"}
            >
              Get Started <ArrowRightCircle className="w-6" />
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
                  // style={{
                  //   color,
                  // }}
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
          </motion.div>
        </div>
        <Features />
      </div>
    </>
  );
};

export default Home;

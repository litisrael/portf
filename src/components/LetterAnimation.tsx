'use client'
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const App = () => {
  const textValue = "Israel Litvack";
  const rotateValue = Math.floor(Math.random() * 201) - 100;

  return (
    // <main className=" flex flex-col">
      <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <AnimatePresence>
          {textValue.split("").map((letter, index) => {
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 100, rotate: rotateValue }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{
                  opacity: 0,
                  y: 100,
                  transition: {
                    duration: 0.15,
                  },
                  rotate: rotateValue,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                  delay: index * 0.1,
                }}
                className={letter !== "\n" ? "inline-block mr-0.5" : "inline"}
              >
                {letter}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </div>
    // </main>
  );
};

export default App;

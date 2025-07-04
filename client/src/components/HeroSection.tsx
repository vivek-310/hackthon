import {AuroraBackground} from "@/components/ui/Aurora-Background";
import { motion } from "motion/react";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
            Replace Endless{" "}
            <motion.span
              animate={{
                y: [0, -20, 0],
                filter: ["blur(0px)", "blur(4px)", "blur(0px)"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="inline-block"
            >
              scrolling
            </motion.span>{" "}
            with purposeful{" "}
            <span className="bg-white text-black px-2">action</span>
          </div>
          <p className="font-light text-base md:text-2xl lg:text-xl text-center dark:text-white/90 text-black/90 py-5 max-w-3xl mx-auto leading-relaxed">
            Find what you love by browsing over{" "}
            <span className="font-medium">1000 unique interests</span> and
            topics. Then take action using our curated action plans. No app
            blocking or deleting required.
          </p>
          <Link href="/survey" className="text-white">
            <button className="bg-black dark:bg-white cursor-pointer rounded-full w-fit text-white dark:text-black px-6 py-2">
              Get Started
            </button>
          </Link>
        </motion.div>
      </AuroraBackground>
    </>
  );
}

export default HeroSection

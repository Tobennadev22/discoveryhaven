import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn } from "../components/ui/Motion";
import { Compass, ArrowRight } from "lucide-react";
import discoveryHavenLogo from "../assets/dh.png";

const WOBBLE_CHARS = "404".split("");

function WobbleChar({ char, delay }) {
  return (
    <motion.span
      className="inline-block"
      animate={{ y: [0, -18, 0], rotate: [0, -6, 6, 0] }}
      transition={{
        duration: 1.4,
        delay,
        repeat: Infinity,
        repeatDelay: 1.8,
        ease: "easeInOut",
      }}
    >
      {char}
    </motion.span>
  );
}

const SUGGESTIONS = [
  { label: "Go Back Home", href: "/", bg: "bg-aqua", text: "text-white" },
  {
    label: "Haven Academy",
    href: "/haven-academy",
    bg: "bg-yellow",
    text: "text-dark",
  },
  { label: "Explore", href: "/explore", bg: "bg-dark", text: "text-white" },
  { label: "About Us", href: "/about", bg: "bg-cream", text: "text-slate-900" },
];

const CLUES = [
  "The page you were looking for went on a field trip.",
  "It's not you — this page is just off investigating something.",
  "Our scholars are looking into it.",
  "Even detectives get lost sometimes.",
  "This page enrolled in the Curiosity Box and hasn't come back.",
];

export default function NotFound() {
  const [clue, setClue] = useState(CLUES[0]);

  useEffect(() => {
    setClue(CLUES[Math.floor(Math.random() * CLUES.length)]);
  }, []);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* minimal header */}
      {/* <header className="py-4 px-6 bg-white border-b border-gray-100">
        <Link to="/" className="inline-flex items-center gap-2">
          <img src={discoveryHavenLogo} alt="Discovery Haven" className="w-9 h-9" />
          <span className="font-cherry text-xl text-slate-900">Discovery Haven</span>
        </Link>
      </header> */}

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        {/* big bouncy 404 */}
        <motion.div
          className="font-cherry text-[10rem] sm:text-[14rem] leading-none text-aqua mb-2 select-none"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {WOBBLE_CHARS.map((c, i) => (
            <WobbleChar key={i} char={c} delay={i * 0.25} />
          ))}
        </motion.div>

        {/* spinning compass */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="mb-8"
        >
          <Compass size={48} className="text-aqua/50" />
        </motion.div>

        <motion.h1
          className="font-cherry text-3xl sm:text-4xl text-slate-900 mb-4 max-w-xl leading-tight"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          Hmm. This page doesn't seem to exist.
        </motion.h1>

        <motion.p
          className="font-body text-gray-500 text-lg mb-2 max-w-md"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
        >
          {clue}
        </motion.p>

        <motion.p
          className="font-body text-gray-400 text-sm mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.35 }}
        >
          (But there is plenty to discover just one click away.)
        </motion.p>

        {/* suggestion tiles */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl w-full"
          variants={stagger}
          initial="hidden"
          animate="show"
        ></motion.div>
      </div>
    </div>
  );
}

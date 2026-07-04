import { motion } from 'framer-motion'

const loop = (duration = 0.7) => ({
  repeat: Infinity,
  ease: 'easeInOut',
  duration,
})

export default function BouncingChild({ className = '', size = 180 }) {
  return (
    <div className={`inline-flex items-end justify-center ${className}`}>
      {/* ground shadow */}
      <div className="relative" style={{ width: size, height: size * 1.6 }}>
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-black/10"
          style={{ width: size * 0.45, height: size * 0.07 }}
          animate={{ scaleX: [1, 0.75, 1], opacity: [0.18, 0.08, 0.18] }}
          transition={loop(0.55)}
        />

        {/* whole character bounces */}
        <motion.svg
          viewBox="0 0 170 285"
          width={size}
          height={size * 1.6}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0"
          animate={{ y: [0, -18, 0] }}
          transition={loop(0.55)}
        >

          {/* ── SCHOOL BAG (behind body, drawn first) ── */}
          <motion.g
            style={{ transformOrigin: '54px 105px' }}
            animate={{ rotate: [-4, 4, -4] }}
            transition={loop(0.55)}
          >
            {/* bag body */}
            <rect x="24" y="90" width="40" height="54" rx="9" fill="#ffec00" />
            {/* bag top flap */}
            <rect x="24" y="90" width="40" height="20" rx="9" fill="#f0d800" />
            {/* front pocket */}
            <rect x="28" y="124" width="32" height="17" rx="5" fill="#f0d800" />
            {/* pocket zip pull */}
            <circle cx="44" cy="132" r="3" fill="#05c3dd" />
            {/* bag handle */}
            <path d="M35 90 Q44 80 53 90" stroke="#d4bc00" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* side seam detail */}
            <line x1="24" y1="110" x2="64" y2="110" stroke="#d4bc00" strokeWidth="1.5" opacity="0.6" />
          </motion.g>

          {/* bag straps (cross over shirt front) */}
          <path d="M30 100 Q60 94 72 105" stroke="#c8a800" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M58 100 Q74 88 84 98" stroke="#c8a800" strokeWidth="5" fill="none" strokeLinecap="round" />

          {/* ── LEFT ARM (swings forward) ── */}
          <motion.g
            style={{ transformOrigin: '62px 108px' }}
            animate={{ rotate: [22, -22, 22] }}
            transition={loop(0.55)}
          >
            <rect x="46" y="108" width="17" height="50" rx="8.5" fill="#C68642" />
            <circle cx="54.5" cy="162" r="9" fill="#C68642" />
          </motion.g>

          {/* ── RIGHT ARM (swings back) ── */}
          <motion.g
            style={{ transformOrigin: '108px 108px' }}
            animate={{ rotate: [-22, 22, -22] }}
            transition={loop(0.55)}
          >
            <rect x="107" y="108" width="17" height="50" rx="8.5" fill="#C68642" />
            <circle cx="115.5" cy="162" r="9" fill="#C68642" />
          </motion.g>

          {/* ── SHORTS ── */}
          <rect x="62" y="158" width="52" height="34" rx="11" fill="#1a1a1a" />
          <line x1="88" y1="158" x2="88" y2="192" stroke="#2a2a2a" strokeWidth="2" />

          {/* ── TORSO / SHIRT ── */}
          <rect x="60" y="98" width="56" height="66" rx="15" fill="#05c3dd" />
          {/* shirt collar V */}
          <path d="M75 98 L88 116 L101 98" fill="#04b5cb" />
          {/* shirt buttons */}
          <circle cx="88" cy="124" r="2.5" fill="#04b5cb" />
          <circle cx="88" cy="134" r="2.5" fill="#04b5cb" />
          <circle cx="88" cy="144" r="2.5" fill="#04b5cb" />

          {/* ── LEFT LEG (forward) ── */}
          <motion.g
            style={{ transformOrigin: '76px 192px' }}
            animate={{ rotate: [12, -12, 12] }}
            transition={loop(0.55)}
          >
            <rect x="66" y="192" width="20" height="58" rx="10" fill="#1a1a1a" />
            {/* left sock */}
            <rect x="66" y="236" width="20" height="10" rx="4" fill="#ffffff" />
            {/* left shoe */}
            <ellipse cx="76" cy="251" rx="17" ry="9" fill="#1a1a1a" />
            <ellipse cx="83" cy="248" rx="8" ry="6" fill="#2a2a2a" />
          </motion.g>

          {/* ── RIGHT LEG (back) ── */}
          <motion.g
            style={{ transformOrigin: '100px 192px' }}
            animate={{ rotate: [-12, 12, -12] }}
            transition={loop(0.55)}
          >
            <rect x="90" y="192" width="20" height="58" rx="10" fill="#1a1a1a" />
            {/* right sock */}
            <rect x="90" y="236" width="20" height="10" rx="4" fill="#ffffff" />
            {/* right shoe */}
            <ellipse cx="100" cy="251" rx="17" ry="9" fill="#1a1a1a" />
            <ellipse cx="107" cy="248" rx="8" ry="6" fill="#2a2a2a" />
          </motion.g>

          {/* ── NECK ── */}
          <rect x="80" y="85" width="18" height="18" rx="5" fill="#C68642" />

          {/* ── HEAD ── */}
          <ellipse cx="89" cy="55" rx="35" ry="38" fill="#C68642" />

          {/* ── HAIR ── */}
          {/* main hair mass */}
          <ellipse cx="89" cy="24" rx="35" ry="20" fill="#1a0a00" />
          {/* hair sides */}
          <ellipse cx="59" cy="46" rx="11" ry="22" fill="#1a0a00" />
          <ellipse cx="119" cy="46" rx="11" ry="22" fill="#1a0a00" />
          {/* hair curls top */}
          <circle cx="68" cy="28" r="9" fill="#1a0a00" />
          <circle cx="89" cy="20" r="11" fill="#1a0a00" />
          <circle cx="110" cy="28" r="9" fill="#1a0a00" />

          {/* ── FACE ── */}
          {/* whites of eyes */}
          <ellipse cx="78" cy="52" rx="8" ry="9" fill="white" />
          <ellipse cx="100" cy="52" rx="8" ry="9" fill="white" />
          {/* irises */}
          <circle cx="80" cy="54" r="5.5" fill="#1a0a00" />
          <circle cx="102" cy="54" r="5.5" fill="#1a0a00" />
          {/* eye shine */}
          <circle cx="82" cy="52" r="2" fill="white" />
          <circle cx="104" cy="52" r="2" fill="white" />
          {/* eyebrows - expressive arch */}
          <path d="M71 42 Q79 37 86 41" stroke="#1a0a00" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M94 41 Q101 37 109 42" stroke="#1a0a00" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* nose */}
          <ellipse cx="89" cy="63" rx="5" ry="4" fill="#B5732A" />
          {/* big happy smile */}
          <path d="M74 73 Q89 90 104 73" stroke="#8B4513" strokeWidth="3" fill="white" strokeLinecap="round" />
          {/* cheek blush */}
          <ellipse cx="65" cy="67" rx="10" ry="6" fill="#de2d10" opacity="0.18" />
          <ellipse cx="113" cy="67" rx="10" ry="6" fill="#de2d10" opacity="0.18" />

          {/* ── STAR sparkles (floating) ── */}
          <motion.g
            animate={{ y: [-4, -14, -4], opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
            transition={{ ...loop(1.1), delay: 0.2 }}
          >
            <text x="130" y="50" fontSize="14" fill="#ffec00">✦</text>
          </motion.g>
          <motion.g
            animate={{ y: [-4, -12, -4], opacity: [0, 1, 0], scale: [0.5, 0.9, 0.5] }}
            transition={{ ...loop(1.3), delay: 0.6 }}
          >
            <text x="30" y="65" fontSize="11" fill="#05c3dd">✦</text>
          </motion.g>
          <motion.g
            animate={{ y: [-4, -10, -4], opacity: [0, 1, 0] }}
            transition={{ ...loop(0.9), delay: 0.9 }}
          >
            <text x="142" y="80" fontSize="9" fill="#de2d10">★</text>
          </motion.g>

        </motion.svg>
      </div>
    </div>
  )
}

import { cn } from '../../lib/utils'

// Buttons are "stickers": an ink outline sitting on a solid ink edge that
// the button presses down into when clicked.
const variants = {
  primary: 'bg-aqua text-dark border-dark shadow-press hover:bg-[#2fd0e6]',
  yellow: 'bg-yellow text-dark border-dark shadow-press hover:bg-[#fff35c]',
  // For links on dark `cocoa` cards.
  ember: 'bg-ember text-dark border-dark shadow-press hover:bg-[#e0732f]',
  dark: 'bg-dark text-white border-dark shadow-[0_4px_0_0_#05c3dd] hover:bg-[#2b2b2b]',
  outline: 'bg-transparent text-white border-white shadow-press-light hover:bg-white hover:text-dark',
  'outline-dark': 'bg-white text-dark border-dark shadow-press hover:bg-cream',
  ghost: 'bg-transparent text-dark border-transparent shadow-none hover:bg-dark/5 active:translate-y-0',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-7 py-3.5 text-[1.0625rem]',
}

// `as` is accepted and dropped: some call sites pass it, but this always
// renders a <button>, and forwarding it would put an invalid attribute on it.
export function Button({ variant = 'primary', size = 'md', className, children, as: _as, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border-2 font-body font-extrabold leading-tight tracking-[0.01em] cursor-pointer select-none',
        'transition-[transform,box-shadow,background-color,color] duration-150 ease-out',
        'hover:-translate-y-px active:translate-y-1 active:shadow-none',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

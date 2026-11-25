import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

// Buttons are "stickers": an ink outline sitting on a solid ink edge that
// the button presses down into when clicked.
const variants = {
  primary: 'bg-aqua text-white border-dark shadow-press hover:bg-aquaDark',
  yellow: 'bg-yellow text-dark border-dark shadow-press hover:bg-[#ffd666]',
  // For links on dark `cocoa` cards.
  ember: 'bg-ember text-dark border-dark shadow-press hover:bg-[#ffc8ab]',
  dark: 'bg-dark text-white border-dark shadow-[0_4px_0_0_#6b2bd9] hover:bg-[#3b2450]',
  outline: 'bg-transparent text-white border-white shadow-press-light hover:bg-white hover:text-dark',
  'outline-dark': 'bg-white text-dark border-dark shadow-press hover:bg-cream',
  ghost: 'bg-transparent text-dark border-transparent shadow-none hover:bg-dark/5 active:translate-y-0',
}

const sizes = {
  sm: 'min-h-[44px] px-4 py-2 text-sm',
  md: 'min-h-[48px] px-6 py-3 text-base',
  lg: 'min-h-[52px] px-7 py-3.5 text-[1.0625rem]',
}

function buttonClasses(variant, size, className) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-full border-2 font-body font-extrabold leading-tight tracking-[0.01em] cursor-pointer select-none',
    'transition-[transform,box-shadow,background-color,color] duration-150 ease-out',
    'hover:-translate-y-px active:translate-y-1 active:shadow-none',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0',
    variants[variant],
    sizes[size],
    className
  )
}

// `as` is accepted and dropped: some call sites pass it, but this always
// renders a <button>, and forwarding it would put an invalid attribute on it.
export function Button({ variant = 'primary', size = 'md', className, children, as: _as, ...props }) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  )
}

// Same look as Button, but a real link: use it for navigation so it works
// with middle-click, right-click and screen readers' link lists. Outside
// URLs (Calendly, Systeme.io) and in-page anchors render a plain <a>.
export function ButtonLink({ to, variant = 'primary', size = 'md', className, children, ...props }) {
  const classes = buttonClasses(variant, size, className)
  // Any URL with a scheme (https:, mailto:, tel:) or an in-page anchor.
  if (/^[a-z][a-z0-9+.-]*:/i.test(to) || to.includes('#')) {
    return (
      <a href={to} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  )
}

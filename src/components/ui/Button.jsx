import { cn } from '../../lib/utils'

const variants = {
  primary: 'bg-aqua text-white hover:bg-opacity-90',
  yellow: 'bg-yellow text-dark hover:bg-opacity-90',
  dark: 'bg-dark text-white hover:bg-opacity-90',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-dark',
  'outline-dark': 'border-2 border-dark text-dark hover:bg-dark hover:text-white',
  ghost: 'text-dark hover:bg-gray-100',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-body font-700 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
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

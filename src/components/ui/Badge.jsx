import { cn } from '../../lib/utils'

export function Badge({ children, className, color = 'yellow' }) {
  const colors = {
    yellow: 'bg-yellow text-dark',
    aqua: 'bg-aqua text-dark',
    dark: 'bg-dark text-white',
    red: 'bg-crimson text-white',
  }
  return (
    <span className={cn('inline-block px-3.5 py-1 rounded-full text-sm font-extrabold font-body', colors[color], className)}>
      {children}
    </span>
  )
}

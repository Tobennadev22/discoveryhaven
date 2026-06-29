import { cn } from '../../lib/utils'

export function Badge({ children, className, color = 'yellow' }) {
  const colors = {
    yellow: 'bg-yellow text-dark',
    aqua: 'bg-aqua text-white',
    dark: 'bg-dark text-white',
    red: 'bg-crimson text-white',
  }
  return (
    <span className={cn('inline-block px-4 py-1.5 rounded-full text-sm font-bold font-body', colors[color], className)}>
      {children}
    </span>
  )
}

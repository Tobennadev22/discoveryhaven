import { cn } from '../../lib/utils'

export function Card({ children, className, ...props }) {
  return (
    <div className={cn('bg-white rounded-3xl border border-dark/10 overflow-hidden', className)} {...props}>
      {children}
    </div>
  )
}

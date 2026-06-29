import { cn } from '../../lib/utils'

export function Card({ children, className, ...props }) {
  return (
    <div className={cn('bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden', className)} {...props}>
      {children}
    </div>
  )
}

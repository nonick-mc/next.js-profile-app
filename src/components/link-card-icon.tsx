import * as React from 'react';
import { cn } from '@/lib/utils'

const LinkCardIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-10 h-10 rounded-xl flex items-center justify-center text-white',
      className
    )}
    {...props}
  >
    {children}
  </div>
));
LinkCardIcon.displayName = 'LinkCardIcon';

export { LinkCardIcon };
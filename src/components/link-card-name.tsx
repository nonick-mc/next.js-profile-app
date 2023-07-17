import * as React from 'react';
import { cn } from '@/lib/utils';

interface CardNameProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string,
  id: string,
}

const LinkCardName = React.forwardRef<
  HTMLDivElement,
  CardNameProps
>(({ className, children, name, id, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'grid',
      className
    )}
    {...props}
  >
    <p>{name}</p>
    <section className='flex gap-1 items-center'>
      <p className='text-muted-foreground text-sm'>{id}</p>
      {children}
    </section>
  </div>
));
LinkCardName.displayName = 'LinkCardIcon';

export { LinkCardName }
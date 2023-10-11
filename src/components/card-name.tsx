import * as React from 'react';
import { cn } from '@/lib/utils';

interface CardNameProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  id: string;
}

const CardName = React.forwardRef<HTMLDivElement, CardNameProps>(
  ({ className, children, name, id, ...props }, ref) => (
    <div ref={ref} className={cn('grid', className)} {...props}>
      <p>{name}</p>
      <section className='flex items-center gap-1'>
        <p className='text-sm text-muted-foreground'>{id}</p>
        {children}
      </section>
    </div>
  ),
);
CardName.displayName = 'CardIcon';

export { CardName };

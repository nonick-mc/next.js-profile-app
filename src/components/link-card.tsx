'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FADE_UP_ANIMATION_VARIANTS } from './animation';

interface LinkCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string,
  isGrid?: boolean,
}

const LinkCard = React.forwardRef<
  HTMLAnchorElement,
  LinkCardProps
>(({ className, children, href, isGrid }, ref) => (
  <motion.a
    ref={ref}
    className={cn(
      'rounded-xl border bg-card text-card-foreground shadow transition-colors',
      className,
      isGrid && 'grid gap-3',
    )}
    href={href}
    target='_blank'
    rel='noreferrer'
    variants={FADE_UP_ANIMATION_VARIANTS}
  >
    {children}
  </motion.a>
));
LinkCard.displayName = 'LinkCard';

export { LinkCard }
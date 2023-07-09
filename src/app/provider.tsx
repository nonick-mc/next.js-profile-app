'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode='wait'>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
        {children}
      </ThemeProvider>
    </AnimatePresence>
  )
}
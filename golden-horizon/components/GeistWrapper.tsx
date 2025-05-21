'use client'

import { GeistProvider, CssBaseline } from '@geist-ui/react'

export default function GeistWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GeistProvider>
      <CssBaseline />
      {children}
    </GeistProvider>
  )
}
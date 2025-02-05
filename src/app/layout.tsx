import { Toaster } from 'sonner'

import { Comfortaa } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-comfortaa',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased min-h-svh min-wvh bg-background text-black',
          comfortaa.className
        )}
      >
        {children}

        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}

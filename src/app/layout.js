import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Miss Elegance',
  description: 'Be the one to wear the crown of elegance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/* <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        /> */}
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

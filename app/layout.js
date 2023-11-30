

import './globals.css'
import { DataProvider } from './_context/DataContext'

export const metadata = {
  title: {
    template: '%s | vanesascode',
    default: "vanesascode portfolio & blog",
  },
  description: "Hello, I'm vanesascode. 👋 This is my portfolio as a Full Stack Developer.",
  applicationName: "vanesascode portfolio & blog",
  authors: [{ name: "vanesascode" }],
  generator: 'Next.js',
  keywords: ['vnesascode', 'code', 'web development', 'javascript', 'react', 'node.js', 'next.js', 'web dev', 'html', 'css', 'python', 'typescript', 'portfolio', 'blog', 'vanesa juarez paris', 'vanesa juarez'],
  referrer: 'origin-when-cross-origin',
  creator: 'Vanesa Juarez Paris',
  publisher: 'Vanesa Juarez Paris',
}

export default function RootLayout({ children }) {

  // const { lightMode } = useContext(DataContext);

  return (
    <DataProvider>
      <html lang="en" className='overflow-hidden'>
        <body>
          <main>{children}</main>
        </body>
      </html>
    </DataProvider>
  )
}

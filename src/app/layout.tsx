import '../app/globals.css';


export const metadata = {
  title: 'Dynamic form',
  description: 'a passenger dynamic form with next14 and zod and react hook form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

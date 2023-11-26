import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar/navbar.component';
import { Footer } from '@/components/footer/footer.component';

export const metadata: Metadata = {
  title: 'Car Sales',
  description: 'Created using Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

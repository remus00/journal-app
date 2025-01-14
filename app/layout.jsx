import { Footer } from '@/components/custom/footer';
import { Header } from '@/components/custom/header';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Reflct',
    description: 'A journaling app',
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} antialiased`}>
                    <Header />
                    <div className='fixed inset-0 -z-10 bg-[url("/bg.jpeg")] opacity-50' />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}

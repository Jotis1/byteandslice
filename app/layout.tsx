import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from './utils/cn';

import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Byte & Slice',
    description: 'URL shortener, free forever and unlimited, also open-source.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn([
                    `${geistSans.variable} ${geistMono.variable} antialiased text-zinc-50 font-normal`,
                    'bg-zinc-950',
                    'flex items-center justify-center gap-20 h-screen font-sans',
                    'bg-radial-[100%_100%_at_100%_0%] from-violet-950 to-zinc-950 to-75%'
                ])}
            >
                {children}
                <ToastContainer />
            </body>
        </html >
    );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from './utils/cn';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const title = 'Byte & Slice';
const description = 'URL shortener, free forever and unlimited, also open-source.';
const url = 'https://link.jotis.me';

export const metadata: Metadata = {
    title,
    description,
    authors: [{ name: 'Jotis', url: 'https://jotis.me' }],
    openGraph: {
        title,
        description,
        url,
        type: 'website',
        siteName: title,
        images: [
            {
                url: 'https://link.jotis.me/og-image.png',
                width: 1440,
                height: 1024,
                alt: 'Byte & Slice',
            },
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['https://link.jotis.me/og-image.png']
    }
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
                    'flex lg:flex-row flex-col items-center justify-center lg:gap-20 gap-5 lg:h-screen w-screen font-sans text-sm',
                    'bg-radial-[100%_100%_at_100%_0%] from-violet-950 to-zinc-950 to-75% bg-no-repeat'
                ])}
            >
                {children}
            </body>
        </html >
    );
}

'use client';

import { Button } from './components/button';


import { MoveDown, MoveUp, Link, Download, Loader, Copy, Check } from 'lucide-react';
import { Input } from './components/input';
import { Fragment, useEffect, useState } from 'react';
import { QRCode } from './components/qr';
import { uploadLink } from './utils/actions/upload-link';
import { z } from 'zod';

export default function Home() {

    const [outputLink, setOutputLink] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleGenerateLink = async () => {
        try {
            setLoading(true);
            const input = document.getElementById('input') as HTMLInputElement;
            const value = input.value;
            if (!value) return;
            z.string().url().parse(value);
            const res = await uploadLink(value);
            setOutputLink(`https://link.jotis.me/${res}`);
        } catch (error) {
            console.log(error);
            if (error instanceof z.ZodError) {
                setError('Invalid URL');
                return;
            }
            setError('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }
    }, [copied]);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    }, [error]);

    return (
        <Fragment>
            <main className="flex flex-col lg:items-start items-center max-w-md w-full gap-5 lg:py-0 py-10 px-10">
                <h1 className="lg:text-start text-center md:text-6xl text-5xl font-black uppercase">
                    <span className="text-violet-400 block"> Byte </span>
                    &Slice
                </h1>
                <section className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-2.5">
                        <label
                            htmlFor="input"
                            className="flex items-center gap-1.5 text-zinc-50"
                        >
                            <MoveDown className="text-rose-400 size-4" />
                            Add your link here
                        </label>
                        <Input
                            id="input"
                            placeholder={'https://linkedin.com/in/jotis-me'}
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label
                            htmlFor="output"
                            className="flex items-center gap-1.5 text-zinc-50"
                        >
                            <MoveUp className="text-emerald-400 size-4" />
                            Copy the output
                        </label>
                        <section className='flex items-center w-full gap-2.5'>
                            <Input
                                id="output"
                                readonly
                                value={outputLink}
                                placeholder={'https://link.jotis.me/linkedin'}
                            />
                            <Button
                                onClick={() => {
                                    setCopied(true);
                                    navigator.clipboard.writeText(outputLink);
                                }}
                                variant="secondary"
                                icon
                            >
                                {copied ? (
                                    <Check className="size-4" />
                                ) : (
                                    <Copy className="size-4" />
                                )}
                            </Button>
                        </section>
                    </div>
                </section>
                <section className="flex gap-5 mt-3.5 w-full">
                    <Button
                        onClick={handleGenerateLink}
                        variant="primary">
                        {loading ? (
                            <Loader className="size-4 animate-spin" />
                        ) : (
                            <Fragment>
                                Generate link
                                <Link className="size-4" />
                            </Fragment>
                        )}
                    </Button>
                </section>
                {error && (
                    <span className='absolute bottom-5 right-5 py-2.5 px-5 rounded-2xl bg-zinc-800 text-sm'>
                        <p>
                            Oh no, something went wrong!
                        </p>
                        <p className="text-red-400">
                            {error}
                        </p>
                    </span>
                )}
            </main>
            <aside className="flex flex-col gap-5 items-center ">
                <figure
                    className="size-80 bg-zinc-800/30 rounded-2xl flex items-center justify-center"
                >
                    <QRCode value={outputLink} />
                </figure>
                {outputLink && (
                    <Button variant="secondary" icon>
                        <Download className="size-4" />
                    </Button>
                )}
            </aside>
        </Fragment >
    );
}

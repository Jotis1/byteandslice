'use client';

import { Button } from './components/button';


import { MoveDown, MoveUp, QrCode, Link, Download } from 'lucide-react';
import { Input } from './components/input';
import { Fragment, useState } from 'react';
import { QRCode } from './components/qr';
import { uploadLink } from './utils/actions/upload-link';

export default function Home() {

    const [outputLink, setOutputLink] = useState('');

    const handleGenerateLink = async () => {
        const input = document.getElementById('input') as HTMLInputElement;
        const value = input.value;
        if (!value) return;
        const res = await uploadLink(value);
        setOutputLink(`https://link.jotis.me/${res}`);
    };

    const handleGenerateQR = () => {
        setOutputLink(mock.output);
    };

    return (
        <Fragment>
            <main className="flex flex-col max-w-md w-full gap-5">
                <h1 className="text-6xl font-black w-full uppercase">
                    <span className="text-violet-400 block"> Byte </span>
                    &Slice
                </h1>
                <section className="flex flex-col gap-5">
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
                        <Input
                            id="output"
                            readonly
                            value={outputLink}
                            placeholder={'https://link.jotis.me/linkedin'}
                        />
                    </div>
                </section>
                <section className="flex gap-5 mt-3.5">
                    <Button
                        onClick={handleGenerateLink}
                        variant="primary">
                        Generate link
                        <Link className="size-4" />
                    </Button>
                    <Button
                        onClick={handleGenerateQR}
                        variant="secondary">
                        Generate QR
                        <QrCode className="size-4" />
                    </Button>
                </section>
            </main>
            <aside className="flex flex-col gap-5 items-center">
                <figure
                    className="size-80 bg-zinc-800/30 rounded-2xl flex items-center justify-center"
                >
                    <QRCode value={outputLink} />
                </figure>
                <Button variant="secondary" icon>
                    <Download className="size-4" />
                </Button>
            </aside>
        </Fragment>
    );
}

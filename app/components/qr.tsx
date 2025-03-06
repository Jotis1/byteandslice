'use client';

import QRCodeStyling from 'qr-code-styling';
import { useEffect, useRef } from 'react';

interface Props {
    value: string;
}

export function QRCode({ value }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!ref.current) return;
        const qrCode = new QRCodeStyling({
            width: 320,
            height: 320,
            data: value,
            dotsOptions: {
                color: '#fafafa',
                type: 'extra-rounded',
            },
            cornersDotOptions: {
                color: '#fafafa',
                type: 'dot',
            },
            cornersSquareOptions: {
                color: '#fafafa',
                type: 'dot',
            },
            backgroundOptions: {
                color: 'transparent'
            },
            margin: 20,
        });
        // empty the div before appending the new qr code
        ref.current.innerHTML = '';
        qrCode.append(ref.current);
    }, [value]);

    return <figure ref={ref} />;
}
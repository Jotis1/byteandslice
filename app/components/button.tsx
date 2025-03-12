import { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface Props {
    variant: 'primary' | 'secondary';
    icon?: boolean;
    children: ReactNode;
    onClick?: () => void;
    loading?: boolean;
}

export function Button({ variant, icon, children, loading, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className={cn('h-10 rounded-2xl font-semibold flex items-center justify-center gap-2.5 text-sm',
                'cursor-pointer transition-all hover:-translate-y-0.5',
                variant === 'primary'
                    ? 'bg-violet-400 text-zinc-900 hover:bg-violet-500'
                    : 'bg-zinc-800 text-zinc-50 hover:bg-zinc-900',
                icon ? 'w-10 px-0' : 'w-full px-5',
            )}
            disabled={loading}
        >
            {children}
        </button>

    );
}
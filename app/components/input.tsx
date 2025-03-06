import { cn } from '../utils/cn';

interface Props {
    id: string;
    placeholder: string;
    readonly?: boolean;
    value?: string;
}

export function Input({ id, placeholder, readonly, value }: Props) {
    return (
        <input
            id={id}
            type="url"
            className={cn(
                'w-full h-10 px-5 rounded-2xl',
                'bg-zinc-800 placeholder:text-zinc-400 focus:outline-none',
            )}
            placeholder={placeholder}
            readOnly={readonly}
            value={value}
        />
    );
}
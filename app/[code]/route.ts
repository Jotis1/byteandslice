import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase/client';

function increaseCount(id: number, count: number) {
    return supabase
        .from('urls')
        .update({ clicks: count + 1 })
        .eq('id', id);
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
    try {
        const { code } = await params;

        const { data, error } = await supabase
            .from('urls')
            .select('id, original_url, clicks')
            .eq('short_code', code)
            .single();

        if (error || !data) {
            return NextResponse.redirect(new URL('/', req.nextUrl).toString());
        }

        await increaseCount(data.id, data.clicks);
        return NextResponse.redirect(data.original_url);
    } catch {
        return NextResponse.redirect(new URL('/', req.nextUrl).toString());
    }
}
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase/client';

function uploadStats(req: NextRequest, originalUrl: number) {
    const userAgent = req.headers.get('user-agent');
    const ip = req.headers.get('cf-connecting-ip') ||
        req.headers.get('x-real-ip') ||
        req.headers.get('x-forwarded-for') ||
        '';
    const now = new Date();

    return supabase
        .from('stats')
        .insert({
            original_url: originalUrl,
            user_agent: userAgent,
            ip_address: ip,
            created_at: now.toISOString(),
        });
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
    try {
        const { code } = await params;

        const { data, error } = await supabase
            .from('urls')
            .select('id, original_url')
            .eq('short_code', code)
            .single();

        if (error || !data) {
            return NextResponse.redirect(new URL('/', req.nextUrl).toString());
        }

        await uploadStats(req, data.id);

        return NextResponse.redirect(data.original_url);
    } catch {
        return NextResponse.redirect(new URL('/', req.nextUrl).toString());
    }
}
'use server';

import { supabase } from '../supabase/client';

function generateRandomString() {
    return Math.random().toString(36).substring(7);
}

export async function uploadLink(originalUrl: string) {
    const LOCAL_URL = process.env.NEXT_PUBLIC_LOCAL_URL || 'http://localhost:3000';

    // if the original link is a local link, throw an error
    if (originalUrl.startsWith(LOCAL_URL)) {
        throw new Error('Local links are not allowed.');
    }

    // check if the original link is valid and is not in use
    const { data: urlData, error: urlError } = await supabase
        .from('urls')
        .select('short_code')
        .eq('original_url', originalUrl);

    if (urlError) {
        throw urlError;
    }

    if (urlData?.length) {
        return urlData[0].short_code;
    }

    // generate a random character string
    const randomString = generateRandomString();

    // check if the random string is already in use
    const { data, error } = await supabase
        .from('urls')
        .select('id')
        .eq('short_code', randomString);

    if (error) {
        throw error;
    }

    if (data?.length) {
        return uploadLink(originalUrl);
    }

    // insert the original link and the random string in the database
    const { error: insertError } = await supabase
        .from('urls')
        .insert([{ original_url: originalUrl, short_code: randomString }]);

    if (insertError) {
        throw insertError;
    }

    return randomString;
}
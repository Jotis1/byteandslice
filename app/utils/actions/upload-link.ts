'use server';

import { z } from 'zod';
import { supabase } from '../supabase/client';

function generateRandomString() {
    return Math.random().toString(36).substring(7);
}

export async function uploadLink(originalUrl: string) {
    // check if the original link is valid and is not in use
    z.string().url().parse(originalUrl);

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
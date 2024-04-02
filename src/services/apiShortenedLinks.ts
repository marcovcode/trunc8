import { supabase } from "./supabase";

export async function getShortenedLinks() {
    const { data, error } = await supabase.from("shortened_links").select("*");
    if (error) throw new Error(error.message);
    return data;
}

export async function createShortenedLink(path: string, redirect: string) {
    const { error } = await supabase
        .from("shortened_links")
        .insert([{ path, redirect }])
        .select();

    if (error) throw new Error(error.message);
}

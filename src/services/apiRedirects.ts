import { supabase } from "./supabase";

export async function createRedirect(path: string, redirect: string) {
    const { error } = await supabase
        .from("redirects")
        .insert([{ path: path, redirect: redirect }])
        .select();

    if (error) throw new Error(error.message);
}

export async function getRedirects() {
    const { data, error } = await supabase.from("redirects").select("*");
    if (error) throw new Error(error.message);
    return data;
}

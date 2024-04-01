import { supabase } from "./supabase";

export async function createRedirect(path: string, redirect: string) {
    const { error } = await supabase
        .from("redirects")
        .insert([{ path: path, redirect: redirect }])
        .select();

    if (error) throw new Error(error.message);
}

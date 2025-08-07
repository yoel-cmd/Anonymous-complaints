import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPA_URL, process.env.SUPA_KEY);

export async function createComplaint(complaint) {
  const { data, error } = await supabase.from("complaint").insert(complaint);
  if (error) throw new Error(error.message);
  return data;
}

export async function getAllcomplaint() {
  const { data, error } = await supabase.from("complaint").select("*");
  if (error) throw new Error(error.message);
  return data;
}

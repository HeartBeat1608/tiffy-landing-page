import supabaseClient from "../supabase";

export const identifyUser = async (email: string) => {
  const { error, data } = await supabaseClient
    .from("users")
    .insert({ email, name: email })
    .select();

  if (error) {
    throw error;
  }
  return data;
};

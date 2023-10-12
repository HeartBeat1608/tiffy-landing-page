import appConfig from "@/lib/config";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  appConfig.supabase.url,
  appConfig.supabase.api_key
);

export default supabaseClient;

import { Database } from "supa";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";

export type SupabaseClient = SupabaseClient<Database>;

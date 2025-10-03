import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function addToWaitlist(email: string, source?: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([
      { 
        email, 
        source: source || 'landing_page',
        created_at: new Date().toISOString()
      }
    ])
    .select();

  if (error) {
    // Check if email already exists
    if (error.code === '23505') {
      throw new Error('Email already registered');
    }
    throw error;
  }

  return data;
}

export async function getWaitlistCount() {
  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true });

  if (error) throw error;
  return count || 0;
}
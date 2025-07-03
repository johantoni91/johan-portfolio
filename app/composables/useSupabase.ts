import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cyfdyvatdfzomxhrerqf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5ZmR5dmF0ZGZ6b214aHJlcnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMDgzNjksImV4cCI6MjA2Mjc4NDM2OX0.RLeZ6XcvDnua1o9JNYY-rqED8poAQO_YCPsxaYaN4Iw'
        
export const useSupabase = () => {
  return createClient(supabaseUrl, supabaseKey)
}

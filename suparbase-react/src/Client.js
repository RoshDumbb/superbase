import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(
  "https://coarnnfabmhngzlvnera.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvYXJubmZhYm1obmd6bHZuZXJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0NzQyODcsImV4cCI6MTk2OTA1MDI4N30.F5RmzblppTahPti6sbTgZfuQLJKpwATjp_eMxRae3rQ"
)
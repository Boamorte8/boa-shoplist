import { createClient } from '@supabase/supabase-js';

import {
	PUBLIC_SUPABASE_KEY,
	PUBLIC_SUPABASE_URL
} from '../constants/constants';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

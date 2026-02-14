const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: Missing Supabase environment variables.');
    console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'Set' : 'Missing');
    console.log('SUPABASE_SERVICE_ROLE_KEY:', supabaseKey ? 'Set' : 'Missing');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    console.log('Testing Supabase connection...');
    try {
        const { data, error } = await supabase.from('waitlist').select('*').limit(1);

        if (error) {
            console.error('Supabase connection failed:', error.message);
            if (error.code === 'PGRST204') {
                console.error('Note: This might be because the table "waitlist" does not exist.');
            }
        } else {
            console.log('Supabase connection successful!');
            console.log('Row count:', data.length);
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

testConnection();

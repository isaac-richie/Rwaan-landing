const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: Missing Supabase environment variables.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function exportWaitlist() {
    console.log('Fetching waitlist signups...');
    try {
        const { data, error } = await supabase
            .from('waitlist')
            .select('email, created_at')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching waitlist:', error.message);
            return;
        }

        console.log(`Found ${data.length} signups.`);

        const csvContent = [
            'email,created_at',
            ...data.map(row => `${row.email},${row.created_at}`)
        ].join('\n');

        const outputPath = path.resolve(process.cwd(), 'waitlist_export.csv');
        fs.writeFileSync(outputPath, csvContent);

        console.log(`Exported to ${outputPath}`);

        // Also log the first few for immediate verification
        if (data.length > 0) {
            console.log('\nLatest 5 signups:');
            data.slice(0, 5).forEach(row => console.log(`- ${row.email} (${new Date(row.created_at).toLocaleString()})`));
        }

    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

exportWaitlist();

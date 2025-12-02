// testDb.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:08-24RobynAnne@db.pxaafyrtkuxqtecjuvhe.supabase.co:5432/postgres',
  ssl: { rejectUnauthorized: false }, // needed for Supabase
});

async function main() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT now() as now');
    console.log('DB time:', rows[0].now);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch(err => {
  console.error('DB test failed:', err);
  process.exit(1);
});
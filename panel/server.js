// panel/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware buat JSON (Persiapan API nanti)
app.use(express.json());

// 1. SERVE STATIC FILES (Hasil Build React)
// Nanti React bakal di-build ke folder 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// 2. API ROUTES (COMING SOON)
// Nanti lu tambahin logic start bot disini, sekarang kosongan dulu
app.get('/api/status', (req, res) => {
    res.json({ status: 'alive', message: 'Panel React Ready!' });
});

// 3. CATCH-ALL ROUTE (Biar Refresh gak 404)
// Apapun url-nya, balikin ke index.html React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`>>> PANEL REACT JALAN DI PORT ${PORT} <<<`);
});

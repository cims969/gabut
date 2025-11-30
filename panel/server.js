const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>IMMORTAL PANEL</title>
        <style>
            body { background-color: #0d1117; color: #c9d1d9; font-family: monospace; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .container { text-align: center; border: 2px solid #30363d; padding: 40px; border-radius: 10px; background-color: #161b22; box-shadow: 0 0 20px rgba(0,255,0,0.2); }
            h1 { color: #238636; text-transform: uppercase; letter-spacing: 2px; }
            p { font-size: 1.2em; }
            .status { color: #58a6ff; font-weight: bold; border: 1px solid #58a6ff; padding: 5px 10px; border-radius: 5px; display: inline-block; margin-top: 10px;}
            .blink { animation: blinker 1.5s linear infinite; }
            @keyframes blinker { 50% { opacity: 0; } }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>💀 IMMORTAL PANEL V1 💀</h1>
            <p>Welcome, Master.</p>
            <p>Your "Heroku KW" is Running Perfectly.</p>
            <br>
            <div class="status">SYSTEM: ONLINE <span class="blink">●</span></div>
            <br><br>
            <small>Container ID: Node-Alpine | Port: 3000</small>
        </div>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`>>> PANEL NYALA DI PORT ${PORT} <<<`);
});

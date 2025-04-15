import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Handle __dirname 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to parse JSON
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes 
app.get("/api/add", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) return res.status(400).json({ error: "Invalid first number (num1)" });
    if (isNaN(num2)) return res.status(400).json({ error: "Invalid second number (num2)" });
    res.json({ result: num1 + num2 });
});

app.get("/api/substract", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) return res.status(400).json({ error: "Invalid first number (num1)" });
    if (isNaN(num2)) return res.status(400).json({ error: "Invalid second number (num2)" });
    res.json({ result: num1 - num2 });
});

app.get("/api/multiply", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) return res.status(400).json({ error: "Invalid first number (num1)" });
    if (isNaN(num2)) return res.status(400).json({ error: "Invalid second number (num2)" });
    res.json({ result: num1 * num2 });
});

app.get("/api/divide", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) return res.status(400).json({ error: "Invalid first number (num1)" });
    if (isNaN(num2)) return res.status(400).json({ error: "Invalid second number (num2)" });
    res.json({ result: num1 / num2 });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

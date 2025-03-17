var express = require("express")
const path = require('path');
var app = express()
var port = process.env.port || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Create a GET route for adding two numbers
// Usage example: http://localhost:3000/api/add?num1=5&num2=10)
app.get("/api/add", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Validate the numbers
    if (isNaN(num1)) {
        return res.status(400).json({ error: "Invalid first number (num1)" });
    } else if (isNaN(num2)) {
        return res.status(400).json({ error: "Invalid second number (num2)" });
    }

    const sum = num1 + num2;

    res.json({ result: sum });
});

// Create a GET route for substraction
// Usage example: http://localhost:3000/api/substract?num1=15&num2=10)
app.get("/api/substract", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Validate the numbers
    if (isNaN(num1)) {
        return res.status(400).json({ error: "Invalid first number (num1)" });
    } else if (isNaN(num2)) {
        return res.status(400).json({ error: "Invalid second number (num2)" });
    }

    const substract = num1 - num2;

    res.json({ result: substract });
});

// Create a GET route for multiplication
// Usage example: http://localhost:3000/api/multiply?num1=15&num2=10)
app.get("/api/multiply", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Validate the numbers
    if (isNaN(num1)) {
        return res.status(400).json({ error: "Invalid first number (num1)" });
    } else if (isNaN(num2)) {
        return res.status(400).json({ error: "Invalid second number (num2)" });
    }

    const multiplication = num1 * num2;

    res.json({ result: multiplication });
});

// Create a GET route for division
// Usage example: http://localhost:3000/api/divide?num1=15&num2=10)
app.get("/api/divide", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Validate the numbers
    if (isNaN(num1)) {
        return res.status(400).json({ error: "Invalid first number (num1)" });
    } else if (isNaN(num2)) {
        return res.status(400).json({ error: "Invalid second number (num2)" });
    }

    const division = num1 / num2;

    res.json({ result: division });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
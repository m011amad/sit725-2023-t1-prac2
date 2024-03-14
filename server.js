const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Please provide both numbers' });
    }

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    const sum = parsedNum1 + parsedNum2;

    res.json({ result: sum });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

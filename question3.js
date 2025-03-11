const express = require('express');
const app = express();
const port = 3000;

// Define a route for testing to see if it works
app.get('/test', (req, res) => {
    res.json({message : 'Express is working! Kris John S. Rodriguez'})
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello API');
});

module.exports = app;

// Fix here 👇
if (require.main === module) {
    app.listen(5000, () => {
        console.log("Server is running on port http://localhost:5000");
    });
}
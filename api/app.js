const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req,res) => {
    res.json('API is working!!');
});

//Start server
app.listen(PORT, () => {
    console.log('API is listening on PORT: ${PORT}');
});
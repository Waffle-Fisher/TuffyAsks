const express = require('express');
const app = express();

app.use('/', express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname});  
});

const port = 5000;
app.listen(port, () => {
    console.log(`Now Listening on port ${port}`);
});


const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Index.html'));
});

app.post('/api/submit', (req, res) => {
    console.log(req.body);
    res.send('success');
});

app.post('/new-route', (req, res) => {
    require('./routes')(app);
});

app.listen(3000, () => console.log('Server started on port 3000'));

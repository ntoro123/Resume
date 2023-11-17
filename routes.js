import path from 'path';

export default function routes(app) {
    app.get('/', (req, res) => {
        const indexPath = path.join(__dirname, 'Index.html');
        res.sendFile(indexPath);
    });

    app.post('/new-route', (req, res) => {
        // Handle the request and send a response
    });
}

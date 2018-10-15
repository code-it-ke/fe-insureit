const next = require('next');
const express = require('express');
const compression = require('compression');

const port = parseInt(process.env.PORT, 10) || 3030;
const host = process.env.HOST || '0.0.0.0';
const dev = process.env.NODE_ENV !== 'production';
const dir = process.env.NEXT_SRC || './src';

const app = next({ dir, dev });
const handle = app.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();

    server.use(compression());

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
        if(err) throw err;
        console.log(`> Running on http://${host}:${port}`)
    })
})
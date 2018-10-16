const next = require('next');
const express = require('express');
const compression = require('compression');
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 3030;
const host = process.env.HOST || '0.0.0.0';
const dev = process.env.NODE_ENV !== 'production';
const dir = process.env.NEXT_SRC || './src';

const app = next({ dir, dev });
const handle = app.getRequestHandler(app);

const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const i18n = require('./i18n');

// init i18next with serverside settings
// using i18next-express-middleware
i18n   
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init(
        {
            fallbackLang: 'en',
            preload: ['en', 'de'], // preload all languages
            ns: ['common', 'home', 'page2'], //need to preload all namespaces
            backend: {
                loadPath: path.join(__dirname, '/locales/{{lang}}/{{ns}}.json'),
                addPath: path.join(__dirname, '/locales/{{lang}}/{{ns}}.missing.json'),
            },
        },
        () => {
            // loaded translations we can bootstrap our routes
            app.prepare().then(() => {
                const server = express();
            
                server.use(compression());

                // enable middleware for i18next
                server.use(i18nextMiddleware.handle(i18n));

                // serve locales for client
                server.use('/locales', express.static(path.join(__dirname, 'locales')));

                // missing keys
                server.post('/locales/add/:lang/:ns', i18nextMiddleware.missingKeyHandler(i18n));

            
                server.get('*', (req, res) => handle(req, res));
            
                server.listen(port, err => {
                    if(err) throw err;
                    console.log(`> Running on http://${host}:${port}`)
                });
            });
        }
    );


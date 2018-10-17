export default (req, cookieName) => {
    const rc = req.get('cookie');
    const list = {};

    rc && rc.split(';').forEach(cookie => {
        const parts = cookie.split('=');

        if (parts[0].trim() === cookieName) {
            list[parts[0].trim()] = JSON.parse(decodeURIComponent(parts[1]));
        }
    });
    return list[cookieName];
};
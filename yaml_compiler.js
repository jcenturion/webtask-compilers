const yaml = require('js-yaml');

module.exports = (options, cb) => {
  return cb(null, (ctx, req, res) => {
    if (req.method !== 'GET') {
      res.writeHead(405);
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(yaml.load(options.script)));
  });
};

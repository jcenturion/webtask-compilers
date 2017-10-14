const marked = require('marked');

module.exports = (options, cb) => {
  return cb(null, (ctx, req, res) => {
    if (req.method !== 'GET') {
      res.writeHead(405);
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(marked(options.script));
  });
};

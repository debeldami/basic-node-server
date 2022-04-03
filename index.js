const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/friends') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(
      JSON.stringify({
        id: 123,
        name: 'ku',
      })
    );
  } else if (req.url === '/messages') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.write(`<html><body>
    <ul>
    <li>hi</li>
    <li>hello</li>
    </ul> 
    </body></html>`);
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => console.log(`listening at port ${PORT}`));
//server.close();

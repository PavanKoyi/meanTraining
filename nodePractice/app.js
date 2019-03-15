const http = require('http');
// const date = require('./moduleExample');
// const url = require('url');
const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // fs.readFile('example.html', function(err, data) {
  //   res.write(data);
  //   res.end();
  // });

  fs.appendFile('example1.html', '<html><body>KoyiPavanKumarChowdary</body></html>', function(err) {
    if (err) throw err;
    console.log('Saved.....!');
    res.write('Saved.....!');
    res.end();
  })

  // res.write('The time now is ' + date.myDateTime());
  // res.write(req.url);
  // var q = url.parse(req.url, true).query;
  // var txt = q.year + " " + q.month;
  // res.write(txt); 
  // res.end();
}).listen(8080);

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// console.log("Hey PavanKoyi");
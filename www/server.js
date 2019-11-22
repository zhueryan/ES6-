const http = require('http');
const fs = require('fs');

let server = http.createServer((request, res) => {
  let file_name = './www/' + request.url;

  console.log(file_name);
  fs.readFile(file_name, (err, data) => {
    if (err) {
      console.log(err);
      res.write('404');
    } else {
      res.write(data);
    }
    res.end();
  });
})
console.log('server start ...');
server.listen(8080);

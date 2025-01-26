const http = require("http");
const fs = require("fs");

// how to create server
// const myServer = http.createServer((req, res) => {
//     console.log(req.headers);
//     res.end('Hello from server');
// })

// we are tracking and manintaing the client req to the server in log.txt file
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) =>{
        switch (req.url) {
            case '/':
                res.end("This is home page");
                break;
            case '/about':
                res.end("This is about page");
                break;
            default:
                res.end("404 NOT FOUND")
      }
  })
 
});

myServer.listen(8000, () => console.log("Server is started!"))
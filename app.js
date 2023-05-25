import fs from "fs"; // Importing node package fs
import http from "http"; // Will host our URL

const port = 4000; // port where the server will be hosted

// *req is an object containing information about the HTTP request that raised the event.
// In response to req, you use res to send back the desired HTTP response.

// *The response.writeHead() (Added in v1..0) property is an inbuilt property of the ‘http’ module which sends a response header to the request.
// The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers.
// Optionally one can give a human-readable statusMessage as the second argument.
// */

//here we will create a server that will host our html files and grab file .fs
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./index.html", (err, data) => {
      //we then usw the fs.readme to grab our first cat in "index.html"
      if (err) throw err;
      res.write(data);
      res.end(); // here it will end the program.
      // If we dont find our URl we will recieve a error
    }); // with writehead we are allowing JS to grab our content with html
    // here we want node to let us know what Html file we are on using our url
  } // here we are required to use our "/" in our url in order to see our second cat

  //Here will do the same process with cat2

  if (req.url === "/api") {
    console.log(req.url);
    // create the server variable
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./cat2.html", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

//Here we are telling our server to be hosted on port 4000 in our local host
server.listen(port, (err) => {
  if (err) console.log("Error", err.message);
  console.log(`Listening on port ${port}`);
});

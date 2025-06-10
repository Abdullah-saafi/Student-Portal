
// const http = require("http");
// const localserv = http.createServer( (req,res) => {
//     console.log(req);
//     res.end('Hello Server End')
    
// }

// );
// localserv.listen(8000,()=> {console.log('Server Works perfectly');
// })



// try

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/login") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString(); // convert buffer to string
    });

    req.on("end", () => {
      const parsedData = JSON.parse(body);
      console.log("User Data from Frontend:", parsedData);

      // You can add validation here
      if (parsedData.email === "test@gmail.com" && parsedData.password === "Test@1234") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, message: "Login successful!" }));
      } else {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, message: "Invalid credentials" }));
      }
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(8003, () => {
  console.log("Server running on http://localhost:8000");
});

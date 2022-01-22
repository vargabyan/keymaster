const express = require("express")
const app = express()
const config = require("config")
const portHttp = config.get("portHttp")
const portHttps= config.get("portHttps")
const https = require("https")
const fs = require("fs")
const path = require("path")

const options = {
    // key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    // cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
}

if (process.env.NODE_ENV === "production" && !process.env.HTTPS) {
    
    app.use("/", express.static(path.join(path.parse(__dirname).dir, "client", "build")))
    app.get("*", (request, response)=>{
        response.sendFile(path.join(path.parse(__dirname).dir, "client", "build", "index.html"))
    })
} else if (process.env.NODE_ENV === "production" && process.env.HTTPS) {

    app.enable('trust proxy')
    app.use(function(request, response, next) {
  
      if (!request.secure) {
        return response.redirect("https://" + request.headers.host + request.url);
      }
  
      next();
    })
}


if (process.env.HTTPS) {
    
    https.createServer(options, app).listen(portHttps, ()=>{console.log(`Example app listening at http://localhost:${portHttps}`)})
} else {
    
    app.listen(portHttp, ()=>{console.log(`Example app listening at http://localhost:${portHttp}`)})
}

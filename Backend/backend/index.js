var http = require("http");

const app = require("./src/app.js");

const PORT= process.env.port || 4000;
const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
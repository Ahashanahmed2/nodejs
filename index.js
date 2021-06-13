//dependencies
const http = require('http');
const {handleReqres} =require('./helpers/handleReqRes');



//app object - module scaffolding
const app = {};

//configaration
app.config ={
    port:3000
};

//create server
app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listening to port ${app.config.port}`);
    })
}

//handle Request Response
app.handleReqRes= handleReqres;

app.createServer()
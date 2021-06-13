//dependences
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes =require('../routes');
const {notFoundHandler} = require('../handlars/routesHandlers/notFoundHandler');


//module scaffolding
const handler ={};

handler.handleReqres =(req,res)=>{
    //request handling
    //get the url and parse it
    const parsedUrl =url.parse(req.url,true);
   const path = parsedUrl.pathname;
   const trimmedPath = path.replace(/^\/+|\/+$/g, '');
   const method = req.method.toLowerCase();
   const queryStringObject = parsedUrl.query;
   const headersObject =req.headers;
   const requestProperties={
       parsedUrl,
       path,
       trimmedPath,
       method,
       queryStringObject,
       headersObject,
   }
   

   const chosenHandler = routes[trimmedPath]?routes[trimmedPath]:notFoundHandler;
  chosenHandler(requestProperties,(statusCode,payload)=>{
      statusCode =typeof(statusCode)==='number' ? statusCode:500;
      payload =typeof(payload)==='object'? payload:{};
      const payloadString =JSON.stringify(payload);
      const decoder = new StringDecoder('utf-8');
      //return the final response
      res.writeHead(statusCode);
      res.end(payloadString)

  })
  
//    let realData = '';
// req.on('data',(buffer)=>{
//     realData+= decoder.write(buffer);

// });
// req.on('end',()=>{
//     realData+=decoder.end();
//     console.log(realData);
//     res.end('hello world programmer ff');
// });


    //response handle
    
};


module.exports =handler;
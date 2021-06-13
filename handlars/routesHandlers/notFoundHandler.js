//dependences


//module scaffolding
const handler ={};

handler.notFoundHandler =(requestProperties,callback)=>{
    callback(404,{
        message:'your request message not found',
    })
    console.log('not Found Handler');
};

module.exports=handler;
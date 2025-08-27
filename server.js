const server=require("http")
server.createServer((req,res)=>{
  //res.write("this is my first server")
  //res.end("")
}).listen(4000,()=>{
  console.log("this is my first server")
})
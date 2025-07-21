//Creating My first Node js server

 // ye hame batata hai ke ham apne project me fs module ko use krenge
const fs = require('fs');
const http = require('https')

// ye hamara server ban gya hai ye ab hame requset aur response ko batayega k hame kya request aa rhi 
const server = http.createServer((req,res)=>{
    console.log(req);// ye aayi request ko print krega
})

const PORT = 3001;


//Now esase hamara server 24 ghante active rhega koi bhi request listen krne k liye 
server.listen(PORT,()=>{
    console.log(`Server is strten on PORT NO. ${PORT}`);
})
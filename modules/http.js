import { creatServer } from 'http';
const server=creatServer((req,res)=>{

    res.end('Hi')
    

});
server.listen(5000);


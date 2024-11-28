import fs from "fs";
import fsPromises from "fs/promises";

fs.readFile("./data.txt","utf8",(error,data)=>{
    if(error) throw error;
    console.log(data);
});

fs.writeFile('asycfile.txt',"Hi this is asyc i added text",()=>{});

// async/await which is used for the call back hell removed

async function readMyfile(){
    const data= await fsPromises.readFile("asycfile.txt","utf8");
    console.log(data);
   
   }

readMyfile();
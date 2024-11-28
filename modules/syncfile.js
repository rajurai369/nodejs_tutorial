// import fs, { appendFileSync, rmSync } from 'fs';
// // read file from sync
// const data=fs.readFileSync("./data.txt","utf8");
// console.log(data);

// // write file from sync
// const newFile=fs.writeFileSync("./newfile.txt","write in new file");
// console.log(newFile);



// // delete file from sync

// const removeFile=rmSync("./newfile.txt");
// console.log(removeFile);


// // append file from sync
// const addFile=appendFileSync("data.txt","Hi i added");
// console.log(addFile);
// us of promises not from the call back alternative of call back hell
import { error } from "console";
import fs from "fs/promises";

// fs.readFile("asynfile.js","utf8").then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });

// async/await which is used for the call back hell removed

async function readMyfile(){
 const data=fs.readFile("asynfile.js","utf8");
 console.log(data);

}


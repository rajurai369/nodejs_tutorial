import path from 'path';

const filePath="./path1/path2/path3/file.pdf";
// based name
const fileName=path.basename(filePath);
console.log(fileName);

// extension

const extension=path.extname(filePath);
console.log(extension);

// Directory

const pathFile=path.dirname(filePath);
console.log(pathFile);

// join 

const newPath=path.join(pathFile,"Raju");
console.log(newPath);



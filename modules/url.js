import url from "url";
// concept-2
const userURL=new URL('https://www.w3schools.com/nodejs/nodejs_intro.asp');
console.log(userURL);
// concept-2
const myURL=new URL('/path',"https://facebook.com");
myURL.searchParams.append('name','Raju');
console.log(myURL.toString());

//concept-3
const myUrl = new URL('https://example.com?name=Raju&age=25');

console.log(myURL.searchParams.get('name'));
console.log(myURL.searchParams.has('age'));
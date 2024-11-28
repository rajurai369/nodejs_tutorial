import { error } from 'console';
import fs from 'fs';

fs.readFile("../data/users.json","utf8",(error,users)=>{
    if(error){
        console.log(error);
    return;
    }
    const parsedUsers=JSON.parse(users);
    console.log(parsedUsers);


    fs.readFile("../data/posts.json","utf8",(posterror,posts)=>{
        if(posterror){
            console.log(posterror);
        }

        const parsedPosts=JSON.parse(posts);
        console.log(parsedPosts);

     const result=parsedUsers.map((user) => {
            return {
                ...user,
                posts:parsedPosts.filter((post) =>post.userId == user.id ),
            }

        });

        console.log(result);


    });


    
});
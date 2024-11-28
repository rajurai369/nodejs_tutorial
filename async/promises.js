import fsPromises from 'fs/promises';

fsPromises.readFile('../data/users.json', 'utf8').then((users) => {
    const usersParsed = JSON.parse(users);
    // console.log(users);

    fsPromises.readFile("../data/posts.json", "utf8").then((posts) => {
       const   postsParsed = JSON.parse(posts);

          const result=  usersParsed.map((user) => {
            return {
                ...user,
                posts: postsParsed.filter((post) => post.userId == user.id),
            };


        });
        console.log(result);


        // console.log(posts);
    }).catch((error) => {
        console.log(error);
    });
})
    .catch((error) => {

        console.log(error);

        return;

    })
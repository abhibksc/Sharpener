// ************Promises*******************

console.log(`Person1 shows ticket`);
console.log(`person2 shows ticket`);

const promiseWifeBringingTicket = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(`ticket`);
    },3000)
});

const getPopcorn = promiseWifeBringingTicket.then((ticket)=>{
    console.log(`wife: i have the tics`);
    console.log(`husband: we should go in`)
    console.log(`wife: no i am hungry`);
    return new Promise((resolve,reject)=> resolve(`${ticket} popcorn`))
})

// getPopcorn.then((ticket)=>{
//     console.log(ticket)
// })

// Now she want butter;

const getbutter = getPopcorn.then((ticket)=>{
    console.log(`husband: i got some popcorn`);
    console.log(`husband : we should go in`);
    console.log(`wife : I need butter on my popcorn`);
        return new Promise((resolve, reject) => {
            resolve(`${ticket} butter`)
        })
    })
    getbutter.then((ticket)=>{
        console.log(ticket);
    })
console.log(`person4 shows ticket`);
console.log(`person5 shows ticket`);


// ***********By async/await *************


console.log(`Person1 shows ticket`);
console.log(`person2 shows ticket`);

const preMovie = async ()=>{

    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000);
    })

    const popcorn = new Promise((resolve,reject)=>{
        resolve('popcorn');
    });

    const butter = new Promise((resolve,reject) => {
        resolve('butter');
    });

    const getColdDrinks = new Promise((resolve,reject)=>{
        resolve('ColdDrink');
    });

    let ticket = await promiseWifeBringingTickets;

    console.log(`wife: i have the tics ${ticket}`);
    console.log(`husband: we should go in`);
    console.log(`wife: no i am hungry`);

    let popcorns = await popcorn;
    console.log(`husband: i got some popcorn ${popcorns}`);
    console.log(`husband : we should go in`);
    console.log(`wife : I need butter on my popcorn`);

    let butters = await butter;

    console.log(`husband : take ${butters} Now we should go in`);
    console.log(`wife: can you bring coldDrink for me?`);

    let coldDrink = await getColdDrinks;
    console.log(`take ${coldDrink} lets go`);

    return ticket;
}

preMovie().then((ticket) => {
    console.log(`person3 ${ticket}`);
})


console.log(`Person4 shows ticket`);
console.log(`person5 shows ticket`);



const createPosts = async (post) => {
    try {
         await new Promise((resolve) => {
            setTimeout(() => {
                userObj.posts.push(post);
                resolve(post);
            }, 1000);
        });

        return post;
    } catch (error) {
        throw error;
    }
}


const delposts = async () => {

    try {
        const delposts = await new Promise((resolve, reject) => {

            setTimeout(() => {

                if (userObj.posts.length > 0) {

                    const delepost = userObj.posts.pop();

                    resolve(delepost);

                }

                else {

                    reject("NO Post To Delete");

                }

            }, 1000)

        });


        return delposts;

    }
    catch (error) {
        throw error;
    }
}



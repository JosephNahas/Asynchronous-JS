//Three asynchronous functions to simulate data fetching for user profiles, posts, and comments.

function fetchUserProfile(time){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve("User Profile fetched")
        }, time);
    })
}

function fetchUserPosts(time){
    return new Promise ((resolve,reject)=>{
       setTimeout(() => {
            resolve("User Posts fetched")
        }, time);
    })
}

function fetchUserComments(time){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve("User Comments fetched")
        }, time);
    })
}

// Fetch the data in sequential flow
let sequentialStartTime = Date.now();// keep track of start time
fetchUserProfile(1000).then(result => {
    console.log(result + ` using sequential flow in ${Date.now() - sequentialStartTime} milliseconds` );
    return fetchUserPosts(1000);
  }).then(result => {
    console.log(result + ` using sequential flow in ${Date.now() - sequentialStartTime} milliseconds` );
    return fetchUserComments(1000);
  }).then(result => {
    console.log(result + ` using sequential flow in ${Date.now() - sequentialStartTime} milliseconds` );
  });

//Fetch the data in parallel
let parallelStartTime = Date.now();// keep track of start time
Promise.all([fetchUserProfile(1000),fetchUserPosts(1000),fetchUserComments(1000)]).then((result)=>{
    console.log(`all data fetched using parallel flow in ${Date.now() - parallelStartTime} milliseconds`, result);
})

//Refactoring using async/await. Define an RNG number from 0 to 100, simulating random failure of fetching data from server
async function fetchUserProfileAsync(time) {
    let p1 = new Promise ((resolve,reject)=>{
        let rng = Math.floor(Math.random() * 101);
        if (rng >= 50){
            setTimeout(() => {
                resolve("User Profile fetched")
            }, time);
        } else{
            reject('Failed to fetch user profile!')
        }
    })
    
    try{
        const result = await p1;
        console.log(result, '(Async/Await)');
    } catch (error){
        console.log(error, '(Async/Await)');
    }
}

async function fetchUserPostsAsync(time) {
    let p1 = new Promise ((resolve,reject)=>{
        let rng = Math.floor(Math.random() * 101);
        if (rng >= 50){
            setTimeout(() => {
                resolve("User Posts fetched")
            }, time);
        } else{
            reject('Failed to fetch user posts!')
        }
    })
    
    try{
        const result = await p1;
        console.log(result, '(Async/Await)');
    } catch (error){
        console.log(error, '(Async/Await)');
    }
}

async function fetchUserCommentsAsync(time) {
    let p1 = new Promise ((resolve,reject)=>{
        let rng = Math.floor(Math.random() * 101);
        if (rng >= 50){
            setTimeout(() => {
                resolve("User Comments fetched")
            }, time);
        } else{
            reject('Failed to fetch user comments!')
        }
    })
    
    try{
        const result = await p1;
        console.log(result, '(Async/Await)');
    } catch (error){
        console.log(error, '(Async/Await)');
    }
}

//Primary function that fetches all the data in sequence and logs it step-by-step, , awaiting each result and logging a message
function getUserContent(){
    fetchUserProfileAsync(1000);
    fetchUserPostsAsync(1000);
    fetchUserCommentsAsync(1000);
}

getUserContent();



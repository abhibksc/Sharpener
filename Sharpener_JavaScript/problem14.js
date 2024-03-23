const userObj  = {



    lastActivityTime : null,
    
    posts : []
    
    }
    
    
    
    
    
    function updateLastUserActivityTime(){
    
    return new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
    
    const date = new Date();
    
    userObj.lastActivityTime = date;
    
    resolve(userObj.lastActivityTime);
    
    },1000)
    
    })
    
    };
    
    
    
    
    
    function createPost(post){
    
    return new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
    
    userObj.posts.push(post);
    
    resolve(post);
    
    },1000)
    
    })
    
    }
    
    
    
    function deletePost(){
    
    return new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
    
    if(userObj.posts.length>0){
    
    const delepost = userObj.posts.pop();
    
    resolve(delepost);
    
    }
    
    else{
    
    reject("NO Post To Delete");
    
    }
    
    },1000)
    
    })
    
    }
    
    
    
    function consolelog(post, lastActivityTime){
    
    console.log(`post ${post}, LastActivityTime ${lastActivityTime}`)
    
    }
    
    
    
    
    
    createPost("First").then((post) =>{
    
    updateLastUserActivityTime().then((updatedTime)=>{
    
    consolelog(post,updatedTime);
    
    return deletePost();
    
    }).then((deletedpost) =>{
    
    console.log(`deleted post ${deletedpost}`)
    
    console.log(`Remaining post ${userObj.posts}`)
    
    }).catch((error)=>{
    
    console.log(	`Error ${error}`);
    
    })
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
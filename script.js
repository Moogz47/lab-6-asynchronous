function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchUserProfile(userId) {
    return new Promise(async (resolve, reject) => {
        await delay(2000);
        const users = {
            1: { id: 1, name: "John Doe", age: 28 },
            2: { id: 2, name: "Jane Smith", age: 47 }
        };
        if (users[userId]) {
            resolve(users[userId]);
        } else {
            reject("User not found");
        }
    });
}

function fetchUserPosts(userId) {
    return new Promise(async (resolve, reject) => {
        await delay(1500);
        const posts = {
            1: ["Post 1 by John", "Post 2 by John"],
            2: ["Post 1 by Jane", "Post 2 by Jane"]
        };
        if (posts[userId]) {
            resolve(posts[userId]);
        } else {
            reject("Posts not found");
        }
    });
}

function fetchUserComments(userId) {
    return new Promise(async (resolve, reject) => {
        await delay(1000);
        const comments = {
            1: ["Comment 1 on John's post", "Comment 2 on John's post"],
            2: ["Comment 1 on Jane's post", "Comment 2 on Jane's post"]
        };
        if (comments[userId]) {
            resolve(comments[userId]);
        } else {
            reject("Comments not found");
        }
    });
}

function fetchAllUserData(userId) {
    console.log("Fetching data...");

    fetchUserProfile(userId)
        .then(profile => {
            console.log("User Profile:", profile);
            return fetchUserPosts(userId);
        })
        .then(posts => {
            console.log("User Posts:", posts);
            return fetchUserComments(userId);
        })
        .then(comments => {
            console.log("User Comments:", comments);
        })
        .catch(error => {
            console.error(error);
        });
}
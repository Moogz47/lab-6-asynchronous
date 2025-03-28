function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUserProfile(userId) {
    try {
        await delay(2000);
        const users = {
            1: { id: 1, name: "John Doe", age: 28 },
            2: { id: 2, name: "Jane Smith", age: 47 }
        };
        if (users[userId]) {
            return users[userId];
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        throw new Error("Error fetching user profile: " + error.message);
    }
}



async function fetchUserPosts(userId) {
    try {
        await delay(1500);
        const posts = {
            1: ["Post 1 by John", "Post 2 by John"],
            2: ["Post 1 by Jane", "Post 2 by Jane"]
        };
        if (posts[userId]) {
            return posts[userId];
        } else {
            throw new Error("Posts not found");
        }
    } catch (error) {
        throw new Error("Error fetching posts: " + error.message);
    }
}




async function fetchUserComments(userId) {
    try {
        await delay(1000);
        const comments = {
            1: ["Comment 1 on John's post", "Comment 2 on John's post"],
            2: ["Comment 1 on Jane's post", "Comment 2 on Jane's post"]
        };
        if (comments[userId]) {
            return comments[userId];
        } else {
            throw new Error("Comments not found");
        }
    } catch (error) {
        throw new Error("Error fetching comments: " + error.message);
    }
}




async function fetchSequentially(userId) {
    console.log("Sequential Fetching Started...");

    try {
        const profile = await fetchUserProfile(userId);
        console.log("User Profile:", profile);

        const posts = await fetchUserPosts(userId);
        console.log("User Posts:", posts);

        const comments = await fetchUserComments(userId);
        console.log("User Comments:", comments);

        console.log("Sequential Fetching Complete");
    } catch (error) {
        console.error("Error:", error.message);
    }
}



async function fetchInParallel(userId) {
    console.log("Parallel Fetching Started...");

    try {
        const [profile, posts, comments] = await Promise.all([
            fetchUserProfile(userId),
            fetchUserPosts(userId),
            fetchUserComments(userId)
        ]);

        console.log("User Profile:", profile);
        console.log("User Posts:", posts);
        console.log("User Comments:", comments);

        console.log("Parallel Fetching Complete");
    } catch (error) {
        console.error("Error:", error.message);
    }
}
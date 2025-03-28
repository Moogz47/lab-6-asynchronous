function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function randomFailure(probability = 0.3) {
    return Math.random() < probability;
}


async function fetchUserProfile(userId) {
    try {
        await delay(2000);
        if (randomFailure()) throw new Error("Failed to fetch user profile");
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
        if (randomFailure()) throw new Error("Failed to fetch posts");
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
        if (randomFailure()) throw new Error("Failed to fetch comments");
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


async function getUserContent(userId) {
    console.log("Fetching User Content Started...");

    try {
        const profile = await fetchUserProfile(userId);
        console.log("User profile retrieved:", profile);

        const posts = await fetchUserPosts(userId);
        console.log("Posts retrieved:", posts);

        const comments = await fetchUserComments(userId);
        console.log("Comments retrieved:", comments);

        console.log("All content successfully fetched!");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function fetchSequentially(userId) {
    console.log("Sequential Fetching Started...");

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
            console.log("Sequential Fetching Complete");
        })
        .catch(error => {
            console.error("Error:", error);
        });
}



function fetchInParallel(userId) {
    console.log("Parallel Fetching Started...");

    const profilePromise = fetchUserProfile(userId);
    const postsPromise = fetchUserPosts(userId);
    const commentsPromise = fetchUserComments(userId);

    Promise.all([profilePromise, postsPromise, commentsPromise])
        .then(([profile, posts, comments]) => {
            console.log("User Profile:", profile);
            console.log("User Posts:", posts);
            console.log("User Comments:", comments);
            console.log("Parallel Fetching Complete");
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
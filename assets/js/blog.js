const body = document.body;

function displayPosts() {

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (posts.length === 0) {
        const noPostsMessage = document.createElement('p');
        noPostsMessage.textContent = 'No blog posts found';
        body.appendChild(noPostsMessage);
        return;
    }

    // i preferred to see the posts recent first
    posts.reverse();

    posts.forEach(function (post) {

        const postTitle = document.createElement('h1');
        const postUsername = document.createElement('h2');
        const postContent = document.createElement('p');

        postTitle.textContent = post.title;
        postUsername.textContent = `By: ${post.username}`;
        postContent.textContent = post.blogContent;

        body.appendChild(postTitle);
        body.appendChild(postUsername);
        body.appendChild(postContent);

    });
}

displayPosts();

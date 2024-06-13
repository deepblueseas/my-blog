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

        const card = document.createElement('div');
        card.className = 'card';

        const postTitle = document.createElement('h1');
        const postUsername = document.createElement('h2');
        const postContent = document.createElement('p');

        postTitle.textContent = post.title;
        postUsername.textContent = `By: ${post.username}`;
        postContent.textContent = post.blogContent;

        card.appendChild(postTitle);
        card.appendChild(postUsername);
        card.appendChild(postContent);
        body.appendChild(card);

    });
}

displayPosts();




// lightmode/darkmode
const themeswitcherBlog = document.getElementById('darkmodeToggleBlog')
const containerBlog = document.getElementById('containerBlog');

let modeBlog = 'light';
themeswitcherBlog.addEventListener('click', function () {
    console.log('click');
    if (modeBlog === 'light') {
        modeBlog = 'dark';
        containerBlog.classList.add('dark');
        containerBlog.classList.remove('light');
    }

    else {
        modeBlog = 'light';
        containerBlog.classList.add('light');
        containerBlog.classList.remove('dark');
    }

});


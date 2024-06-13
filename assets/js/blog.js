const body = document.body;

function displayPosts() {

    // posts.length is checking to see if anything is in the current array
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (posts.length === 0) {
        const noPostsMessage = document.createElement('p');
        noPostsMessage.textContent = 'No blog posts found';
        body.appendChild(noPostsMessage);
        return;
    // this part above seems unnec since you cannot access this part of the
    // blog without creating a post
    }

    // i preferred to see the posts recent first
    posts.reverse();

    posts.forEach(function (post) {

        const card = document.createElement('div');
        card.className = 'card';

        // below we are creating the elements and adding our content to
        // them
        const postTitle = document.createElement('h1');
        const postUsername = document.createElement('h2');
        const postContent = document.createElement('p');

        postTitle.textContent = post.title;
        // template literal :)
        postUsername.textContent = `By: ${post.username}`;
        postContent.textContent = post.blogContent;

        // now we dynamically add it to the card and add the card to the page
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


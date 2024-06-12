const submitBtn = document.getElementById('submitEL');
const blogForm = document.getElementById('blogForm');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const blogContentInput = document.getElementById('blogContent');
const displayPost = document.getElementById('displayPost');

// function renderLastBlogPost() {

    // const post = localStorage.getItem('post');
//     if (post) {
//         displayPost.innerHTML = post;
//     }
// }


submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const blogContent = blogContentInput.value;

    if (!username || !title || !blogContent) {
        alert('Please fill in all fields before submitting!');
        return;
    }

    const postBlog = {
        username: username,
        title: title,
        blogContent: blogContent,
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(postBlog);

    localStorage.setItem('posts', JSON.stringify(posts));


    usernameInput.value = '';
    titleInput.value = '';
    blogContentInput.value = '';

    alert('Post successfully saved');
});

// renderLastBlogPost();




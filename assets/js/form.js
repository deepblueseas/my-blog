// retrieve DOM elements by their ID (referencing indexhtml)
const submitBtn = document.getElementById('submitEL');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const blogContentInput = document.getElementById('blogContent');


submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    // retrieving input values from the blog form
    const username = usernameInput.value;
    const title = titleInput.value;
    const blogContent = blogContentInput.value;

    //if any of these are left empty/equal nothing then this alert will show
    if (!username || !title || !blogContent) {
        alert('Please fill in all fields before submitting!');
        return;
    }

    // this creates an object for our blog post consisting of 
    // the username, title, and content
    const postBlog = {
        username: username,
        title: title,
        blogContent: blogContent,
    };

    // here we grab the previous posts/objects from the local storage,
    // or we create and empty array to add to if there is none currently existing
    // the .push adds our newest object to this array
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(postBlog);

    // then we save the new array with the added post to local storage
    localStorage.setItem('posts', JSON.stringify(posts));

    // clear input values bc we did an event prevent default before to stop
    // the page from auto reloading/resetting on submit
    usernameInput.value = '';
    titleInput.value = '';
    blogContentInput.value = '';

    alert('Post successfully saved');

    // change window location upon submit
    window.location.href = 'blog.html';
});

// we use .parse and .stringify when retrieving and adding data 
// bc local storage can only deal with strings
// but arrays and objects are more complex







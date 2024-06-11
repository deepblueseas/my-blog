const submitBtn = document.getElementById('submitEL');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const blogContentInput = document.getElementById('blogContent');
const msgDiv = document.createElement('div');


renderLastBlogPost();

function displayMessage(type, message){
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
};

    function renderLastBlogPost(){
        const username = localStorage.getItem('username');
        const title = localStorage.getItem('title');
        const blogContent = localStorage.getItem('blogContent');

    if (!username || !title || !blogContent) {
        return;
    }

    usernameInput.value = username;
    titleInput.value = title;
    blogContentInput.value = blogContent;

    displayMessage('success', 'Post uploaded');
}

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const blogContent = blogContentInput.value;

    if (!username || !title || !blogContent) {
        displayMessage('error', 'Please fill in all fields before submitting');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('title', title);
    localStorage.setItem('blogContent', blogContent);

    renderLastBlogPost();

    displayMessage('success', 'Post saved');
});





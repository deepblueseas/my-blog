const submitBtn = document.getElementById('submitEL');
const blogForm = document.getElementById('blogForm');

let post = localStorage.getItem('post');

blogForm.textContent = post;



submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('click');

    
})



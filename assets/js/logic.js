const themeswitcher = document.getElementById('darkmodeToggle');
const container = document.getElementById('form-page');


let mode = 'light';

themeswitcher.addEventListener('click', function() {
    console.log('click');
    if (mode === 'light') {
        mode = 'dark';
        container.classList.add('dark');
        container.classList.remove('light');
    }

    else {
        mode = 'light';
        container.classList.add('light');
        container.classList.remove('dark');
    }

});



// i put the blog light and dark in the blog js which i know
// is probably messy
// but i kept getting errors having them in the same file


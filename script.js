document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#reminder').scrollIntoView({
        behavior: 'smooth'
    });
});

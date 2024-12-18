// Smooth scrolling for buttons
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#reminder').scrollIntoView({ behavior: 'smooth' });
});

// Loading indicator for the reminder button
const button = document.getElementById('new-reminder-btn');
button.addEventListener('click', () => {
    button.innerHTML = '<span class="loading">⏳ Loading...</span>';
    setTimeout(() => {
        button.innerHTML = 'Get a New Reminder';
    }, 1000); // Simulate a delay
});

// Section visibility on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach((section) => {
    observer.observe(section);
});

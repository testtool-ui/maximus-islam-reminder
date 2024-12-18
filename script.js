// Smooth scrolling for the "Reflect on the Lessons" button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#reminder').scrollIntoView({
        behavior: 'smooth'
    });
});

// Scroll-to-Top Button functionality
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.onscroll = function() {
    // Scroll to Top button visibility
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }

    // Animate section visibility on scroll
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // When section is in view, add the 'visible' class to animate
        if (sectionPosition < windowHeight * 0.8) {
            section.classList.add('visible');
        }
    });
};

// JavaScript for Random Reminder and Loading Spinner
const reminders = [
    "Patience is key in every trial, and the reward for patience is beyond measure. Trust in Allah’s plan.",
    "Even when things seem impossible, remember that Allah has a plan for you. Keep faith, and keep striving.",
    "The struggle is part of the journey. Trust in your ability and in Allah’s mercy.",
    "Every hardship is a test, and every test is an opportunity to grow closer to Allah.",
    "Maximus never gave up in battle, and we must never give up in our fight for faith and justice."
];

const reminderText = document.getElementById("reminder-text");
const button = document.getElementById("new-reminder-btn");
const loadingSpinner = document.getElementById("loading-spinner");

button.addEventListener("click", function() {
    // Show the loading spinner
    loadingSpinner.style.display = "inline-block";

    // Simulate loading time (you can adjust this as needed)
    setTimeout(function() {
        const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
        reminderText.textContent = randomReminder;

        // Hide the loading spinner after the reminder is updated
        loadingSpinner.style.display = "none";
    }, 1000); // You can adjust the timeout duration as needed (currently set to 1 second)
});

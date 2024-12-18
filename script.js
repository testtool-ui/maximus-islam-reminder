// Smooth scrolling for the "Reflect on the Lessons" button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#reminder').scrollIntoView({
        behavior: 'smooth'
    });
});

// Random Reminder Logic with Loading Indicator
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
    // Show loading spinner while fetching new reminder
    loadingSpinner.style.display = "inline-block";

    // Simulate fetching new reminder
    setTimeout(function() {
        const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
        reminderText.textContent = randomReminder;
        loadingSpinner.style.display = "none";
    }, 1500); // Simulated fetch delay
});

// Section Visibility on Scroll
const sections = document.querySelectorAll('.section-animate');

const sectionVisibilityOnScroll = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
};

// Run on page load and scroll
window.addEventListener('load', sectionVisibilityOnScroll);
window.addEventListener('scroll', sectionVisibilityOnScroll);

// Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Page Load Indicator (Hide after content loads)
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("page-loader").style.display = "none";
});

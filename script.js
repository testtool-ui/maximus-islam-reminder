// Smooth scrolling for the "Reflect on the Lessons" button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#reminder').scrollIntoView({
        behavior: 'smooth'
    });
});

// Dynamic Inspirational Reminder with Loading Effect
const reminders = [
    "Patience is key in every trial, and the reward for patience is beyond measure. Trust in Allah’s plan.",
    "Even when things seem impossible, remember that Allah has a plan for you. Keep faith, and keep striving.",
    "The struggle is part of the journey. Trust in Allah’s mercy.",
    "Every hardship is a test. Use it to grow closer to Allah.",
    "Maximus never gave up in battle, and we must never give up in our fight for faith and justice."
];

const reminderText = document.getElementById("reminder-text");
const button = document.getElementById("new-reminder-btn");

button.addEventListener("click", function () {
    button.textContent = "⏳ Loading...";
    setTimeout(() => {
        const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
        reminderText.textContent = randomReminder;
        button.textContent = "Get a New Reminder";
    }, 1000); // Simulate a short delay
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

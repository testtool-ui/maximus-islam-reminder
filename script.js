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
    "Maximus never gave up in battle, and we must never give up in our fight for faith and justice.",
    "In times of hardship, remember that Allah is closer to you than you think. Keep calling upon Him.",
    "With every difficulty comes ease. Trust in Allah’s timing.",
    "The strength of a believer lies in their trust in Allah’s wisdom and mercy.",
    "Your struggle today is the foundation of your victory tomorrow. Never give up.",
    "Even when you feel weak, know that Allah is with you, providing strength when you need it most.",
    "Do not let fear stop you. Place your trust in Allah, and He will guide you through every trial.",
    "Sabr (patience) is not just waiting. It is trusting Allah’s plan and enduring with a grateful heart.",
    "No matter how dark the path, remember that Allah’s light will guide you through it.",
    "Faith is believing in the unseen, and trust in Allah is the foundation of that belief.",
    "Every step you take in patience and faith is a step toward Allah’s reward."
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

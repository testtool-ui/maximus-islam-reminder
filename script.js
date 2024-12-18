// Smooth Scroll for Button
document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#reminder').scrollIntoView({ behavior: 'smooth' });
});

// Dynamic Daily Reminder
const reminders = [
    "Patience is key in every trial, and the reward for patience is beyond measure. Trust in Allah’s plan.",
    "Even when things seem impossible, remember Allah has a plan for you.",
    "The struggle is part of the journey. Trust in Allah’s mercy.",
    "Every hardship is a test. Use it to grow closer to Allah.",
];

document.getElementById("new-reminder-btn").addEventListener("click", () => {
    const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
    document.getElementById("reminder-text").textContent = randomReminder;
});

// Intersection Observer for Animations
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

document.querySelectorAll('section').forEach((section) => observer.observe(section));

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

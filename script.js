// Random Reminder Logic with Loading Text
const reminders = [
    "Patience is key in every trial, and the reward for patience is beyond measure. Trust in Allah’s plan.",
    "Even when things seem impossible, remember that Allah has a plan for you. Keep faith, and keep striving.",
    "The struggle is part of the journey. Trust in your ability and in Allah’s mercy.",
    "Every hardship is a test, and every test is an opportunity to grow closer to Allah.",
    "Maximus never gave up in battle, and we must never give up in our fight for faith and justice."
];

const reminderText = document.getElementById("reminder-text");
const loadingText = document.getElementById("loading-text");
const button = document.getElementById("new-reminder-btn");

// When the button is clicked
button.addEventListener("click", function() {
    // Hide the current reminder text and show the loading text
    reminderText.style.display = "none";  // Hide reminder
    loadingText.style.display = "block";  // Show loading text

    // Simulate fetching new reminder after 1.5 seconds
    setTimeout(function() {
        const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
        reminderText.textContent = randomReminder;

        // Hide the loading text and display the new reminder
        loadingText.style.display = "none";  // Hide loading text
        reminderText.style.display = "block";  // Show new reminder
    }, 1500);  // Simulated loading delay
});

// Smooth scrolling for the "Reflect on the Lessons" button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#reminder').scrollIntoView({
        behavior: 'smooth'
    });
});

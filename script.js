// Smooth scrolling for the "Reflect on the Lessons" button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#reminder').scrollIntoView({
        behavior: 'smooth'
    });
});

// Array of reminders
const reminders = [
    "Patience is key in every trial, and the reward for patience is beyond measure. Trust in Allah’s plan.",
    "Even when things seem impossible, remember that Allah has a plan for you. Keep faith, and keep striving.",
    "The struggle is part of the journey. Trust in your ability and in Allah’s mercy.",
    "Every hardship is a test, and every test is an opportunity to grow closer to Allah.",
    "Maximus never gave up in battle, and we must never give up in our fight for faith and justice."
];

// Get the reminder text and button from the HTML
const reminderText = document.getElementById("reminder-text");
const button = document.getElementById("new-reminder-btn");

// Function to display a random reminder
button.addEventListener("click", function() {
    // Choose a random reminder from the array
    const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
    
    // Update the reminder text on the page
    reminderText.textContent = randomReminder;
});

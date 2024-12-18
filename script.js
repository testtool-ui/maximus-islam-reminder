// Random Reminder Logic
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

// Event listener for button click
button.addEventListener("click", function() {
    // Hide the current reminder and show loading text
    reminderText.style.display = 'none';
    loadingText.style.display = 'block';  // Show loading text

    // Simulate a delay of 2 seconds (to mimic fetching a new reminder)
    setTimeout(function() {
        const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
        reminderText.textContent = randomReminder; // Set the new reminder text
        
        // Hide loading text and show new reminder text
        loadingText.style.display = 'none'; 
        reminderText.style.display = 'block';
    }, 2000); // Simulated 2-second delay
});

// Smooth scrolling for the "Reflect on the Lessons" button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#reminder').scrollIntoView({
        behavior: 'smooth'
    });
});

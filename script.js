// Countdown timer functionality
function updateCountup() {
    const targetDate = new Date("December 29, 2023 07:15:00"); // Set the target date (her birthday)
    const currentDate = new Date();
    
    const timeDifference = currentDate - targetDate ;

    // Calculate the time remaining in days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown on the page
    document.getElementById('countup').innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
}

// Initialize the countdown
updateCountup();


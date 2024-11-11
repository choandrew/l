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

    // Display the countup on the page
    document.getElementById('countup').innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update the countup every second
    setTimeout(updateCountup, 1000);
}

window.onload = function() {
    // Create confetti burst effect when the page loads
    confetti({
        particleCount: 200,  // Number of confetti pieces
        spread: 90,          // Spread angle of confetti
        origin: { y: 0.6 },  // Confetti will start slightly below the top
        colors: ['#ff00ff', '#ffcc00', '#00ccff', '#ff6666', '#00ff00'], // Confetti colors
        gravity: 0.5,        // Gravity of the confetti
        ticks: 300,          // Number of frames
    });

    // Call the countup function
    updateCountup();
};

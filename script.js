const links = document.querySelectorAll('.link');
const audio = document.getElementById('audio');
const pausePlayButton = document.getElementById('pausePlayButton');
const stopButton = document.getElementById('stopButton');
const pausePlayImage = document.getElementById('pausePlayImage');

// Attach click event listeners to all links
links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default link behavior

        // Remove 'clicked' class from all links
        links.forEach(l => l.classList.remove('clicked'));

        // Add 'clicked' class to the currently clicked link
        link.classList.add('clicked');

        // Get the sound file from the data-sound attribute
        const soundFile = link.getAttribute('data-sound');

        // Play the sound
        audio.src = soundFile; // Set the sound file
        audio.play(); // Play the audio

        // Update the play/pause button to show the pause icon
        pausePlayImage.src = 'Images/pause.png';
        pausePlayImage.alt = 'Pause';
    });
});

// Pause/Play button functionality
pausePlayButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); // Play the audio
        pausePlayImage.src = 'Images/pause.png'; // Update to pause icon
        pausePlayImage.alt = 'Pause';
    } else {
        audio.pause(); // Pause the audio
        pausePlayImage.src = 'Images/play.png'; // Update to play icon
        pausePlayImage.alt = 'Play';
    }
});

// Stop button functionality
stopButton.addEventListener('click', () => {
    audio.pause(); // Pause the audio
    audio.currentTime = 0; // Reset audio to the start
    pausePlayImage.src = 'Images/play.png'; // Reset to play icon
    pausePlayImage.alt = 'Play';
});
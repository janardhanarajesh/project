// Get references to the audio element and the play/pause button
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");

// Function to toggle play/pause state
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "Play";
    }
}

// Add a click event listener to the play/pause button
playPauseButton.addEventListener("click", togglePlayPause);

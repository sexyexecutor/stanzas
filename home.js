// Get the DOM elements
const yearSlider = document.getElementById("yearSlider");
const yearLabel = document.getElementById("yearLabel");
const playlist = document.getElementById("playlist");

// Update the year label when the slider changes
yearSlider.addEventListener("input", () => {
    yearLabel.textContent = yearSlider.value;
});

// Function to add a song to the playlist
function addSong() {
    const songURL = document.getElementById("songInput").value;
    const memory = document.getElementById("memoryInput").value;
    const year = yearSlider.value;

    // Check if both song URL and memory are provided
    if (!songURL || !memory) {
        alert("Please enter both a song URL and a memory.");
        return;
    }

    // Create a new list item for the playlist
    const li = document.createElement("li");

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    // Insert the song, memory information, and the delete button
    li.innerHTML = `
        <strong>Year: ${year}</strong>
        <div class="song-info">
            <p><a href="${songURL}" target="_blank">Listen to the song</a></p>
            <p><em>Memory: ${memory}</em></p>
        </div>
    `;

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the new list item to the playlist
    playlist.appendChild(li);

    // Clear the input fields after adding the song
    document.getElementById("songInput").value = '';
    document.getElementById("memoryInput").value = '';

    // Add event listener to the delete button to remove the song
    deleteButton.addEventListener("click", () => {
        playlist.removeChild(li);
    });
}

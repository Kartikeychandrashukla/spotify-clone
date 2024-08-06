

console.log("Welcome to Spotify");

let audioElement = new Audio(); // Initialize audio element
let songIndex = 0; // Initial song index
let masterPlay = document.getElementById("masterPlay");
let progressbar = document.getElementById("myprogressBar");
let Gif = document.querySelector(".playingsound");
// Select all elements with the class 'songitem'
let songItems = document.querySelectorAll('.songitem');
let mprs = document.getElementById("press");
// Log the NodeList to the console
console.log(songItems);

let songs = [
    { songName: "Chaleya", filePath: "Chaleya(PagalWorld.com.sb).mp3", coverPath: "download (1).jpeg" },
    { songName: "Aararaari Raaro", filePath: "Aararaari Raaro(PagalWorld.com.sb).mp3", coverPath: "download (1).png" },
    { songName: "_Yaariyan", filePath: "_Yaariyan(PagalWorld.com.sb).mp3", coverPath: "download (2).jpeg" },
    { songName: "Iski Bhen Ki Maje Maje", filePath: "Iski Bhen Ki Maje Maje(PagalWorld.com.sb).mp3", coverPath: "download (3).jpeg" },
    { songName: "Jawan Prevue Theme", filePath: "Jawan Prevue Theme(PagalWorld.com.sb).mp3", coverPath: "download (4).jpeg" },
    { songName: "Not Ramaiya Vastavaiya", filePath: "Not Ramaiya Vastavaiya(PagalWorld.com.sb).mp3", coverPath: "download (5).jpeg" },
    { songName: "Faraatta", filePath: "Faraatta(PagalWorld.com.sb).mp3", coverPath: "download (7).jpeg" },
    { songName: "Zinda Banda", filePath: "Zinda Banda(PagalWorld.com.sb).mp3", coverPath: "download (6).jpeg" }
];
// imagae UrL array

  

// Function to update image source and log the name
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    
});

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("span")[0].innerHTML = songs[i].songName;
    
});
// Load initial song
loadSong(songIndex);

// Function to load a song by index
function loadSong(index) {
    if (index < 0 || index >= songs.length) {
        return; // Ensure index is within valid range
    }
    songIndex = index; // Update current song index

    // Update audio source
    audioElement.src = songs[songIndex].filePath;
    audioElement.load(); // Load the new audio source


    // Handle play/pause button state
    if (!audioElement.paused) {
        audioElement.pause(); // Pause current song if playing
    }
    masterPlay.classList.remove("fa-solid", "fa-pause");
    masterPlay.classList.add("fa-solid", "fa-play");
    Gif.style.opacity = 0; // Hide playing indicator
}

// Handle play/pause button click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-solid", "fa-play");
        masterPlay.classList.add("fa-solid", "fa-pause");
        Gif.style.opacity = 1; // Show playing indicator
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-solid", "fa-pause");
        masterPlay.classList.add("fa-solid", "fa-play");
        Gif.style.opacity = 0; // Hide playing indicator
    }
});

// Update progress bar with audio element
audioElement.addEventListener('timeupdate', () => {
    let position = (audioElement.currentTime / audioElement.duration) * 100;
    progressbar.value = position;
});

// Update audio with progress bar
progressbar.addEventListener('input', () => {
    audioElement.currentTime = (progressbar.value / 100) * audioElement.duration;
});

// Previous button click event listener
document.getElementById('previousButton').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop to the previous song
    loadSong(songIndex);
});

// Next button click event listener
document.getElementById('nextButton').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length; // Loop to the next song
    loadSong(songIndex);
});
//function for playing sound on clicking play button
function playsong(index)
{
    songIndex = index;
   let mainname=document.getElementsByClassName("hii")
   mainname[0].innerHTML= songs[songIndex].songName

    // Update audio source
    audioElement.src = songs[songIndex].filePath;
    audioElement.load(); // Load the new audio source

    // Handle play/pause button state
    if (!audioElement.paused) {
        audioElement.pause(); // Pause current song if playing
    }
    masterPlay.classList.remove("fa-solid", "fa-pause");
    masterPlay.classList.add("fa-solid", "fa-play");
    Gif.style.opacity = 0; // Hide playing indicator
// play icon in songitem update
    
}
// first adding event listener to each play button 
let tingtong=document.getElementsByClassName("play");
Array.from(tingtong).forEach((element,i)=>{
element.addEventListener("click",()=>{
    playsong(i);
})
})

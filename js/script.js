// inizio script barra durata canzone
const progressBar = document.querySelector(".progress-bar");


function updateProgressBar(value) {
    progressBar.style.background = `linear-gradient(to right, #C1C1C1 ${value}%, #5A5A5A ${value}%)`;
}


progressBar.addEventListener("input", (e) => {
    const value = e.target.value;
    updateProgressBar(value);
});


window.addEventListener("load", () => {
    const initialValue = 20; 
    progressBar.value = initialValue; 
    updateProgressBar(initialValue); 
});
// Fine script barra durata canzone


// inizio script barra volume
const volumeBar = document.querySelector(".volume-bar");

volumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
   
    volumeBar.style.background = `linear-gradient(to right, #5A5A5A ${value}%, #C1C1C1 ${value}%)`;
});


window.addEventListener("load", () => {
    const initialValue = volumeBar.value;
    volumeBar.style.background = `linear-gradient(to right, #5A5A5A ${initialValue}%, #C1C1C1 ${initialValue}%)`;
});
// Fine script barra volume

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
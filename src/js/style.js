const button = document.getElementById("button")
button.addEventListener("click",function(){

    const api = fetch("https://catfact.ninja/fact")
    .then(res=>res.json())
    .then(data=>{

        document.getElementById("fact").innerHTML = data.fact
    
    
    
    })
})

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});





const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector('[data-key="${key}"]');
}

pianoKeys.forEach(key =>{

    key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) =>{

    playTune(e.key);
}

document.addEventListener("keydown", pressedKey)
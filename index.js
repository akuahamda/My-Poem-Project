function generatePoem(event) { 
    event.preventDefault();
    new Typewriter('#poem', {
        strings: "Perhaps the prolific poet was content with letting her mind journey ",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
      
    
    

}

let poemformElement = document.querySelector("#form-element");
poemformElement.addEventListener("submit", generatePoem);
function displayPoem(response){ 
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}




function generatePoem(event) { 
    event.preventDefault();

    let instructionsInput = document.querySelector(".input-element")
    let apiKey = "8fob310357070bce9t79c94a1a8a4f49";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let context = " Make sure to provide a clear and precise answer,about 3 lines" ;
   let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


   


  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
   poemElement.innerHTML =  `<div class="waiting">⏳ Generating a poem about ${instructionsInput?.value}..</div>`; 




    axios.get(apiUrl).then(displayPoem);   
      
   

}

let poemformElement = document.querySelector("#form-element");
poemformElement.addEventListener("submit", generatePoem);
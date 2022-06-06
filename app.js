
    // Create Dino Constructor
    class Dino {
        constructor(species, weight, height, diet, where, when, fact) {
        this.species = species,
        this.weight = weight,
        this.height = height,
        this.diet = diet,
        this.where = where,
        this.when = when,
        this.fact = fact,
        this.image = "images/" + species.toLowerCase() + ".png"
        };
    };

    // Create Dino Objects
    let dinoInfo = [];
    fetch("./dino.json")
        .then(response => response.json())
        .then(data => dinoInfo = data.Dinos.map(dino => new Dino(dino.species, dino.weight, dino.height, dino.diet, [dino.fact, `My species is ${dino.species}.`, `I belong to ${dino.where}.`, `My when is ${dino.when}.`])));



    // Use IIFE to get human data from form
    function getHumanData() {
        let humanData = document.querySelectorAll('#dino-compare input');
        human = Array.from(humanData).reduce((acc, input) => ({
            ...acc, [input.id]: input.value
        }), {});
        console.log(human);
        return human;
    };
    document.getElementById("btn").addEventListener("click", getHumanData);

    // // Create Dino Compare Method 1
    // // NOTE: Weight in JSON file is in lbs, height in inches. 
    
    
    // // Create Dino Compare Method 2
    // // NOTE: Weight in JSON file is in lbs, height in inches.
    
    
    // // Create Dino Compare Method 3
    // // NOTE: Weight in JSON file is in lbs, height in inches.
    

    // Generate Tiles for each Dino in Array
    
        // Add tiles to DOM
        


    // Remove form from screen


// On button click, prepare and display infographic


    // Create Dino Constructor
    function Dino(species, image,  weight, height, diet, where, when, fact) {
        this.species = species,
        this.image = image,
        this.weight = weight,
        this.height = height,
        this.diet = diet,
        this.where = where,
        this.when = when,
        this.fact = fact
    };

    // Create Dino Objects
    let tri = new Dino('Triceratops', './images/triceratops.png', 13000, 114, 'herbavor', 'North America', 'Late Cretaceous', 'First discovered in 1889 by Othniel Charles Marsh');
    let rex = new Dino('Tyrannosaurus Rex', './images/tyrannosaurus rex.png', 11905, 144, 'carnivor', 'North America', 'Late Cretaceous', 'The largest known skull measures in at 5 feet long.');
    let ank = new Dino('Anklyosaurus', './images/anklyosaurus.png', 10500, 55, 'herbavor', 'North America', 'Late Cretaceous', 'Anklyosaurus survived for approximately 135 million years');
    let brach = new Dino('Brachiosaurus', './images/brachiosaurus.png', 70000, 372, 'herbavor', 'North America', 'Late Jurasic', 'An asteroid was named 9954 Brachiosaurus in 1991');
    let steg = new Dino('Stegosaurus', './images/stegosaurus.png', 11600, 79, 'herbavor', 'North America, Europe, Asia', 'Late Jurasic to Early Cretaceous', 'The Stegosaurus had between 17 and 22 seperate places and flat spines');
    let ela = new Dino('Elasmosaurus', './images/elasmosaurus.png', 16000, 59, 'carnivor', 'North America', 'Late Cretaceous', 'Elasmosaurus was a marine reptile first discovered in Kansas');
    let pte = new Dino('Pteranodon', './images/pteranodon.png', 44, 20, 'carnivor', 'North America', 'Late Cretaceous', 'Actually a flying reptile, the Pteranodon is not a dinosaur');
    let pig = new Dino('Pigeon', './images/pigeon.png', 0.5, 9, 'herbavor', 'World Wide', 'Holocene', 'All birds are living dinosaurs');


    // Create Human Object
    let human = {
    
    };

    // Use IIFE to get human data from form
    (function getHumanData() {
        let humanData = document.querySelectorAll('#dino-compare input');
        human = Array.from(humanData).reduce((acc, input) => ({
            ...acc, [input.id]: input.value
        }), {});
    }
    )();

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    let dinoArray = {tri, rex, ank, brach, steg, ela, pte, pig};
    function compareWeight() {
        for (const [key, value] of Object.entries(dinoArray)) {
            for (const i in value) {
             if(i == 'weight'){
                 console.log(key)
                 console.log(value[i]);
             }
            }
        }
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareHeight() {
        for (const [key, value] of Object.entries(dinoArray)) {
            for (const i in value) {
             if(i == 'height'){
                 console.log(key)
                 console.log(value[i]);
             }
            }
        }
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareDiet() {
        for (const [key, value] of Object.entries(dinoArray)) {
            for (const i in value) {
             if(i == 'diet'){
                 console.log(key)
                 console.log(value[i]);
             }
            }
        }
    }

    // Generate Tiles for each Dino in Array
    
        // Add tiles to DOM
        let grid = document.getElementById("grid");
        let div = document.createElement("div");
        let infoName = document.createElement("h2");
        let infoImage = document.createElement("img");
        let infoFact = document.createElement("p");
        for (const [key, value] of Object.entries(dinoArray)) {
            for (const i in value) {
                switch(i) {
                    case (i == "species"):
                        infoName.innerHTML = value[i];
                    case (i == "image"):
                        infoImage.innerHTML = value[i];
                    case (i == "fact"):
                        infoFact.innerHTML = value[i];
                    default:
                        break;
                }
            }
            grid.appendChild(div);
            div.appendChild(infoName);
            div.appendChild(infoImage);
            div.appendChild(infoFact);
        }


    // Remove form from screen


// On button click, prepare and display infographic

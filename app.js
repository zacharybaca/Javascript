
    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact) {
        this.species = species,
        this.weight = weight,
        this.height = height,
        this.diet = diet,
        this.where = where,
        this.when = when,
        this.fact = fact
    };

    // Create Dino Objects
    let tri = new Dino('Triceratops', 13000, 114, 'herbavor', 'North America', 'Late Cretaceous', 'First discovered in 1889 by Othniel Charles Marsh');
    let rex = new Dino('Tyrannosaurus Rex', 11905, 144, 'carnivor', 'North America', 'Late Cretaceous', 'The largest known skull measures in at 5 feet long.');
    let ank = new Dino('Anklyosaurus', 10500, 55, 'herbavor', 'North America', 'Late Cretaceous', 'Anklyosaurus survived for approximately 135 million years');
    let brach = new Dino('Brachiosaurus', 70000, 372, 'herbavor', 'North America', 'Late Jurasic', 'An asteroid was named 9954 Brachiosaurus in 1991');
    let steg = new Dino('Stegosaurus', 11600, 79, 'herbavor', 'North America, Europe, Asia', 'Late Jurasic to Early Cretaceous', 'The Stegosaurus had between 17 and 22 seperate places and flat spines');
    let ela = new Dino('Elasmosaurus', 16000, 59, 'carnivor', 'North America', 'Late Cretaceous', 'Elasmosaurus was a marine reptile first discovered in Kansas');
    let pte = new Dino('Pteranodon', 44, 20, 'carnivor', 'North America', 'Late Cretaceous', 'Actually a flying reptile, the Pteranodon is not a dinosaur');
    let pig = new Dino('Pigeon', 0.5, 9, 'herbavor', 'World Wide', 'Holocene', 'All birds are living dinosaurs');


    // Create Human Object
    let human = {
        name: '',
        height: 0,
        weight: 0,
        diet: ''
    };

    // Use IIFE to get human data from form
    (function getHumanData() {
        let humanData = document.querySelectorAll('#dino-compare input');
        Array.from(humanData).reduce((acc, input) => ({
            ...acc, [input.id]: input.value
        }), {});
    }
    )();

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

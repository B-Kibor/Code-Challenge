const userCups = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const cups = parseInt(userCups);

function calculateChaiIngredients(cups) {
    console.log(`To make ${cups} cups of Kenyan Chai, you will need:`);
    console.log(` Milk: ${cups * 200} ml`);
    console.log(` Water: ${cups * 50} ml`);
    console.log(`Tea Leaves: ${cups} tbsp`);
    console.log(`Sugar: ${cups} tsp`);
}

calculateChaiIngredients(cups);
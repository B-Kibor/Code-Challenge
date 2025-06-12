const userDistance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const km = parseInt(userDistance);

function calculateBodaFare(distance) {
    const baseFare = 50;
    const perKmRate = 15;
    const distanceCost = perKmRate * distance;
    const totalFare = baseFare + distanceCost;

    console.log(` Distance: ${distance} Km`);
    console.log(`Base Fare: KES ${baseFare}`);
    console.log(` Per Km Cost: KES ${perKmRate}/Km`);
    console.log(` Total Fare: KES ${totalFare}`);
    
}

calculateBodaFare(km); 


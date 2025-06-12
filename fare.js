const userDistance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const km = parseInt(userDistance);

function calculateBodaFare(distance) {
    const baseFare = 50;
    const perKmRate = 15;
    const distanceCost = perKmRate * distance;
    const totalFare = baseFare + distanceCost;

    console.log(`Uko kwote? Izo ni ${distance} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distance * perKmRate}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`Panda Pikipiki!`);
}

calculateBodaFare(km);

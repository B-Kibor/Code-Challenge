const userAmount = prompt("Unatuma Ngapi? (KES):");
const amount = parseInt(userAmount);

function estimateTransactionFee(amountToSend) {
    let fee = amountToSend * 0.015; 

    if (fee < 10) fee = 10;
    if (fee > 70) fee = 70;

    const total = amountToSend + fee;

    console.log(`Sending: KES ${amountToSend}`);
    console.log(`Transaction Fee: KES ${fee}`);
    console.log(`Total to Pay: KES ${total}`);
}

estimateTransactionFee(amount);
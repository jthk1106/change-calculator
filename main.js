// Write your JavaScript here

// The Button
var boomBtn = document.getElementById('calculate-change');
boomBtn.addEventListener('click', () => {
    handleBoomBtn();
});

// The Button Handler
function handleBoomBtn() {
    var due = document.getElementById('amount-due').value;
    var received = document.getElementById('amount-received').value;

    calculateChange(due, received)
};

// The Button Handler Work
function calculateChange(d, r) {
    var change = (r - d).toFixed(2);

    var dueDollars = Number(change.toString().split(".")[0]);
    var dueCents = Number(change.toString().split(".")[1])

    var changeCents = dueCents;
    var finalTotal = dueDollars + '.' + dueCents;
    console.log(`finalTotal: ${finalTotal}`)
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    // QUARTERS
    if(changeCents%25 === 0) {
        quarters = changeCents/25;
        changeCents = 0;
    } else {
        quarters = Math.floor(changeCents/25);
        changeCents = changeCents%25;
    };

    // DIMES
    if(changeCents%10 === 0) {
        dimes = changeCents/10;
        changeCents = 0;
    } else {
        dimes = Math.floor(changeCents/10);
        changeCents = changeCents%10;
    };

    // NICKELS
    if(changeCents%5 === 0) {
        nickels = changeCents/5;
        changeCents = 0;
    } else {
        nickels = Math.floor(changeCents/5);
        changeCents = changeCents%5;
    };

    // PENNIES
    if(changeCents < 5) {
        pennies = changeCents;
    }

    document.getElementById('dollars-output').innerText = dueDollars;
    document.getElementById('quarters-output').innerText = quarters;
    document.getElementById('dimes-output').innerText = dimes;
    document.getElementById('nickels-output').innerText = nickels;
    document.getElementById('pennies-output').innerText = pennies;
    document.getElementById('totalDue').innerText = finalTotal;

};
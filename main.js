// Write your JavaScript here

// The Button
var boomBtn = document.getElementById('calculate-change');
boomBtn.addEventListener('click', () => {
    handleBoomBtn();
});

// The Button Handler
function handleBoomBtn() {
    // var dueDollars = document.getElementById('dueDollars').value;
    // var dueCents = document.getElementById('dueCents').value;
    // var receivedDollars = document.getElementById('receivedDollars').value;
    // var receivedCents = document.getElementById('receivedCents').value;
    // calculateChange(dueDollars, dueCents, receivedDollars, receivedCents);
    var due = document.getElementById('amount-due').value;
    var received = document.getElementById('amount-received').value;

    calculateChange(due, received)
};

// The Button Handler Work
function calculateChange(d, r) {
    var change = (r - d).toFixed(2);
    console.log('change: ',change)

    var dueDollars = Number(change.toString().split(".")[0]);
    var dueCents = Number(change.toString().split(".")[1])
    console.log('dueDollars: ', dueDollars, ' dueCents: ', dueCents); 

    var changeCents = dueCents;
    var finalTotal = dueDollars + '.' + dueCents;
    console.log(`finalTotal: ${finalTotal}`)
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    console.log(`changeCents before quarter check: ${changeCents}`)
    // QUARTERS
    if(changeCents%25 === 0) {
        quarters = changeCents/25;
        changeCents = 0;
    } else {
        quarters = Math.floor(changeCents/25);
        changeCents = changeCents%25;
    };
    console.log(`changeCents after quarter check: ${changeCents}`)

    // DIMES
    if(changeCents%10 === 0) {
        dimes = changeCents/10;
        changeCents = 0;
    } else {
        dimes = Math.floor(changeCents/10);
        changeCents = changeCents%10;
    };
    console.log(`changeCents after dime check: ${changeCents}`)

    // NICKELS
    if(changeCents%5 === 0) {
        nickels = changeCents/5;
        changeCents = 0;
    } else {
        nickels = Math.floor(changeCents/5);
        changeCents = changeCents%5;
    };
    console.log(`changeCents after nickel check: ${changeCents}`)

    // PENNIES
    if(changeCents < 5) {
        pennies = changeCents;
    }
    console.log(`pennies: ${pennies}`)

    document.getElementById('dollars-output').innerText = dueDollars;
    document.getElementById('quarters-output').innerHTML = quarters;
    document.getElementById('dimes-output').innerHTML = dimes;
    document.getElementById('nickels-output').innerHTML = nickels;
    document.getElementById('pennies-output').innerHTML = pennies;
    document.getElementById('totalDue').innerHTML = finalTotal;

    console.log('dueDollars: ', isNaN(dueDollars))
    console.log('quarters: ', isNaN(quarters))
    console.log('dimes: ', isNaN(dimes))
    console.log('nickels: ', isNaN(nickels))
    console.log('pennies: ', isNaN(pennies))
    console.log('finalTotal: ', isNaN(finalTotal))

};
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
    

    // function checkChange(n) {
    //     console.log('checkChange()... n: ', n)
    //     if(isNaN(n)) {
    //         return '00';
    //     } else if(n < 10) {
    //         return n + 0;
    //     } else {
    //         return n;
    //     }
    //     // return (n < 10) ? (n + 0) : n;
    // };


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
    // if(isNaN(changeCents)) {
    //     console.log('in quarters (1)')
    //     quarters = 0;
    // } else if(changeCents%25 === 0) {
    //     console.log('in quarters (2)')
    //     quarters = changeCents/25;
    // } else {
    //     console.log('in quarters (3)')
    //     quarters = Math.floor(changeCents/25);
    //     changeCents = changeCents%25;
    // };

    // DIMES
    if(changeCents%10 === 0) {
        dimes = changeCents/10;
        changeCents = 0;
    } else {
        dimes = Math.floor(changeCents/10);
        changeCents = changeCents%10;
    };
    console.log(`changeCents after dime check: ${changeCents}`)
    // if(isNaN(changeCents)) {
    //     dimes = 0;
    // } else if(changeCents%10 === 0) {
    //     dimes = changeCents/10;
    // } else {
    //     dimes = Math.floor(changeCents/10);
    //     changeCents = changeCents%10;
    // };

    // NICKELS
    if(changeCents%5 === 0) {
        nickels = changeCents/5;
        changeCents = 0;
    } else {
        nickels = Math.floor(changeCents/5);
        changeCents = changeCents%5;
    };
    console.log(`changeCents after nickel check: ${changeCents}`)
    // if(isNaN(changeCents)) {
    //     nickels = 0;
    // } else if(changeCents%5 === 0) {
    //     nickels = changeCents/5;
    // } else {
    //     nickels = Math.floor(changeCents/5);
    //     changeCents = changeCents%5;
    // };

    // PENNIES
    if(changeCents < 5) {
        pennies = changeCents;
    }
    console.log(`pennies: ${pennies}`)
    // if(isNaN(changeCents)) {
    //     pennies = 0;
    // } else {
    //     pennies = changeCents;
    //     console.log(`checking pennies: ${pennies}`)
    // };

    document.getElementById('dollars-output').innerHTML = dueDollars;
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
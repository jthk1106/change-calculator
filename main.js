// Write your JavaScript here
var boomBtn = document.getElementById('calcBtn');

boomBtn.addEventListener('click', () => {
    handleBoomBtn();
});

function handleBoomBtn() {
    var dueDollars = document.getElementById('dueDollars').value;
    var dueCents = document.getElementById('dueCents').value;
    var receivedDollars = document.getElementById('receivedDollars').value;
    var receivedCents = document.getElementById('receivedCents').value;
    calculateChange(dueDollars, dueCents, receivedDollars, receivedCents);
};

function calculateChange(dollarsDue, centsDue, dollarsReceived, centsReceived) {

    // var change = r - d
    var change = '';
    var changeDollars = (dollarsDue === 0) ? return dollarsReceived :  return dollarsDue - dollarsReceived
    var changeCents = centsDue - centsReceived
    // var changeDollars = Number(change.toString().split(".")[0]);
    // var changeCents = Number(change.toString().split(".")[1]);
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    console.log('changeDollars: ', changeDollars, ' changeCents: ', changeCents);   

    // DOLLARS
    dollars = changeDollars;

    // QUARTERS
    if(changeCents%25 === 0) {
        quarters = changeCents/25;
        console.log('quarters: ', quarters)
    } else {
        quarters = Math.floor(changeCents/25);
        console.log('quartersRemainder: ', quarters)
        changeCents = changeCents%25;
    };

    // DIMES
    if(changeCents%10 === 0) {
        dimes = changeCents/10;
        console.log('dimes: ', dimes)
    } else {
        dimes = Math.floor(changeCents/10);
        console.log('dimesRemainder: ', dimes)
        changeCents = changeCents%10;
    };

    // NICKELS
    if(changeCents%5 === 0) {
        nickels = changeCents/5;
    } else {
        nickels = Math.floor(changeCents/5);
        changeCents = changeCents%5;
    };

    // PENNIES
    pennies = changeCents;

    document.getElementById('dollars').textContent = dollars;
    document.getElementById('quarters').textContent = quarters;
    document.getElementById('dimes').textContent = dimes;
    document.getElementById('nickels').textContent = nickels;
    document.getElementById('pennies').textContent = pennies;
    document.getElementById('totalDue').textContent = change;

    // var roundDownChange = change%1
    // var cents = Number(roundDownChange.toFixed(2))
 
    // >> operator for 'divisor' ???
    // %.25 > %.10 > %.05 > %.01 

    // console.log(`change: ${change} roundDownChange: ${roundDownChange} math: ${cents}`)

};
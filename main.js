// Write your JavaScript here
var boomBtn = document.getElementById('calcBtn');
console.log(boomBtn);

boomBtn.addEventListener('click', () => {
    handleBoomBtn();
});

function handleBoomBtn() {
    var due = document.getElementById('due').value;
    var received = document.getElementById('received').value;
    console.log(`due: ${due}  received: ${received}`);
    var change = calculateChange(due, received);
    console.log(`change: ${change}`);
};

function calculateChange(d, r) {
    var change = r - d;
    var roundDownChange = change%1
    var cents = Number(roundDownChange.toFixed(2))
 
    
    console.log(`change: ${change} roundDownChange: ${roundDownChange} math: ${cents}`)

};
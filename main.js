// Write your JavaScript here
var boomBtn = document.getElementById('calcBtn')
console.log(boomBtn)

boomBtn.addEventListener('click', () => {
    var due = document.getElementById('due').value
    var received = document.getElementById('received').value
    console.log(`due: ${due}  received: ${received}`)
})
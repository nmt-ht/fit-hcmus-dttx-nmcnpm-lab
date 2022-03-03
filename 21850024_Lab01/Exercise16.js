const prompt = require('prompt-sync')({sigint: true});

console.log("Please input x, n value for calculating S(x, n)");
var x = prompt('Please input x: ');
var n = prompt('Please input n: ');

function calculatingTotal(x, n){
    let total = 0;

    for(let i = 1; i <= n; i ++){
        var subTotal = 0;
        for(let j = 1; j <= i; j++) 
        {
            subTotal += j;
        }

        total += (x * i)/subTotal;
    }

    console.log(`S(n) = ${total}`);
}

calculatingTotal(x, n);

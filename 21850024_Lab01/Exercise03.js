const prompt = require('prompt-sync')({sigint: true});

var n = prompt('Please input n value for calculating S(n): ');;

while(n <= 6)
{
    n = prompt('Please only input n value (n >= 7): ');
}

function calculatingTotal(n){
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += 1/i;
    }
    console.log(`S(n) = ${total}`);
}

calculatingTotal(n);

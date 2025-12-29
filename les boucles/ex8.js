const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

rl.question("Entrez le nombre de lignes : ", (input) => {
    let n = Number(input);
    if (isNaN(n) || n <= 0) {
        console.log("Veuillez entrer un nombre entier positif.");
        rl.close();
        return;
    }

    let starsCount = 2;  
    let maxStars = 0;
    let primes = [];

    while (primes.length < n) {
        if (isPrime(starsCount)) {
            primes.push(starsCount);
            if (starsCount > maxStars) maxStars = starsCount;
        }
        starsCount++;
    }

    for (let i = 0; i < n; i++) {
        let stars = primes[i];
        let spaces = Math.floor((maxStars - stars) / 2);
        let line = ' '.repeat(spaces) + '*'.repeat(stars);
        console.log(line);
    }

    rl.close();
});

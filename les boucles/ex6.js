const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("donner un nbr (base > 0): ", (baseInput) => {
    let base = Number(baseInput);

    if (isNaN(base) || base <= 0) {
        console.log("donner un nombre > 0.");
        rl.close();
        return;
    }

    rl.question("exponent: ", (expInput) => {
        let os = Number(expInput);

        if ( os < 0) {
            console.log("donner un nombre >= 0.");
            rl.close();
            return;
        }

        let exponent = os;  
        let result = 1;

        while (os > 0) {
            result *= base;
            os--;
        }

        console.log(`${base} ^ ${exponent} = ${result}`);
        rl.close();
    });
});

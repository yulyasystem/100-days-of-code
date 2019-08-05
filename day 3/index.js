function main() {
    const amIlucky = true;

    const willSomeoneLoveMe = new Promise(
        function (resolve, reject) {
            if (amIlucky) {
                const love = {
                    you: "happy",
                    alsoYou: "notHappy"
                };
                resolve(love);
            } else {
                const pain = new Error("cry");
                reject(pain);
            }
        }
    );

    const askFlower = function () {
        console.log("before knowing your destiny");
        willSomeoneLoveMe.then(function (fulfilled) {
            console.log("Fulfilled! LOVE YOU!")
        }).catch(function (error) {
            console.log(error.message)
        });
        console.log("after");
    };

    askFlower();
}

//main();

// ES7

const amIlucky = false;

const willSomeoneLoveMe = new Promise(
    (resolve, reject) => {
        if (amIlucky) {
            const love = {
                you: "happy",
                alsoYou: "notHappy"
            };
            resolve(love);
        } else {
            const pain = new Error("cry");
            reject(pain);
        }
    }
);

async function askFlower() {

    try {
        console.log("before knowing your destiny");
        let love = await willSomeoneLoveMe;
        console.log("Fulfilled! LOVE YOU!")
    } catch (error) {
        console.log(error.message)
    };

};

(async () => {
    await askFlower();
})();

function order() {

    console.log('sync 1');
    setTimeout(() => console.log("timeout 2", 0));
    Promise.resolve().then(() => console.log("Promise"));
    console.log("sync 2")
}

order();

const getFood = async (name) => {
    const food = {
        apple: '1',
        pizza: '20',
        fish: '30',
    };
    return food[name];
}

getFood('apple').then(console.log);

const makeMeal = async () => {

    try {
        const a = await getFood('pizza');
        //await - pause the execution of this function until getFood() promise resolves
        const f = await getFood('fish');
        const meal = await Promise.all([a, f]);
        // throw 'broken';
        return meal;
    } catch (err) {
        console.log(err);
    }


    // instead of chaining a catch callback to a promise chain need to wrap code in try{} catch{},
    // gives much better flexibility when handling errors that might occur across multiple promises

}

//promise way 
const makeMeal2 = () => {
    let a;
    return getFood('pizza').then(f => {
        f = a;
        return getFood('fish')
    }).then(f => [f, a])

}

console.log(makeMeal(), "MEEEAL", makeMeal().then(console.log));

const friends = ['mary', 'harry', 'perry'];

function getFriend(name, obj) {
    return obj.name;
}
const frienship = friends.map(async (i, obj) => {
    const person = await getFriend(i, obj);

})


// if we use map, we will return an array of promises and then resolve them all consurently using Promise.all
// with async/await, map won't pause he function, expect loop to stop if do await getFood() 
//to run a loop and have every itration in that loop await a promise -> need to use traditional for loop
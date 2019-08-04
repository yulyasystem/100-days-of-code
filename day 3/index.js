const amIlucky = true;

const willSomeoneLoveMe = new Promise(
    function(resolve,reject){
        if(amIlucky){
            const love = {
                you: "happy",
                alsoYou: "notHappy"
            };
            resolve(love);
        }
        else{
            const pain = new Error("cry");
            reject(pain);
        }
    }
);

const askFlower = function(){
    console.log("before knowing your destiny");
    willSomeoneLoveMe.then(function(fulfilled){
        console.log("Fulfilled! LOVE YOU!")
    }).catch(function(error){
        console.log(error.message)
    });
    console.log("after");
};

askFlower();

// ES7

const amIlucky = false;

const willSomeoneLoveMe = new Promise(
    (resolve,reject)=>{
        if(amIlucky){
            const love = {
                you: "happy",
                alsoYou: "notHappy"
            };
            resolve(love);
        }
        else{
            const pain = new Error("cry");
            reject(pain);
        }
    }
);

async function askFlower (){

try
    {console.log("before knowing your destiny");
        let love  = await willSomeoneLoveMe;
        console.log("Fulfilled! LOVE YOU!")
    }
    catch(error){
        console.log(error.message)
    };
    
};

(async () => {
    await askFlower();
})();
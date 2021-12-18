let pronoun = ['the', 'our','we','you'];
let adj = ['great', 'big', 'small', 'under'];
let noun = ['jogger', 'racoon', 'planet', 'moon'];

for (let x = 0; x < pronoun.length; x++) {
    console.log(x);
    for (let y = 0; y < adj.length; y++) {
        for (let z = 0; z < noun.length; z++) {

            let domainName = pronoun[x] + adj[y] + noun[z] + ".com";
            console.log(domainName)
        }


    }
}
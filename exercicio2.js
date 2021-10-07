// EXERCICIO 6
// Dada uma série de eleitores em potencial, retorna um objeto que represente os resultados da votação.
// Inclua quantos eleitores potenciais tinham entre 18 e 25 AnalyserNode, quantos eram de 26 a 35, quantos
// de 36 a 55 anos e quantos de cada uma dessas faixas etárias realmente votaram. O objeto resultante
// contendo esses dados deve ter 6 propriedades.

// Retorno esperado:
// {
//     numYoungVotes: 1,
//     numYoungPeople: 4,
//     numMidVotes: 3,
//     numMidPeople: 4,
//     numOldVotes: 3,
//     numOldPeople: 4
// }

const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false },
];

function voterResults(array) {
    const voters = array;

    const results = voters.reduce(
        (prev, curr) => {
            return {
                numYoungVotes:
                    curr.age >= 18 && curr.age <= 25 && curr.voted ? prev.numYoungVotes + 1 : prev.numYoungVotes,
                numYoungPeople: curr.age >= 18 && curr.age <= 25 ? prev.numYoungPeople + 1 : prev.numYoungPeople,
                numMidVotes: curr.age >= 26 && curr.age <= 35 && curr.voted ? prev.numMidVotes + 1 : prev.numMidVotes,
                numMidPeople: curr.age >= 26 && curr.age <= 35 ? prev.numMidPeople + 1 : prev.numMidPeople,
                numOldVotes: curr.age >= 36 && curr.age <= 55 && curr.voted ? prev.numOldVotes + 1 : prev.numOldVotes,
                numOldPeople: curr.age >= 36 && curr.age <= 55 ? prev.numOldPeople + 1 : prev.numOldPeople,
            };
        },
        {
            numYoungVotes: 0,
            numYoungPeople: 0,
            numMidVotes: 0,
            numMidPeople: 0,
            numOldVotes: 0,
            numOldPeople: 0,
        }
    );

    return results;
}

console.log(voterResults(voters));

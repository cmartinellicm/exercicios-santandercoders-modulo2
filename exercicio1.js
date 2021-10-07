// EXERCICIO 5
// Faça uma série de strings dos nomes dizendo se eles podem ou não ir para The Matrix (> 18 anos)

// Retorno esperado:
// [
//     'Angelina Jolie can go to The Matrix',
//     'Eric Jones is under age!!',
//     'Paris Hilton is under age!!',
//     'Kayne West is under age!!',
//     'Bob Ziroll can go to The Matrix',
// ]

const people = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 },
];

function makeStrings(array) {
    const whoCanWatchTheMatrix = array.map((person) =>
        person.age > 18 ? `${person.name} can go to The Matrix` : `${person.name} is under age!!`
    );

    return whoCanWatchTheMatrix;
}

console.log(makeStrings(people));

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

function election(array) {
    const voters = array;

    const results = voters.reduce(
        (acc, curr) => {
            const ageGroup = (age) => {
                if (age >= 18 && age <= 25) return 'young';
                if (age >= 26 && age <= 35) return 'mid';
                if (age >= 36 && age <= 55) return 'old';
                return 'Invalid age';
            };

            return {
                numYoungVotes: ageGroup(curr.age) === 'young' && curr.voted ? acc.numYoungVotes + 1 : acc.numYoungVotes,
                numYoungPeople: ageGroup(curr.age) === 'young' ? acc.numYoungPeople + 1 : acc.numYoungPeople,
                numMidVotes: ageGroup(curr.age) === 'mid' && curr.voted ? acc.numMidVotes + 1 : acc.numMidVotes,
                numMidPeople: ageGroup(curr.age) === 'mid' ? acc.numMidPeople + 1 : acc.numMidPeople,
                numOldVotes: ageGroup(curr.age) === 'old' && curr.voted ? acc.numOldVotes + 1 : acc.numOldVotes,
                numOldPeople: ageGroup(curr.age) === 'old' ? acc.numOldPeople + 1 : acc.numOldPeople,
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

console.log(election(voters));

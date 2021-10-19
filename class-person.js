class Person {
    constructor(firstName, lastName, age, gender, interests) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.bio = `${this.firstName} ${this.lastName} is ${this.age} years old. They like ${this.interests}.`;
    }

    greeting() {
        return `Hi! I'm ${this.firstName} ${this.lastName}`;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, gender, interests, subject) {
        super(firstName, lastName, age, gender, interests);
        this.subject = subject;
    }

    greeting() {
        return `Hello! My name is ${this.lastName}, and I teach ${this.subject}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, gender, interests) {
        super(firstName, lastName, age, gender, interests);
    }

    greeting() {
        return `Yo! I'm ${this.firstName}`;
    }
}
// let person = new Person('Cassia', 'Mello', 33, 'female', 'ballet and coffee');
// console.log(person);
// console.log(person.greeting());
// let teacher = new Teacher('Cassia', 'Mello', 33, 'female', 'ballet and coffee', 'math');
// console.log(teacher);
// console.log(teacher.greeting());
let student = new Student('Cassia', 'Mello', 33, 'female', 'ballet and coffee');
console.log(student);
console.log(student.greeting());

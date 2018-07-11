// class Person {
//     constructor(name = 'test'){
//         this.name = name;
//     }
//     getGreeting() {
//         return `Hi I am ${ this.name }`;
//     }
// }

// const me = new Person('Lucifer');
// console.log(me.getGreeting());

// const other = new Person();
// console.log(other);

class Person {
    constructor(name = 'Default',age=0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi I am ${ this.name }`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}. `;
        }

        return `${description}:testing`;
    }
}


class Traveler extends Person{
    constructor(name,age,homeLocation){
        super();
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greetVar = super.getGreeting();
        if(this.homeLocation){
            greetVar += `. I am visiting from ${this.homeLocation}`;
        }
        return greetVar;
    }
}


// const me = new Student('Lucifer',20, 'CS');
// console.log(me.getDescription());

// const meNew = new Student();
// console.log(meNew.getDescription());

const travelNew = new Traveler('Lucifer',20);
console.log(travelNew.getGreeting());
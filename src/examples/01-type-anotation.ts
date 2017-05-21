// primitive type annotation
var firstName: string = 'Steve';
var heightInCentimeters: number = 182.88; 
var isActive: boolean = true;

// array type annotation
var names: string[] = ['James', 'Nick', 'Rebecca', 'Lily'];

// function annotation with parameter type annotation and return type annotation var sayHello: (name: string) => string;
// implementation of sayHello function
var sayHello = function (name: string) {
    return 'Hello ' + name;
};

// object type annotation
var person: { name: string; heightInCentimeters: number; };
// Implementation of a person object
person = {
  name: 'Mark',
  heightInCentimeters: 183
};


interface Person {
  name: string;
  heightInCentimeters: number;
}

// tried interchange of otherPerson -> person
const otherPerson: Person = { 
  name: 'Mark',
  heightInCentimeters: 183
}
console.log(otherPerson);
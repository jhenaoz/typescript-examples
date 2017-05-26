// primitive type annotation
const firstName: string = 'Steve';
const heightInCentimeters: number = 182.88;
const isActive: boolean = true;

// array type annotation
const names: string[] = ['James', 'Nick', 'Rebecca', 'Lily'];

// function annotation with parameter type annotation and return type annotation var sayHello: (name: string) => string;
// implementation of sayHello function
const sayHello = (name: string): string => {
    return 'Hello ' + name;
};

// object type annotation
let person: { name: string; heightInCentimeters: number; };

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
  heightInCentimeters: 185
};

console.log(otherPerson);

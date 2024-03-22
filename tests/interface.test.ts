import { AddFunction, Seller } from '../src/interface';
import { Person } from '../src/person';

describe('interface', () => {
  it('should support ts', () => {
    const seller: Seller = {
      id: 1,
      name: 'Toko ABC',
      npwp: '123123', // readonly tida bisa diubah setelah assignment pertama
    };

    seller.id = 2;
    // seller.npwp = '123123'; // error
    console.log(seller);
  });

  it('should add number', () => {
    const add: AddFunction = (value1, value2) => value1 + value2;

    expect(add(1, 2)).toBe(3);

    // console.log(add('1', 2)); //error
  });

  it('should support indexable interface', () => {
    interface StringArray {
      // indexing seperti array biasa
      [index: number]: string;
    }
    const names: StringArray = ['sjhi', 'asdf', 'asd'];
    console.log(names[0]);
  });

  it('should support mapp object interface', () => {
    interface StringDictionary {
      // indexing seperti array map / object
      [key: string]: string | number;
    }
    const dictionary: StringDictionary = {
      name: 'Dhimas',
      address: 'Cimahi',
      age: 1,
    };
    console.log(dictionary['address']);
  });

  it('should support extending interface', () => {
    interface Employee {
      id: string;
      name: string;
    }
    interface Manager extends Employee {
      numOfEmployees: number;
    }

    const employee1: Employee = {
      id: '1',
      name: 'budi',
    };

    const manager1: Manager = {
      id: '1',
      name: 'Dhimas',
      numOfEmployees: 100,
    };

    console.log(employee1, manager1);
  });

  it('should support function interface', () => {
    const person: Person = {
      name: 'dhimas',
      sayHello: function (name?: string): string {
        return `hello ${name || ''}, my name is ${this.name}`;
      },
    };

    console.log(person.sayHello());
  });

  it('should support type assertion', () => {
    const person: any = {
      name: 'Dhimas',
      age: 30,
    };

    const person2: Person = person as Person; // mengubah tipe data dari any menjadi type Person , pastikan type sesuai 

    console.log(person2);
  });
});

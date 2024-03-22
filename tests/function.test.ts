describe('function', () => {
  it('should support return string', () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello('Dhimas')).toBe('Hello Dhimas');
  });

  it('should support return nothing', () => {
    function sayHello(name: string): void {
      console.log(`Hello ${name}`);
    }

    expect(sayHello('Dhimas')).toBeNull;
  });

  it('function parameter', () => {
    function sayHello(name: string = 'Guest'): string {
      return `Hello ${name}`;
    }

    expect(sayHello('Dhimas')).toBe('Hello Dhimas');
    expect(sayHello()).toBe('Hello Guest');
  });

  it('function rest parameter', () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3)).toBe(6);
  });

  /* Function overloading : kemampuan untuk membuat function dengan nama yang sama namun dengan parameter input yang berbeda */
  it('function overloading', () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any) {
      if (typeof value === 'string') return value;
      if (typeof value === 'number') return value;
    }

    expect(callMe(1)).toBe(1);
    expect(callMe('asd')).toBe('asd');
  });

  it('function as parameter', () => {
    function sayHello(name: string, func: (name: string) => string) {
      return `Hello ${func(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello('dhimas', toUpper)).toBe('Hello DHIMAS');
    expect(sayHello('dhimas', (name: string) => name.toUpperCase())).toBe('Hello DHIMAS');

    expect(
      sayHello('dhimas', function (name: string) {
        return name.toUpperCase();
      }),
    ).toBe('Hello DHIMAS');
  });
});

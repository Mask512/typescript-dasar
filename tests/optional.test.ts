describe('optional', () => {
  it('should support ts', () => {
    function sayHello(name?: string | null) {
      if (name) {
        console.log(`Hello ${name}`);
      } else {
        console.log('Hello');
      }
    }

    sayHello('Dhimas');
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});

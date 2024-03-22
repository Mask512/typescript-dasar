describe('Object', () => {
  it('should support in ts', () => {
    const person: { id: string; name: string; hobbies?: string[  ] } = {
      id: '1',
      name: 'eko',
    };
    console.log(person);

    person.id = '2';
    person.name = 'Sahid';
    // person.age = 30; // error , doesnt exist
  });

  // optional properties (?)
  it('should support in ts', () => {
    type Category = {
      id: string | number;
      name: string;
      description?: string; // ?
    };

    const category: Category = {
      id: 1,
      name: 'Handphone',
      description: 'Contoh', // ini bisa ada atau tidak
    };

    console.log(category);
  });
});

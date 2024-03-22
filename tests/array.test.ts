describe('Data type', () => {

    // Type data array
  it('should same with js', () => {
    const names: string[] = ['dhimas', 'sahid', 'pangestu'];
    const values: number[] = [1, 2, 3];
  });

  // Readonly array
  it('should readonly array', () => {
    const hobbies: ReadonlyArray<string> = ['Membaca', 'Menulis'];
    // hobbies[0] = 'Main Game'; // error
  });

  // Tuple / array yang sudah index dan tipe data nya sudah ditentukan

  it('should tuple array', () => {
    const person: readonly [string, string, number] = ['Membaca', 'Menulis', 30];

    // person[0] = 'Main game' // error (readonly)
    // person[2] = 'test' // error 
  });
});

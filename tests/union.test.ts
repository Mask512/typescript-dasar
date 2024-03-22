describe('Union Type', () => {
  it('should must declare', () => {
    let sample: number | string | boolean = 'dhimas'; // deklarasi tipe data diantara yang telah ditentukan

    sample = 10;
    console.log(sample);

    sample = 'test';
    console.log(sample);
    
    sample = true;
    console.log(sample);
    // sample = ['test']; // error
  });
});

describe('Intersection', () => {
  // Intersection | Cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain menggunakan keyword &

  it('should intersection', () => {
    interface HasName {
      name: string;
    }
    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const user: Domain = {
      id: '1',
      name: 'Dimas',
    };

    console.log(user   );
  });
});

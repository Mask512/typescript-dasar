export type ID = string | number ;

export type Category = {
  id: ID;
  name: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
};

const xiaomi: Product = {
  id: '1', //bisa menggunakan string
  name: 'handphone',
  price: 200000,
  category: { // berisi id , name
    id: '123', //bisa menggunakan string
    name: 'xiaomi',
  },
};

const category: Category = {
  id: 2, // bisa menggunakan number
  name: 'iphone 12 pro',
};

const iphone: Product = {
  id: '1',
  name: 'handphone',
  price: 200000,
  category, // berisi id , name
};

console.log(category, xiaomi, iphone);

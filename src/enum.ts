// Enum / nilai pasti diantara yang telah ditentukan

export enum CustomerType {
  REGULAR = 'REGULAR', // 'REGULAR' Menentukan value dari regular type by default index 0,1,2 dst...
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
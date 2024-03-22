export interface Seller {
  id: number;
  name: string;
  address?: string;
  readonly npwp: string; // readonly after first assignment
}


// Function interface yang berisi argument number dan return number

export interface AddFunction {
  (value1: number, value2: number): number;
}

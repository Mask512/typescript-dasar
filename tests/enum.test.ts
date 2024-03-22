import { Customer, CustomerType } from '../src/enum';

describe('Enum', () => {
  it('should support ts', () => {
    const customer: Customer = {
      id: 1,
      name: 'Dhimas',
      type: CustomerType.PLATINUM, // cara akses enum
    };
    console.log(customer);
  });
});

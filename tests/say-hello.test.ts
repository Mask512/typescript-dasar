import { sayHello } from '../src/say-hello';

describe('sayHello', function (): void {
  it('should return Hello dhimas', () => {
    expect(sayHello('dhimas')).toBe('Hello dhimas');
  });
});

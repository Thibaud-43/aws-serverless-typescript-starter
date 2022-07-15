import { hello } from '../hello';

test('Should return hello', () => {
  expect(hello()).toBe('hello');
});

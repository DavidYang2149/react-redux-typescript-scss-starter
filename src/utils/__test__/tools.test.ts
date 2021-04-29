import { isEmpty, isNotEmpty } from '../tools';

describe('isEmpty', () => {
  context('with empty value', () => {
    it('return true', () => {
      expect(isEmpty(0)).toBe(true);
    });
  });

  context('with not empty value', () => {
    it('return false', () => {
      expect(isEmpty(1)).toBe(false);
    });
  });
});

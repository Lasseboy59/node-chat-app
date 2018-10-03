const expect = require('expect');

const {isRealString} = require('./validation');

// import isRealString

// isRealString
  // should reject non-string values
  // should reject string with only spaces
  // should allow string with non-space characters

  describe('isRealString', () => {
    it('should reject non-string values', () => {
      var res = isRealString(98);
      expect(res).toBe(false);
/*      expect(typeof string).toBe('string');*/
    });
  });

  describe('isRealString', () => {
    it('should reject string with only spaces', () => {
      var res = isRealString('    ');
      expect(res).toBe(false);
    });
  });

  describe('isRealString', () => {
    it('should allow string with non-space characters', () => {
      var res = isRealString('Some stringAndMore');
      expect(res).toBe(true);
    });
  });

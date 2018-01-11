import {
  // assert,
  expect
  // should
} from 'chai';

import Library from '../dist/Library.min.js';

describe('Given an instance of my library', function() {
  let lib = null;

  before(function() {
    lib = new Library();
  });
  // beforeEach(function() {});
  // after(function() {});
  // afterEach(function() {});

  describe('when I need the name', function() {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Library');
    });
  });
});

var Chai = require('chai');
var Library = require('../dist/Library.min.js');

Chai.expect();

var lib = null;

describe('Given an instance of my library', function() {
  before(function() {
    lib = new Library();
  });
  describe('when I need the name', function() {
    it('should return the name', () => {
      Chai.expect(lib.name).to.be.equal('Library');
    });
  });
});

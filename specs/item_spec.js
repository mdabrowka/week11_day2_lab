const Item = require('../item.js');
const assert = require('assert');


describe('Item', function() {
let item;

beforeEach(function () {
  item = new Item('whipped cream', 12, true);
})


  it('should have a name', function () {
     assert.strictEqual(item.name, 'whipped cream');
   });


})
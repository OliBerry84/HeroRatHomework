const assert = require('assert');
const Food = require('../Food.js');

describe('Food Tests', function(){

  let food;

  beforeEach('Setup', function(){
    food = new Food('Deep-Fried Rat Balls', 10);
  }); // beforeEach end

  it('Should have a name', function(){
      assert.deepStrictEqual('Deep-Fried Rat Balls', food.name)
  }); // test end

  it('should have a replenish_value', function(){
    assert.deepStrictEqual(10, food.replenish_value)
  }); // test end

}) // wrapper end

const assert = require('assert');
const Task = require('../Task.js');

describe('Task Tests', function(){

  let task;

  beforeEach('Setup', function(){
    task = new Task(5, 2, 125, 'not completed');
  }); // beforeEach end

  it('Should have a difficulty_level', function(){
    assert.deepStrictEqual(5, task.difficulty_level)
  }); // test end

  it('Should have an urgency level', function(){
    assert.deepStrictEqual(2, task.urgency_level)
  }); // test end

  it('Should have a reward', function(){
    assert.deepStrictEqual(125, task.reward)
  }); // test end

  it('Should have a completed status', function(){
    assert.deepStrictEqual('not completed', task.completed)
  }); // test end

}); //wrapper end

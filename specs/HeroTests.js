const assert = require('assert');
const Hero = require('../Hero.js');
const Food = require('../Food.js');
const Tasks = require('../Tasks.js');

describe('Hero Tests', function(){

  let task;
  let task1;
  let task2;
  let tasks;
  let food;
  let food1;
  let food2;
  let hero;

  beforeEach('Setup', function(){

    task = new Tasks(1, 4, 25, true);
    task1 = new Tasks(5, 2, 125, false);
    task2 = new Tasks(3, 3, 75, false);
    tasks = [task, task1, task2];
    food = new Food('Deep-Fried Rat Balls', 10);
    food1 = new Food('Eggs & Bacon', 2);
    food2 = new Food('Battered Sausage', 5);
    hero = new Hero('Groot', 100, 'Deep-Fried Rat Balls', tasks);
  }); // beforeEach end

  it('Hero has a name', function(){
    assert.deepStrictEqual('Groot', hero.name);
  }); // test end

  it('Should have a collection of tasks', function(){
    const actual = hero.tasks;
    assert.deepStrictEqual(actual, tasks)
  }); //test end

  it('Can say Hi', function (){
    hero.sayHi();
    actual = `Hi! My name is Groot`;
    assert.deepStrictEqual(actual, `Hi! My name is Groot`)
  }); //test end

  it('Ensure food replenishes health value', function(){
    hero.canEatFood(food2)
    actual = hero.health;
    assert.deepStrictEqual(actual, 105)
  });

  it('Ensure favourite food replenishes extra health', function(){
    hero.canEatFood(food)
    actual = hero.health;
    assert.deepStrictEqual(actual, 115)
  }); //test end

  it('can sort tasks by difficulty', function(){
    const actual = [
      task,
      task2,
      task1
    ]
    assert.deepStrictEqual( actual, hero.canSortTaskByDifficulty())
  }) // test end

  xit('can sort tasks by urgency', function(){
    const actual = [
      task1,
      task2,
      task
    ]
    assert.deepStrictEqual( actual, hero.canSortTaskByUrgency())
  }) // test end

  it('can mark completed/incomplete tasks', function(){
    actual = hero.canCompleteTasks(task)
    assert.deepStrictEqual(actual, 'Task Completed')
  }); //test end

}); // wrapper end

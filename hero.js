function Hero(name, health, favourite_food, tasks){
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.tasks = tasks;
};

Hero.prototype.sayHi = function () {
  return (`Hi! My name is ${ this.name }`);
}

Hero.prototype.canEatFood = function(food){
  if (food.name === this.favourite_food)
  {
    this.health = this.health += (food.replenish_value * 1.5);
  }
  else
  {
    this.health += food.replenish_value;
  };
};

// Hero.prototype.createMapofTasks = function(tasks){
//   return this.tasks.map((tasklist) => {
//     this.canSortTaskByDifficulty(tasklist);
//   });
// };
//
// Hero.prototype.canSortTaskByDifficulty = function () {
//   tasks.difficulty_level.sort(function(a, b){
//     return a - b;
//   });
// };

Hero.prototype.canSortTaskByDifficulty = function () {

  var byDifficulty = this.tasks.slice(0);
  byDifficulty.sort(function(a, b){
    return a.difficulty_level - b.difficulty_level;
  });
};

//     let difficultyArray = [];
//     this.tasks.map((task) => {
//       difficultyArray.push(task.difficulty_level);
//     });
//
//     difficultyArray.sort(function (a, b){
//     return a.difficulty_level - b.difficulty_level
//   });
//
// };
//
// Hero.prototype.canSortTaskByUrgency = function(){
//
// };

Hero.prototype.canCompleteTasks = function(task){
  if (task.completed === true)
  {
    return 'Task Completed'
  }
      else
  {
    return 'Task Remains Incomplete'
  }

};
module.exports = Hero;

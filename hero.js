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


Hero.prototype.canSortTaskByLowestDifficulty = function () {
  this.tasks.sort(function(a, b){
    return a.difficulty_level - b.difficulty_level;
  });
};

Hero.prototype.canSortTaskByHighestDifficulty = function () {
  this.tasks.sort(function(a, b){
    return b.difficulty_level - a.difficulty_level;
  });
};

Hero.prototype.canSortTaskByMostUrgency = function(){
  this.tasks.sort(function(a, b){
    return b.urgency_level - a.urgency_level;
  });
};

Hero.prototype.canSortTaskByLeastUrgency = function(){
  this.tasks.sort(function(a, b){
    return a.urgency_level - b.urgency_level;
  });
};

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

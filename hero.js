function Hero(name, health, favourite_food, tasks){
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.tasks = tasks;
};

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

Hero.prototype.canSortTaskByDifficulty = function(){

};


Hero.prototype.canSortTaskByUrgency = function(){

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

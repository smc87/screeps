/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('healer'); // -> 'a thing'
 */
 module.exports = function (creep) {
  for(var name in Game.creeps) {
	var targetcreep = Game.creeps[name];
	if (creep.my) {
	if (targetcreep.hits<400) {
	    creep.moveTo(targetcreep.pos);
	    creep.heal(targetcreep);
	    return;
	}
	}
  }
  	 	if (!creep.pos.inRangeTo(Game.spawns.Spawn1, 4)){
	 	creep.moveTo(Game.spawns.Spawn1);
	 	}
 }

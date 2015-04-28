/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('defense'); // -> 'a thing'
 */
  module.exports = function (creep) {
 	var target = creep.pos.findClosest(FIND_HOSTILE_CREEPS);
 	if (creep.hits < 140) {
 	    creep.moveTo(Game.spawns.Spawn1);
 	} else if(target != null) {
 	     	if (creep.pos.inRangeTo(target.pos, 14)) {
		creep.moveTo(target);
		creep.attack(target);
		return;
	}
	 	if (!creep.pos.inRangeTo(Game.spawns.Spawn1, 4)){
	 	creep.moveTo(Game.spawns.Spawn1);
	 	}
 	}

  }

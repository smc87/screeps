/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('populationctrl'); // -> 'a thing'
 */
 
  module.exports = function makeCreep(name,type) {
      
if (type == "harvester") {
Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, CARRY, MOVE], name, {role: 'harvester'});
} else if (type == "guard") {
Game.spawns.Spawn1.createCreep([ATTACK, TOUGH, ATTACK, ATTACK, MOVE], name, {role: 'guard'});
} else if (type == "healer") {
Game.spawns.Spawn1.createCreep([HEAL, HEAL, HEAL, MOVE, MOVE], name, {role: 'healer'});
} else if (type == "builder") {
Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, CARRY, MOVE], name, {role: 'builder'});
};

}







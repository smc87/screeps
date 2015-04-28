/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('builder'); // -> 'a thing'
 */
 module.exports = function (creep) {
		if(creep.energy == 0) {
			creep.moveTo(Game.spawns.Spawn1);
			Game.spawns.Spawn1.transferEnergy(creep);
		    }
		else {
		    //fix the rampart sheilds
		    var structures = creep.room.find(Game.STRUCTURES);
		    var damagedRamparts = [ ];

			for(var index in structures)
			{
				var structure = structures[index];
				if(structure.structureType == 'rampart' && structure.hits < (structure.hitsMax - 50))
					damagedRamparts.push(structure);
			}

			if(damagedRamparts.length)
			{
				creep.moveTo(damagedRamparts[0]);
				creep.repair(damagedRamparts[0]);

				return;
			}
			//Other genral contruction targets if others are not damaged
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if(targets.length) {
				creep.moveTo(targets[0]);
				creep.build(targets[0]);
				
				return;
			}
		}
	}

var harvest1 = require('harvester');
var build1 = require('builder');
var defense = require('defense');
var makeCreep = require('roles');
var healer = require("healer");


//Main body and Keep Track of current counts
var counts = {guard : 0, healer : 0, builder : 0, harvester : 0, total : 0}
for(var name in Game.creeps) {
	var creep = Game.creeps[name];
	if(creep.memory.role == 'harvester') {
	    counts["harvester"]++;
		harvest1(creep);
	} else if(creep.memory.role == 'builder') {
	    counts["builder"]++;
		build1(creep);
	} else if (creep.memory.role == 'guard') {
	    counts["guard"]++;
        defense(creep);
	} else if (creep.memory.role == 'healer') {
	    counts["healer"]++;
        healer(creep);
	}
	counts["total"]++
} 
//Spawn creeps if required
if (counts["total"]<30) {
    if (counts["harvester"] / (counts["total"] + 1) < 0.2) {
       makeCreep("harvester" & counts["harvester"] + 1,"harvester");
    } else  if (counts["healer"] / (counts["total"] + 1) < 0.1) {
       makeCreep("healer" & counts["healer"] + 1, "healer");
    } else if (counts["guard"] / (counts["total"] + 1) < 0.01) {
       makeCreep("guard" & counts["guard"] + 1,"guard"); 
    } else if (counts["builder"] / (counts["total"] + 1) < 0.01) {
       makeCreep("builder" & counts["builder"] + 1, "builder");
    } else if (counts["guard"] / (counts["total"] + 1) < 0.76) {
       makeCreep("guard" & counts["guard"] + 1,"guard"); 
    }
}




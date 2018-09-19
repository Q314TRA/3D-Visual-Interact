var controlarDecals = function (objeto) {
    "use strict";
    if (objeto.name === "decal") {
		console.log("decal");
        objeto.material.emissiveColor = new BABYLON.Color3(5, 5, 5);
    }
	
	
	else
	{
		decal.material.emissiveColor = new BABYLON.Color3(0, 0, 0);
	}
    
};
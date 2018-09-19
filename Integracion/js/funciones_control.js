/////////////////////////////////////////////////////////
/// Change colors

var ChangeColor = function (colorIndex, R, G, B) {
    var colorTo = new BABYLON.Vector3(R, G, B);
    switch (colorIndex) {
	case 1:
		materialChaqueta.setVector3("color1", colorTo);
		break;
	case 2:
		materialChaqueta.setVector3("color2", colorTo);
		break;
	case 3:
		materialChaqueta.setVector3("color3", colorTo);
		break;
    }
};

/////////////////////////////////////////////////////////
/// Change background color

var BackGroundColor = function (R, G, B) {
	escena.clearColor = new BABYLON.Color3(R, G, B);
};

/////////////////////////////////////////////////////////
/// Change pattern

var SetPattern = function (patternIndex) {
	switch (patternIndex) {
	case 1:
		materialChaqueta.setTexture("textureSampler", new BABYLON.Texture("3D/texturas/polera_1.png", escena));
		break;
	case 2:
		materialChaqueta.setTexture("textureSampler", new BABYLON.Texture("3D/texturas/polera_2.png", escena));
		break;
	case 3:
		materialChaqueta.setTexture("textureSampler", new BABYLON.Texture("3D/texturas/polera_3.png", escena));
		break;
	case 4:
		materialChaqueta.setTexture("textureSampler", new BABYLON.Texture("3D/texturas/polera_4.png", escena));
		break;
	}
};

/////////////////////////////////////////////////////////
/// Start placing a decal
var ActivateDecal = function (DecalIndex, ImgPath) {
	poniendoDecal = true;
	decalOVERActivo = true;
	decalOVERMaterial.diffuseTexture = new BABYLON.Texture(ImgPath, escena);
	decalOVERMaterial.diffuseTexture.hasAlpha = true;
	decalOVERMaterial.useAlphaFromDiffuseTexture = true;	
	//
	switch (DecalIndex) {
	case 1:
		decalMaterial1.diffuseTexture = new BABYLON.Texture(ImgPath, escena);
		decalMaterial1.useAlphaFromDiffuseTexture = true;
		decalMaterial1.diffuseTexture.hasAlpha = true;
		poniendoDecal1 = true;
		break;
	case 2:
		decalMaterial2.diffuseTexture = new BABYLON.Texture(ImgPath, escena);
		decalMaterial2.useAlphaFromDiffuseTexture = true;
		decalMaterial2.diffuseTexture.hasAlpha = true;
		poniendoDecal2 = true;
		break;
	case 3:
		decalMaterial3.diffuseTexture = new BABYLON.Texture(ImgPath, escena);
		decalMaterial3.useAlphaFromDiffuseTexture = true;
		decalMaterial3.diffuseTexture.hasAlpha = true;
		poniendoDecal3 = true;
		break;
	case 4:
		decalMaterial4.diffuseTexture = new BABYLON.Texture(ImgPath, escena);
		decalMaterial4.useAlphaFromDiffuseTexture = true;
		decalMaterial4.diffuseTexture.hasAlpha = true;
		poniendoDecal4 = true;
		break;		
	};
}

/////////////////////////////////////////////////////////
/// Set Highlight On/Off
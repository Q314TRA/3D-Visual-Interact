var materialChaqueta;
var decalMaterial;
var decalMaterial2;
var decal;
var decal1;
var decal2;
var decal3;
var decal4;
var decal5;
var decalSize;
var poniendoDecal = false;
var poniendoDecal1 = false;
var poniendoDecal2 = false;
var poniendoDecal3 = false;
var poniendoDecal4 = false;
var posVertical = 20;
var guisystem;
var fondoModelo1;
var fondoModelo2;
var fondoModelo3;
var fondoModelo4;
var fondosModelosInit = false;
var fondoUpload1;
var fondoUpload2;
var fondoUpload3;
var fondoUpload4;
var fondosUploadInit = false;
var TextoOver;
var TextoOverSombra;
var planoOver;

var rueda = function(evt)
{
	var incremento = new BABYLON.Vector3(.125, .125, .125);
	if(evt.wheelDelta > 0)
	{
		decalSize.addInPlace(incremento);
	}
	else
	{
		decalSize.subtractInPlace(incremento);
	}
	decalSize = BABYLON.Vector3.Clamp(decalSize, incremento, new BABYLON.Vector3(2, 2, 2));
}

var onPointerDown = function (evt)
{
	if (evt.button !== 0)
	{
		return;
	}

	var pickInfo = escena.pick(escena.pointerX, escena.pointerY, function (mesh) { return mesh === chaqueta; });
    if (pickInfo.hit && poniendoDecal == true)
	{
		DibujarFondosDecals(0);
        decalOVERActivo = false;
        decalOVER = escena.getMeshByName("decalOVER");
        if(decalOVER != null) { decalOVER.dispose(); };
		decal = escena.getMeshByName("decal");
		if(decal != null) { decal.dispose(); };
		decal = BABYLON.Mesh.CreateDecal("decal", chaqueta, pickInfo.pickedPoint, pickInfo.getNormal(true), decalSize);
		decal.material = decalMaterial;
		poniendoDecal = false;
	}
	if (pickInfo.hit && poniendoDecal1 == true)
	{
		DibujarFondosDecals(0);
        decalOVERActivo = false;
        decalOVER = escena.getMeshByName("decalOVER");
        if(decalOVER != null) { decalOVER.dispose(); };
		decal1 = escena.getMeshByName("decal1");
		if(decal1 != null) { decal1.dispose(); };
		decal1 = BABYLON.Mesh.CreateDecal("decal1", chaqueta, pickInfo.pickedPoint, pickInfo.getNormal(true), decalSize);
		decal1.material = decalMaterial1;
		poniendoDecal1 = false;
	}
	else if (pickInfo.hit && poniendoDecal2 == true)
	{
		DibujarFondosDecals(0);
        decalOVERActivo = false;
        decalOVER = escena.getMeshByName("decalOVER");
        if(decalOVER != null) { decalOVER.dispose(); };
		decal2 = escena.getMeshByName("decal2");
		if(decal2 != null) { decal2.dispose(); };
		decal2 = BABYLON.Mesh.CreateDecal("decal2", chaqueta, pickInfo.pickedPoint, pickInfo.getNormal(true), decalSize);
		decal2.material = decalMaterial2;
		poniendoDecal2 = false;
	}
    else if (pickInfo.hit && poniendoDecal3 == true)
	{
		DibujarFondosDecals(0);
        decalOVERActivo = false;
        decalOVER = escena.getMeshByName("decalOVER");
        if(decalOVER != null) { decalOVER.dispose(); };
		decal3 = escena.getMeshByName("decal3");
		if(decal3 != null) { decal3.dispose(); };
		decal3 = BABYLON.Mesh.CreateDecal("decal3", chaqueta, pickInfo.pickedPoint, pickInfo.getNormal(true), decalSize);
		decal3.material = decalMaterial3;
		poniendoDecal3 = false;
	}
    else if (pickInfo.hit && poniendoDecal4 == true)
	{
		DibujarFondosDecals(0);
        decalOVERActivo = false;
        decalOVER = escena.getMeshByName("decalOVER");
        if(decalOVER != null) { decalOVER.dispose(); };
		decal4 = escena.getMeshByName("decal4");
		if(decal4 != null) { decal4.dispose(); };
		decal4 = BABYLON.Mesh.CreateDecal("decal4", chaqueta, pickInfo.pickedPoint, pickInfo.getNormal(true), decalSize);
		decal4.material = decalMaterial4;
		poniendoDecal4 = false;
	}
	// resetear el tamaño de los decals despues de crear uno
	decalSize = new BABYLON.Vector3(.5, .5, .5);
	// resaturar el zoom de la camara
	canvas.addEventListener('mousewheel', camara._wheel);
	canvas.addEventListener('DOMMouseScroll', camara._wheel);
}

function init()
{
	//escena.debugLayer.show();
	
	// plano over
	planoOver = BABYLON.Mesh.CreatePlane('planoOver', 1.5, escena);
	planoOver.isVisible = false;
	materialPlanoOver = new BABYLON.StandardMaterial("materialPlanoOver", escena);
	materialPlanoOver.diffuseTexture = new BABYLON.Texture("3D/texturas/Over.png", escena);
	materialPlanoOver.diffuseTexture.hasAlpha = true;
	materialPlanoOver.useAlphaFromDiffuseTexture = true;
	materialPlanoOver.specularColor = new BABYLON.Color3(0,0,0);
	materialPlanoOver.specularPower = 0;
	planoOver.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
	planoOver.material = materialPlanoOver;
	planoOver.renderingGroupId = 3;
	
	
	// tamaño del decal
	decalSize = new BABYLON.Vector3(.5, .5, .5);

	// obtener referencias a las zonas sensibles y ocultarlas
	data_1 = escena.getMeshByName("data_1");
	data_1.isVisible = false;
	data_2 = escena.getMeshByName("data_2");
	data_2.isVisible = false;
	data_3 = escena.getMeshByName("data_3");
	data_3.isVisible = false;
	data_4 = escena.getMeshByName("data_4");
	data_4.isVisible = false;
	chaqueta = escena.getMeshByName("chaqueta");
	cremallera = escena.getMeshByName("cremallera");
	cierre = escena.getMeshByName("cierre");
	relleno = escena.getMeshByName("partes_negras");
	chaqueta.layerMask = 1;
    cremallera.layerMask = 1;
    cierre.layerMask = 1;
    relleno.layerMask = 1;
	chaqueta.isPickable = true;
	
    ////////////////////////////////////////////////////
    materialChaqueta = new BABYLON.ShaderMaterial("masc", escena, "pbrmasc",
        {
            attributes: ["position", "normal", "uv"],
            uniforms: ["worldViewProjection", "world", "worldView", "view", "projection", "viewProjection"]
        });


	materialChaqueta.setTexture("textureSampler", new BABYLON.Texture("3D/texturas/polera_1.png", escena));
	materialChaqueta.setTexture("mapaNormales", new BABYLON.Texture("3D/texturas/normal.jpg", escena));
	materialChaqueta.setTexture("mapaSpec", new BABYLON.Texture("3D/texturas/spec.jpg", escena));
	/*
    materialChaqueta.setTexture("matCap", new BABYLON.Texture("3D/texturas/matCap.jpg", escena));
    materialChaqueta.setTexture("matCap2", new BABYLON.Texture("3D/texturas/matCap2.jpg", escena));
    materialChaqueta.setTexture("matCap3", new BABYLON.Texture("3D/texturas/matCap3.jpg", escena));
    materialChaqueta.setTexture("matCap4", new BABYLON.Texture("3D/texturas/matCap4.jpg", escena));
    materialChaqueta.setTexture("matCap5", new BABYLON.Texture("3D/texturas/matCap5.jpg", escena));
    materialChaqueta.setTexture("matCap6", new BABYLON.Texture("3D/texturas/matCap6.jpg", escena));
    materialChaqueta.setTexture("oa", new BABYLON.Texture("3D/texturas/oa.jpg", escena));
	*/
	chaqueta.material = materialChaqueta;
	//////////////////////////////////
    materialNegro = new BABYLON.ShaderMaterial("negro", escena, "negro",
        {
            attributes: ["position"],
            uniforms: ["worldViewProjection"]
        });
    relleno.material = materialNegro;
    //////////////////////////////////
    metalMaterial = new BABYLON.StandardMaterial("metal", escena);
    metalMaterial.specularColor = new BABYLON.Color3(0.95, 0.95, 0.95);
    metalMaterial.diffuseColor = new BABYLON.Color3(0.125, 0.125, 0.125);
	metalMaterial.specularPower = 128;
    cierre.material = metalMaterial;
    cremallera.material = metalMaterial;
    /////////////////////////////////
	decalMaterial = new BABYLON.StandardMaterial("decalMat", escena);
	decalMaterial.diffuseTexture = new BABYLON.Texture("3D/texturas/logo.png", escena);
    decalMaterial.specularTexture = new BABYLON.Texture("3D/texturas/logo.png", escena);
    decalMaterial.useAlphaFromDiffuseTexture = true;
	decalMaterial.diffuseTexture.hasAlpha = true;
	decalMaterial.zOffset = -2;
	decalMaterial.specularColor = new BABYLON.Color3(255,255, 255);
	decalMaterial.specularPower = 128;
    decalMaterial.alpha = 0.85;
	decalMaterial.useLogarithmicDepth = true;
	//
	decalMaterial1 = new BABYLON.StandardMaterial("decalMat1", escena);
	decalMaterial1.zOffset = -4;
	decalMaterial1.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
	decalMaterial1.specularPower = 128;
    decalMaterial1.alpha = 0.85;
	decalMaterial1.useLogarithmicDepth = true;
    //
    decalMaterial2 = new BABYLON.StandardMaterial("decalMat2", escena);
	decalMaterial2.zOffset = -6;
	decalMaterial2.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
	decalMaterial2.specularPower = 128;
    decalMaterial2.alpha = 0.85;
	decalMaterial2.useLogarithmicDepth = true;
    //
    decalMaterial3 = new BABYLON.StandardMaterial("decalMat3", escena);
	decalMaterial3.zOffset = -8;
	decalMaterial3.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
	decalMaterial3.specularPower = 128;
    decalMaterial3.alpha = 0.85;
	decalMaterial3.useLogarithmicDepth = true;
    //
    decalMaterial4 = new BABYLON.StandardMaterial("decalMat4", escena);
	decalMaterial4.zOffset = -10;
	decalMaterial4.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
	decalMaterial4.specularPower = 128;
    decalMaterial4.alpha = 0.85;
	decalMaterial4.useLogarithmicDepth = true;
    //
    decalMaterial5 = new BABYLON.StandardMaterial("decalMat5", escena);
	decalMaterial5.zOffset = -12;
	decalMaterial5.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
	decalMaterial5.specularPower = 128;
    decalMaterial5.alpha = 0.85;
	decalMaterial5.useLogarithmicDepth = true;
    //

	document.getElementById("renderCanvas").addEventListener("click", onPointerDown, false);
	document.getElementById("renderCanvas").addEventListener("mousewheel", rueda, false);

	escena.onDispose = function () {
		canvas.removeEventListener("click", onPointerDown);
	}
}
var scriptGUI = document.createElement("script");
scriptGUI.id ="scriptGUI";
scriptGUI.src = "js/castorGUI.min.js";
document.body.appendChild(scriptGUI);


var DibujarFondosDecals = function(indice)
{
	
	if(fondosUploadInit)
	{
		fondoUpload1.dispose();
		fondoUpload2.dispose();
		fondoUpload3.dispose();
		fondoUpload4.dispose();	
	}
	else
	{
		fondosUploadInit = true;
	}
	var ColorFondo;
	var ColorHighlight = "#688A08";
	var ColorNormal = "#808080";
	//
	if(indice == 1) { ColorFondo = ColorHighlight; } else { ColorFondo = ColorNormal; };
	fondoUpload1 = new CASTORGUI.GUIPanel("fondoUpload1", { x: 518, y: posicionVerticalUpload, w: 58, h: 58, backgroundColor: ColorFondo, zIndex:21 }, guisystem);
	fondoUpload1.setVisible(true);
	//
	if(indice == 2) { ColorFondo = ColorHighlight; } else { ColorFondo = ColorNormal; };
	fondoUpload2 = new CASTORGUI.GUIPanel("fondoUpload2", { x: 579, y: posicionVerticalUpload, w: 58, h: 58, backgroundColor: ColorFondo, zIndex:22 }, guisystem);
	fondoUpload2.setVisible(true);
	//
	if(indice == 3) { ColorFondo = ColorHighlight; } else { ColorFondo = ColorNormal; };
	fondoUpload3 = new CASTORGUI.GUIPanel("fondoUpload3", { x: 641, y: posicionVerticalUpload, w: 58, h: 58, backgroundColor: ColorFondo, zIndex:23 }, guisystem);
	fondoUpload3.setVisible(true);
	//
	if(indice == 4) { ColorFondo = ColorHighlight; } else { ColorFondo = ColorNormal; };
	fondoUpload4 = new CASTORGUI.GUIPanel("fondoUpload4", { x: 703, y: posicionVerticalUpload, w: 58, h: 58, backgroundColor: ColorFondo, zIndex:24 }, guisystem);
	fondoUpload4.setVisible(true);
	//
}

var DibujarFondosMascaras = function(indice)
{
	if(fondosModelosInit)
	{
		fondoModelo1.dispose();
		fondoModelo2.dispose();
		fondoModelo3.dispose();
		fondoModelo4.dispose();	
	}
	else
	{
		fondosModelosInit = true;
	}
	var ColorFondo;
	var ColorHighlight = "#688A08";
	var ColorNormal = "#808080";
	//
	if(indice == 1) { ColorFondo = ColorHighlight; } else { ColorFondo = ColorNormal; };
	fondoModelo1 = new CASTORGUI.GUIPanel("fondoModelo1", { x: 37, y: 32, w: 58, h: 58, backgroundColor: ColorFondo, zIndex:1 }, guisystem);
	fondoModelo1.setVisible(true);
	//
	if(indice == 2) { ColorFondo = ColorHighlight; } else { ColorFondo = ColorNormal; };
	fondoModelo2 = new CASTORGUI.GUIPanel("fondoModelo2", { x: 101, y: 32, w: 58, h: 58, backgroundColor: ColorFondo, zIndex:2 }, guisystem);
	fondoModelo2.setVisible(true);
	//
	if(indice == 3) { ColorFondo = ColorHighlight; } else { ColorFondo = ColorNormal; };
	fondoModelo3 = new CASTORGUI.GUIPanel("fondoModelo3", { x: 165, y: 32, w: 58, h: 58, backgroundColor: ColorFondo, zIndex:3 }, guisystem);
	fondoModelo3.setVisible(true);
	//
	if(indice == 4) { ColorFondo = ColorHighlight; } else { ColorFondo = ColorNormal; };
	fondoModelo4 = new CASTORGUI.GUIPanel("fondoModelo4", { x: 229, y: 32, w: 58, h: 58, backgroundColor: ColorFondo, zIndex:4 }, guisystem);
	fondoModelo4.setVisible(true);
	//
}

scriptGUI.onload = function ()
{
	
	var canvasGUI = document.getElementById("renderCanvas");
	guisystem = new CASTORGUI.GUIManager(canvasGUI);
	/*
	var callback = function ()
	{		
		color1 =  new BABYLON.Vector3(dialogColor1.getColor().r, dialogColor1.getColor().g, dialogColor1.getColor().b);
		color2 =  new BABYLON.Vector3(dialogColor2.getColor().r, dialogColor2.getColor().g, dialogColor2.getColor().b);
		color3 =  new BABYLON.Vector3(dialogColor3.getColor().r, dialogColor3.getColor().g, dialogColor3.getColor().b);

		materialChaqueta.setVector3("color1", color1);
		materialChaqueta.setVector3("color2", color2);
		materialChaqueta.setVector3("color3", color3);
	};
	var callbackDecal = function ()
    {
        poniendoDecal = true;
        decalOVERActivo = true;
        decalOVERMaterial.diffuseTexture = new BABYLON.Texture("3D/texturas/logo.png", escena);
        decalOVERMaterial.diffuseTexture.hasAlpha = true;
        decalOVERMaterial.useAlphaFromDiffuseTexture = true;
    };
	var callbackModelo1 = function ()
	{
		materialChaqueta.setTexture("textureSampler", new BABYLON.Texture("3D/texturas/polera_1.png", escena));
		DibujarFondosMascaras(1);
	}
	var callbackModelo2 = function ()
	{
		materialChaqueta.setTexture("textureSampler", new BABYLON.Texture("3D/texturas/polera_2.png", escena));
		DibujarFondosMascaras(2);
	}
	var callbackModelo3 = function ()
	{
		materialChaqueta.setTexture("textureSampler", new BABYLON.Texture("3D/texturas/polera_3.png", escena));
		DibujarFondosMascaras(3);
	}
	var callbackModelo4 = function ()
	{
		materialChaqueta.setTexture("textureSampler", new BABYLON.Texture("3D/texturas/polera_4.png", escena));
		DibujarFondosMascaras(4);
	}
    var callbackColorFondo = function ()
	{
		escena.clearColor = new BABYLON.Color3(ColorFondo.getColor().r, ColorFondo.getColor().g, ColorFondo.getColor().b);
        //new BABYLON.Vector3(dialogColor1.getColor().r, dialogColor1.getColor().g, dialogColor1.getColor().b);
	}
	var callBackScreenshot = function()
	{
		bRenderScreenshot = true;
	}
	var fondoBotonera = new CASTORGUI.GUITexture("fondo_botonera", "img/fondo_botonera.jpg", { x: 0, y: 0, w: 800, h: 150 }, guisystem);
	//
	var dialogColor1 = new CASTORGUI.GUIColor("color1", { x: 342, y: 40, w: 30, h: 30, value: "#C0C0C0", zIndex: 1 }, guisystem, callback);
	var dialogColor2 = new CASTORGUI.GUIColor("color2", { x: 385, y: 40, w: 30, h: 30, value: "#FF8000", zIndex: 2 }, guisystem, callback);
	var dialogColor3 = new CASTORGUI.GUIColor("color3", { x: 426, y: 40, w: 30, h: 30, value: "#804020", zIndex: 3 }, guisystem, callback);
	//
	*/
	/*
	var fondoDecal1 = new CASTORGUI.GUIPanel("fondoDecal1", { x: 20, y: posVertical, w: 58, h: 58, backgroundColor: "#808080" }, guisystem);
	fondoDecal1.setVisible(true);
	var imagenDecal1 = new CASTORGUI.GUITexture("decal1", "3D/texturas/logo.png", { x: 24, y: posVertical+4, w: 50, h: 50 }, guisystem, callbackDecal);
	*/
	/*
	posVertical = 32;
	upload(posVertical);
    upload2(posVertical);
    upload3(posVertical);
    upload4(posVertical);
	//
	DibujarFondosMascaras(1);
	DibujarFondosDecals(0);
	//
	var botonModelo1 = new CASTORGUI.GUITexture("botonModelo1", "3D/texturas/Modelo1.png", { x: 37, y: posVertical, w: 58, h: 58, zIndex:100, cursor:"pointer" }, guisystem, callbackModelo1);
	
	var botonModelo2 = new CASTORGUI.GUITexture("botonModelo2", "3D/texturas/Modelo2.png", { x: 101, y: posVertical, w: 58, h: 58, zIndex:101  }, guisystem, callbackModelo2);
	
	var botonModelo3 = new CASTORGUI.GUITexture("botonModelo3", "3D/texturas/Modelo3.png", { x: 165, y: posVertical, w: 58, h: 58, zIndex:102 }, guisystem, callbackModelo3);
	
	var botonModelo4 = new CASTORGUI.GUITexture("botonModelo4", "3D/texturas/Modelo4.png", { x: 229, y: posVertical, w: 58, h: 58, zIndex:103 }, guisystem, callbackModelo4);
	//
    var ColorFondo = new CASTORGUI.GUIColor("colorfondo", { x: 37, y: 110, w: 30, h: 30, value: "#000000", zIndex: 1 }, guisystem, callbackColorFondo);
	posVertical += 40;
	var botonScreenShot = new CASTORGUI.GUIButton("btnScreenshot", {x:653, y: 112, w:100, h:30, value:"Save Design", backgroundColor: "#808080", colorText:"#2E2E2E"}, guisystem, callBackScreenshot);
	*/
	//
	// Texto over
	TextoOver = new CASTORGUI.GUIText("TextoOver", { x: 37, y:187, text:" ", color:"#669900", size:15, police:"Arial" }, guisystem );
	TextoOverSombra = new CASTORGUI.GUIText("TextoOverSombra", { x: 37, y:187, text:" ", color:"#000000", size:15, police:"Arial", zIndex: 20 }, guisystem );
};


















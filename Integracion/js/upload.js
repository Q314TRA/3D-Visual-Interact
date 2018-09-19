var selectorDeArchivo;
var botonUpload1;
var posicionVerticalUpload;
var urlArchivoSubido;

function CallBackUpload1()
{
	DibujarFondosDecals(1);
    poniendoDecal1 = true;
    decalMaterial1.diffuseTexture = new BABYLON.Texture(urlArchivoSubido1, escena);
    decalMaterial1.useAlphaFromDiffuseTexture = true;
	decalMaterial1.diffuseTexture.hasAlpha = true;
    decalOVERActivo = true;
    decalOVERMaterial.diffuseTexture = new BABYLON.Texture(urlArchivoSubido1, escena);
    decalOVERMaterial.diffuseTexture.hasAlpha = true;
    decalOVERMaterial.useAlphaFromDiffuseTexture = true;
}

function subirArchivos1()
{
	var archivoSubido1 = document.getElementById("selectorArchivos1").files[0];
	urlArchivoSubido1 = window.URL.createObjectURL(archivoSubido1);
	botonUpload1.dispose();
	//botonUpload1 = new CASTORGUI.GUITexture("botonUpload1", urlArchivoSubido, { x: 94, y: posicionVerticalUpload+4, w: 48, h: 48 }, guisystem, function() { poniendoDecal2 = true; decalMaterial2.diffuseTexture = new BABYLON.Texture(window.URL.createObjectURL(archivoSubido), escena); });
    botonUpload1 = new CASTORGUI.GUITexture("botonUpload1", urlArchivoSubido1, { x: 523, y: posicionVerticalUpload+4, w: 48, h: 48, zIndex:201 }, guisystem, CallBackUpload1);
}

function upload(posVertical)
{
	posicionVerticalUpload = posVertical;
	selectorDeArchivo1 = document.getElementById("selectorArchivos1");
	//
	var callbackUpload1 = function ()
	{
		selectorDeArchivo1.click();
	}
	//
	
	botonUpload1 = new CASTORGUI.GUITexture("botonUpload1", "img/icono_upload.png", { x: 518, y: posicionVerticalUpload, w: 58, h: 58, zIndex:51 }, guisystem, callbackUpload1);
}

/////////////////////////////////////////////////////////////////////////////////////
var selectorDeArchivo2;
var botonUpload2;
var posicionVerticalUpload2;
var urlArchivoSubido2;

function CallBackUpload2()
{
	DibujarFondosDecals(2);
    poniendoDecal2 = true;
    decalMaterial2.diffuseTexture = new BABYLON.Texture(urlArchivoSubido2, escena);
    decalMaterial2.useAlphaFromDiffuseTexture = true;
	decalMaterial2.diffuseTexture.hasAlpha = true;
    decalOVERActivo = true;
    decalOVERMaterial.diffuseTexture = new BABYLON.Texture(urlArchivoSubido2, escena);
    decalOVERMaterial.diffuseTexture.hasAlpha = true;
    decalOVERMaterial.useAlphaFromDiffuseTexture = true;
}

function subirArchivos2()
{
	var archivoSubido2 = document.getElementById("selectorArchivos2").files[0];
	urlArchivoSubido2 = window.URL.createObjectURL(archivoSubido2);
	botonUpload2.dispose();
	//botonUpload1 = new CASTORGUI.GUITexture("botonUpload1", urlArchivoSubido, { x: 94, y: posicionVerticalUpload+4, w: 48, h: 48 }, guisystem, function() { poniendoDecal2 = true; decalMaterial2.diffuseTexture = new BABYLON.Texture(window.URL.createObjectURL(archivoSubido), escena); });
    botonUpload2 = new CASTORGUI.GUITexture("botonUpload2", urlArchivoSubido2, { x: 584, y: posicionVerticalUpload+4, w: 48, h: 48, zIndex:202 }, guisystem, CallBackUpload2);
}

function upload2(posVertical)
{
	posicionVerticalUpload = posVertical;
	selectorDeArchivo2 = document.getElementById("selectorArchivos2");
	//
	var callbackUpload2 = function ()
	{
		selectorDeArchivo2.click();
	}
	//
	
	botonUpload2 = new CASTORGUI.GUITexture("botonUpload2", "img/icono_upload.png", { x: 579, y: posicionVerticalUpload, w: 58, h: 58, zIndex:52 }, guisystem, callbackUpload2);
}

/////////////////////////////////////////////////////////////////////////////////////
var selectorDeArchivo3;
var botonUpload3;
var posicionVerticalUpload3;
var urlArchivoSubido3;

function CallBackUpload3()
{
	DibujarFondosDecals(3);
    poniendoDecal3 = true;
    decalMaterial3.diffuseTexture = new BABYLON.Texture(urlArchivoSubido3, escena);
    decalMaterial3.useAlphaFromDiffuseTexture = true;
	decalMaterial3.diffuseTexture.hasAlpha = true;
    decalOVERActivo = true;
    decalOVERMaterial.diffuseTexture = new BABYLON.Texture(urlArchivoSubido3, escena);
    decalOVERMaterial.diffuseTexture.hasAlpha = true;
    decalOVERMaterial.useAlphaFromDiffuseTexture = true;
}

function subirArchivos3()
{
	var archivoSubido3 = document.getElementById("selectorArchivos3").files[0];
	urlArchivoSubido3 = window.URL.createObjectURL(archivoSubido3);
	botonUpload3.dispose();
	//botonUpload1 = new CASTORGUI.GUITexture("botonUpload1", urlArchivoSubido, { x: 94, y: posicionVerticalUpload+4, w: 48, h: 48 }, guisystem, function() { poniendoDecal2 = true; decalMaterial2.diffuseTexture = new BABYLON.Texture(window.URL.createObjectURL(archivoSubido), escena); });
    botonUpload3 = new CASTORGUI.GUITexture("botonUpload3", urlArchivoSubido3, { x: 646, y: posicionVerticalUpload+4, w: 48, h: 48, zIndex:203 }, guisystem, CallBackUpload3);
}

function upload3(posVertical)
{
	posicionVerticalUpload = posVertical;
	selectorDeArchivo3 = document.getElementById("selectorArchivos3");
	//
	var callbackUpload3 = function ()
	{
		selectorDeArchivo3.click();
	}
	//
	
	botonUpload3 = new CASTORGUI.GUITexture("botonUpload3", "img/icono_upload.png", { x: 641, y: posicionVerticalUpload, w: 58, h: 58, zIndex:53 }, guisystem, callbackUpload3);
}

/////////////////////////////////////////////////////////////////////////////////////
var selectorDeArchivo4;
var botonUpload4;
var posicionVerticalUpload4;
var urlArchivoSubido4;

function CallBackUpload4()
{
	DibujarFondosDecals(4);
    poniendoDecal4 = true;
    decalMaterial4.diffuseTexture = new BABYLON.Texture(urlArchivoSubido4, escena);
    decalMaterial4.useAlphaFromDiffuseTexture = true;
	decalMaterial4.diffuseTexture.hasAlpha = true;
    decalOVERActivo = true;
    decalOVERMaterial.diffuseTexture = new BABYLON.Texture(urlArchivoSubido4, escena);
    decalOVERMaterial.diffuseTexture.hasAlpha = true;
    decalOVERMaterial.useAlphaFromDiffuseTexture = true;
}

function subirArchivos4()
{
	var archivoSubido4 = document.getElementById("selectorArchivos4").files[0];
	urlArchivoSubido4 = window.URL.createObjectURL(archivoSubido4);
	botonUpload4.dispose();
	//botonUpload1 = new CASTORGUI.GUITexture("botonUpload1", urlArchivoSubido, { x: 94, y: posicionVerticalUpload+4, w: 48, h: 48 }, guisystem, function() { poniendoDecal2 = true; decalMaterial2.diffuseTexture = new BABYLON.Texture(window.URL.createObjectURL(archivoSubido), escena); });
    botonUpload4 = new CASTORGUI.GUITexture("botonUpload4", urlArchivoSubido4, { x: 708, y: posicionVerticalUpload+4, w: 48, h: 48, zIndex:204 }, guisystem, CallBackUpload4);
}

function upload4(posVertical)
{
	posicionVerticalUpload = posVertical;
	selectorDeArchivo4 = document.getElementById("selectorArchivos4");
	//
	var callbackUpload4 = function ()
	{
		selectorDeArchivo4.click();
	}
	//
	
	botonUpload4 = new CASTORGUI.GUITexture("botonUpload4", "img/icono_upload.png", { x: 703, y: posicionVerticalUpload, w: 58, h: 58, zIndex:54 }, guisystem, callbackUpload4);
}
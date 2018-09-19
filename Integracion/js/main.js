var canvas;
var engine;
var escena;
var camara;
var camara2;
var screenshot;
var bRenderScreenshot;
var chaqueta;
var decalOVERActivo;
var decalOVERMaterial;
var decalOVERMaterial1;
var decalOVERMaterial2;
var decalOVERMaterial3;
var decalOVERMaterial4;
var decalOVERMaterial5;
var decalOVER;
// Colores para pasar al shader
var color1 = new BABYLON.Vector3(0.75, 0.75, 0.75);
var color2 = new BABYLON.Vector3(1.0, 0.5, 0.0);
var color3 = new BABYLON.Vector3(0.5, 0.25, 0.125);

// Precargar texturas
var images = [];
function preload() {
    for (i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "3D/texturas/polera_1.png",
    "3D/texturas/polera_2.png",
    "3D/texturas/polera_3.png",
	"3D/texturas/polera_4.png",
	"3D/texturas/normal.jpg",
	"3D/texturas/spec.jpg"	
)

window.ondragstart = function() { return false; } 

// Get the canvas element from our HTML above
if (BABYLON.Engine.isSupported())
{
	canvas = document.getElementById("renderCanvas");
	engine = new BABYLON.Engine(canvas, true);
};
BABYLON.SceneLoader.ShowLoadingScreen = true;

BABYLON.SceneLoader.Load("", "3D/escena.babylon", engine, function (newScene)
{
	// Wait for textures and shaders to be ready
	newScene.executeWhenReady(function ()
	{
		escena = newScene;
		bRenderScreenshot = false;
		// Camara a mano ----
		var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 5, 1.4, 12.5, new BABYLON.Vector3(0, 0, 0), newScene);
		camera.lowerRadiusLimit = 5;
		camera.upperRadiusLimit = 15;
		camera.wheelPrecision = 20;
		camera.panningSensibility = 1000;
		newScene.activeCamera = camera;
		newScene.activeCamera.attachControl(canvas, true);
		camara = camera;
        camara2 = new BABYLON.ArcRotateCamera("ArcRotateCamera2", 5, 1.4, 12.5, new BABYLON.Vector3(0, 0, 0), newScene);
        camara2.viewport = new BABYLON.Viewport(0.0, 0.0, 1.0, 1.0);
        //escena.activeCameras.push(camara2);
        escena.activeCameras.push(camara);
        camara.layerMask = 1;
        camara2.layerMask = 2;
        // FIN Camara a mano ----
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // RTT
		/*
        // depth material
        BABYLON.Effect.ShadersStore["depthVertexShader"] = 
            "#ifdef GL_ES\n" +
            "precision highp float;\n" +
            "#endif\n" +
            "attribute vec3 position;\n" +
            "uniform mat4 worldViewProjection;\n" +
            "void main(void) {\n" +
            "gl_Position = worldViewProjection * vec4(position, 1.0);\n" +
            "}";
        BABYLON.Effect.ShadersStore["depthPixelShader"] =
            "#ifdef GL_ES\n" +
            "precision highp float;\n" +
            "#endif\n" +

            "void main(void) {\n" +
            //"float depth =  1.0 - (2.0 / (100.0 + 1.0 - gl_FragCoord.z * (100.0 - 1.0)));\n" +
            "float depth =  0.5 - (1.0 / (40.0 + 0.5 - gl_FragCoord.z * (40.0 - 0.5)));\n" +
            //"float alfa = 0.0;\n" +
            //"if(depth != 0.0){alfa = 1.0;} else {alfa = 0.0;};\n" +
            "gl_FragColor = vec4(depth, depth, depth, depth);\n" +
            "}\n" +
            "";

        var depthMaterial = new BABYLON.ShaderMaterial("depth", escena, "depth",
            {
                attributes: ["position"],
                uniforms: ["worldViewProjection"]
            });
        depthMaterial.backFaceCulling = false;
		
		// Activar el highlight
        rtt(depthMaterial);
		*/
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		init();
		materialChaqueta.setVector3("color1", color1);
		materialChaqueta.setVector3("color2", color2);
		materialChaqueta.setVector3("color3", color3);
        // luz para los decals
        var luzHemi = new BABYLON.HemisphericLight("luzHemi", escena.activeCamera.position, escena);
        luzHemi.diffuse = new BABYLON.Color3(1, 1, 1);
        luzHemi.specular = new BABYLON.Color3(1, 1, 1);
        luzHemi.groundColor = new BABYLON.Color3(1, 1, 1);
        //luz para el especular de los decals
        var luzSpec = new BABYLON.PointLight("luzSpec", escena.activeCamera.position, escena);
        luzSpec.diffuse = new BABYLON.Color3(0, 0, 0);
        luzSpec.specular = new BABYLON.Color3(1, 1, 1);
        // Material del decal over --------------------
        decalOVERMaterial = new BABYLON.StandardMaterial("decalMat", escena);
        //decalOVERMaterial.alpha = 0.5;
        decalOVERMaterial.zOffset = -2;
        decalOVERMaterial.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
        decalOVERMaterial.specularPower = 128;
        decalOVERMaterial.alpha = 0.85;
        // Material del decal over2 --------------------
        decalOVERMaterial2 = new BABYLON.StandardMaterial("decalMat", escena);
        //decalOVERMaterial.alpha = 0.5;
        decalOVERMaterial2.zOffset = -2;
        decalOVERMaterial2.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
        decalOVERMaterial2.specularPower = 128;
        // Material del decal over3 --------------------
        decalOVERMaterial3 = new BABYLON.StandardMaterial("decalMat", escena);
        //decalOVERMaterial.alpha = 0.5;
        decalOVERMaterial3.zOffset = -2;
        decalOVERMaterial3.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
        decalOVERMaterial3.specularPower = 128;
        // Material del decal over4 --------------------
        decalOVERMaterial4 = new BABYLON.StandardMaterial("decalMat", escena);
        //decalOVERMaterial.alpha = 0.5;
        decalOVERMaterial4.zOffset = -2;
        decalOVERMaterial4.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
        decalOVERMaterial4.specularPower = 128;
        // Material del decal over5 --------------------
        decalOVERMaterial5 = new BABYLON.StandardMaterial("decalMat", escena);
        //decalOVERMaterial.alpha = 0.5;
        decalOVERMaterial5.zOffset = -2;
        decalOVERMaterial5.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25);
        decalOVERMaterial5.specularPower = 128;
        // OVERDecal es falso por defecto
        decalOVERActivo = false;
		// Once the scene is loaded, just register a render loop to render it
		engine.runRenderLoop(function() {
            // empatar la camara2 con la activa antes de renderear
            camara2.setPosition(camara.position);
            camara2.rotation = camara.rotation;
            //
			materialChaqueta.setVector3("cameraPosition", escena.activeCamera.position);
            luzHemi.position = escena.activeCamera.position;
            luzSpec.position = escena.activeCamera.position;
            if(decalOVERActivo)
            {
				canvas.removeEventListener('mousewheel', camera._wheel);
				canvas.removeEventListener('DOMMouseScroll', camera._wheel);
                var pickInfo = escena.pick(escena.pointerX, escena.pointerY, function (mesh) { return mesh === chaqueta; });
                decalOVER = escena.getMeshByName("decalOVER");
                if (pickInfo.hit)
                {
                    if(decalOVER != null) { decalOVER.dispose(); };
                    decalOVER = BABYLON.Mesh.CreateDecal("decalOVER", chaqueta, pickInfo.pickedPoint, pickInfo.getNormal(true), decalSize);
                    decalOVER.material = decalOVERMaterial;
                }
                else
                {
                    if(decalOVER != null) { decalOVER.dispose(); }; 
                }
            }
            else
            {
				var Rayo = escena.createPickingRay(escena.pointerX, escena.pointerY, BABYLON.Matrix.Identity(), camera);
				var hitInfo = escena.pickWithRay(Rayo, function(mesh) { return mesh.isPickable && mesh.isEnabled()}, false);
				if(hitInfo.pickedMesh != null)
				{
					if(hitInfo.pickedMesh.name == "data_1")
					{
						presentarTexto(hitInfo);
						TextoOver.updateText("<b>Metallic, water <br> proof zipper.</b>");
						TextoOverSombra.updateText("<b>Metallic, water <br> proof zipper.</b>");
					}
					else if(hitInfo.pickedMesh.name == "data_2")
					{
						presentarTexto(hitInfo);
						TextoOver.updateText("<b>Fully seam sealed, <br> breathable material.</b>");
						TextoOverSombra.updateText("<b>Fully seam sealed, <br> breathable material.</b>");
					}
					else if(hitInfo.pickedMesh.name == "data_3")
					{
						presentarTexto(hitInfo);
						TextoOver.updateText("<b>Adjustable sleeve cuffs.</b>");
						TextoOverSombra.updateText("<b>Adjustable sleeve cuffs.</b>");
					}
					else if(hitInfo.pickedMesh.name == "data_4")
					{
						presentarTexto(hitInfo);
						TextoOver.updateText("<b>Zippered <br> back pocket.</b>");
						TextoOverSombra.updateText("<b>Zippered <br> back pocket.</b>");
					}
					else
					{
						TextoOver.updateText("");
						TextoOverSombra.updateText("");
						planoOver.isVisible = false;
						//planoOver.visibility = 0.0;
					}
				}
				else
				{
					TextoOver.updateText("");
					TextoOverSombra.updateText("");
					planoOver.isVisible = false;
					//planoOver.visibility = 0.0;
				}
            }
			newScene.render();
			// renderear un screenshot si es necesario
			if(bRenderScreenshot)
			{
				// colores en hex
				hex1 = rgbToHex(color1.x, color1.y, color1.z);
				hex2 = rgbToHex(color2.x, color2.y, color2.z);
				hex3 = rgbToHex(color3.x, color3.y, color3.z);
				//
				bRenderScreenshot = false;
				var dataURL = canvas.toDataURL("image/png");
				var img = new Image();
				img.src = dataURL;
				parent.capturar_imagen(img, hex1, hex2, hex3);
			}
			//
		});
	});
}, function (progress) {
	// To do: give progress feedback to user
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function ()
{
	engine.resize();
});

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(parseInt(r * 255)) + componentToHex(parseInt(g * 255)) + componentToHex(parseInt(b * 255));
}

function presentarTexto(hitInfo)
{
	planoOver.position = hitInfo.pickedMesh.position;
	planoOver.isVisible = true;
	if(TextoOver != null) { TextoOver.dispose(); };
	if(TextoOverSombra != null) { TextoOverSombra.dispose(); };
	var p = BABYLON.Vector3.Project(hitInfo.pickedMesh.position, BABYLON.Matrix.Identity(), escena.getTransformMatrix(), camara.viewport.toGlobal(engine));
	if(p.x > 500) { p.x = 500; };
	TextoOver = new CASTORGUI.GUIText("TextoOver", { x: p.x + 75, y:p.y - 20, text:" ", color:"#669900", size:15, police:"Arial", zIndex: 20 }, guisystem );
	TextoOverSombra = new CASTORGUI.GUIText("TextoOverSombra", { x: p.x + 76, y:p.y - 19, text:" ", color:"#000000", size:15, police:"Arial" }, guisystem );
}
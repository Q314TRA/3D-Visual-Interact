function rtt(depthMaterial)
{
    console.log("ejecutando RTT");
    
    // Copia de la chaqueta
    var chaqueta = escena.getMeshByName("chaqueta");
    chaqueta.clone("highlights");
    var highlights = escena.getMeshByName("highlights");
    //highlights.hasVertexAlpha = true;
    highlights.layerMask = 2;
    
    // material de la chaqueta
    BABYLON.Effect.ShadersStore["shaderhighlightVertexShader"] = 
        "#ifdef GL_ES\n" +
        "precision highp float;\n" +
        "#endif\n" +
        "attribute vec3 position;\n" +
        "attribute vec2 uv;\n" +
        "varying vec2 vUV;\n" +
        "uniform mat4 worldViewProjection;\n" +
        "void main(void) {\n" +
        "vUV = uv;\n" +
        "gl_Position = worldViewProjection * vec4(position, 1.0);\n" +
        "}";
    BABYLON.Effect.ShadersStore["shaderhighlightPixelShader"] =
        "#ifdef GL_ES\n" +
        "precision highp float;\n" +
        "#endif\n" +
        "uniform sampler2D mascaraRGB;\n" +
        "varying vec2 vUV;\n" +

        "void main(void) {\n" +
        "float depth =  1.0 - (2.0 / (100.0 + 1.0 - gl_FragCoord.z * (100.0 - 1.0)));\n" +
        "gl_FragColor = vec4(depth, depth, depth, 0.5);\n" +
        "float final = texture2D(mascaraRGB, vUV).g;\n" +
        "if(final >= 0.2) { final = 1.0; }\n" +
        "else { final = 0.0; };\n" + 
        "gl_FragColor = vec4(final, final, final, 1.0);\n" +
        "}\n" +
        "";

    var MaterialHighlights = new BABYLON.ShaderMaterial("shaderhighlight", escena, "shaderhighlight",
        {
            //needAlphaBlending: true,
            //attributes: ["position"],
            attributes: ["position", "normal", "uv"],
            uniforms: ["worldViewProjection"]
        });
    MaterialHighlights.backFaceCulling = true;
    MaterialHighlights.setTexture("mascaraRGB", new BABYLON.Texture("3D/texturas/polera_1.png", escena));
    highlights.material = MaterialHighlights;
    
    // Render target
    var Textura_Highlights = new BABYLON.RenderTargetTexture("Textura_Highlights", 1024, escena);
    escena.customRenderTargets.push(Textura_Highlights);
    Textura_Highlights.renderList.push(highlights);
    Textura_Highlights.activeCamera = camara2;
    var TexturaBase = new BABYLON.Texture("3D/texturas/polera_1.png", escena);
    
    // camara de highlights
    var PostProcessHighlights0 = new BABYLON.BlurPostProcess("Horizontal blur", new BABYLON.Vector2(1.5, 0.0), 4.0, 1.0, camara2, null, engine, true);
    var PostProcessHighlights1 = new BABYLON.BlurPostProcess("Horizontal blur", new BABYLON.Vector2(0.0, 1.5), 4.0, 1.0, camara2, null, engine, true);
    var PostProcessHighlights2 = new BABYLON.PassPostProcess("PostProcessHighlights", 1.0, camara2);
    var postProcess = new BABYLON.PostProcess("Highlights_PostProcess", "./src/Shaders/Highlights_PostProcess", ["PaseHighlights", "pok"], ["PaseHighlights", "extra"], 1.0, camara,  BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, true);
    
    postProcess.onApply = function (effect)
    {
        effect.setTextureFromPostProcess("PaseHighlights", PostProcessHighlights2);
    };    
}
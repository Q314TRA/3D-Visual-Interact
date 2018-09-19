precision highp float;

// Samplers
varying vec2 vUV;
uniform sampler2D textureSampler;
uniform sampler2D PaseHighlights;
uniform sampler2D extra;

void main(void) 
{
    vec4 baseColor = texture2D(textureSampler, vUV);
    vec4 highlights = texture2D(PaseHighlights, vUV);
    gl_FragColor = baseColor + (highlights * 0.75);
}
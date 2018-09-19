precision highp float;

attribute vec3 position;
uniform mat4 worldViewProjection;

void main(void) {
    vec4 outPosition = worldViewProjection * vec4(position, 1.0);
    gl_Position = outPosition;
}
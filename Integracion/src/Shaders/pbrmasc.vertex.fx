
precision highp float;

// Attributes
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec4 tangent;

// Uniforms
uniform mat4 worldViewProjection;
uniform mat4 world;
uniform mat4 worldView;
uniform mat4 view;
uniform mat4 projection;
uniform mat4 viewProjection;
// Varying
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;
// varyings del matcap
varying vec3 e;
varying vec3 n;
varying vec3 fNormal;
varying vec3 fPosition;
// varyings del fresnel
varying vec3 vNormalW;
varying vec3 vPositionW;
// normales
varying vec2 vBumpUV;
uniform vec2 vBumpInfos;
uniform mat4 bumpMatrix;
varying mat3 tbn;
varying vec3 vBiNormal;
varying vec3 vTangent;

void main(void) {
    vec4 outPosition = worldViewProjection * vec4(position, 1.0);
    gl_Position = outPosition;
    
    vUV = uv;
    vPosition = position;
    vNormal = normal;
	vNormalW = normalize(vec3(world * vec4(normal, 0.0)));
	vPositionW = vec3(world * vec4(position, 1.0));
	
	e = normalize( vec3( worldViewProjection * vec4( position, 1.0 ) ) );
	n = normalize( mat3(worldView) * normal );
	fNormal = normalize(n * vPositionW);
	// normales
	vBumpUV = vec2(bumpMatrix * vec4(uv, 1.0, 0.0));
	vTangent = normalize(vec3(world * vec4(tangent.xyz, 0.0)));

	vec3 c1 = cross( normal, vec3(0.0, 0.0, 1.0) ); 
	vec3 c2 = cross( normal, vec3(0.0, 1.0, 0.0) ); 

	if( length(c1)>length(c2) )
	{
		vTangent = c1;	
	}
	else
	{
		vTangent = c2;	
	}
	vBiNormal = normalize(cross(vNormalW, vTangent) * tangent.w);
	tbn = mat3(vTangent, vBiNormal, vNormalW);
}
	
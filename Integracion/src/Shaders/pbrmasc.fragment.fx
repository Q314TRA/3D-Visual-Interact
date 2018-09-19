
precision highp float;
#extension GL_OES_standard_derivatives : enable
// Varying
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;

// Uniforms
uniform mat4 world;
uniform mat4 worldView;

// Refs
uniform vec3 cameraPosition;
uniform vec3 KeyLightPos;
uniform sampler2D textureSampler;
uniform sampler2D mapaNormales;
uniform sampler2D mapaSpec;
uniform sampler2D matCap;
uniform sampler2D matCap2;
uniform sampler2D matCap3;
uniform sampler2D matCap4;
uniform sampler2D matCap5;
uniform sampler2D matCap6;
uniform sampler2D oa;

// varyings del matcap
varying vec3 e;
varying vec3 n;
varying vec3 fNormal;
// varyings del fresnel
varying vec3 vNormalW;
varying vec3 vPositionW;
//varyings de las normales
varying vec2 vBumpUV;
uniform vec2 vBumpInfos;
varying mat3 tbn;
varying vec3 vBiNormal;
varying vec3 vTangent;
// colores
uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;

// funciones
mat3 cotangent_frame(vec3 normal, vec3 p, vec2 uv)
{
	// get edge vectors of the pixel triangle
	vec3 dp1 = dFdx(p);
	vec3 dp2 = dFdy(p);
	vec2 duv1 = dFdx(uv);
	vec2 duv2 = dFdy(uv);

	// solve the linear system
	vec3 dp2perp = cross(dp2, normal);
	vec3 dp1perp = cross(normal, dp1);
	vec3 tangent = dp2perp * duv1.x + dp1perp * duv2.x;
	vec3 binormal = dp2perp * duv1.y + dp1perp * duv2.y;

	// construct a scale-invariant frame 
	float invmax = inversesqrt(max(dot(tangent, tangent), dot(binormal, binormal)));
	return mat3(tangent * invmax, binormal * invmax, normal);
}

vec3 perturbNormal(vec3 viewDir)
{
	vec3 map = texture2D(mapaNormales, vBumpUV).xyz;
	map = map * 255. / 127. - 128. / 127.;
	mat3 TBN = cotangent_frame(vNormalW * vBumpInfos.y, -viewDir, vBumpUV);
	return normalize(TBN * map);
}

void main(void) {
	// Keylight
	vec3 keyLight = cameraPosition + vec3(1,5,-20);
	//vec3 keyLight = KeyLightPos;
	// filllight
	vec3 fillLight = cameraPosition + vec3(-1,5,20);
    
    // World values
    vec3 vPositionW = vec3(world * vec4(vPosition, 1.0));
    vec3 vNormalW = normalize(vec3(world * vec4(vNormal, 0.0)));
    vec3 viewDirectionW = normalize(cameraPosition - vPositionW);
    
    // Vectores de luces
	vec3 keyLightVector = normalize(keyLight - vPositionW);
	vec3 fillLightVector = normalize(fillLight - vPositionW);
	
	// color de la mascara
    vec3 color = texture2D(textureSampler, vUV).rgb;
		
    // obtener el nivel difuso dependiendo de las luces
	float ndl = max(0., dot(vNormalW, keyLightVector));
	ndl += max(0., dot(vNormalW, fillLightVector));
	
	// correccion de color
	if(color.r >= 0.8 && color.g <= 0.2 && color.b <= 0.2)
	{
		color = color1;
	}
	else if(color.g >= 0.8 && color.r <= 0.2 && color.b <= 0.2)
	{
		color = color2;
	}
	else if(color.b >= 0.8 && color.g <= 0.2 && color.r <= 0.2)
	{
		color = color3;
	}
	else
	{
		color = color1;
	}
	
	
	
	//////////////// Calcular el matcap ////////////////

	vec3 e = normalize( vec3( worldView * vec4(vPosition, 1.) ) );
    vec3 n = normalize( worldView * vec4(vNormal, 0.0) ).xyz;

    vec3 r = reflect( e, n );
    float m = 2. * sqrt(
        pow( r.x, 2. ) +
        pow( r.y, 2. ) +
        pow( r.z + 1., 2. )
    );
    vec2 vN = r.xy / m + .5;

    vec3 luzMatCap = texture2D( matCap, vN).rgb;
	vec3 luzMatCap2 = texture2D( matCap2, vN).rgb;
	vec3 luzMatCap3 = texture2D( matCap3, vN).rgb;

	//////////////// FIN Calcular el matcap ////////////////
	
 
	/////////////// Calcular el fresnel ///////////////////
	
	vec3 colorFresnel = vec3(1., 1., 1.);
    float fresnelTerm = dot(viewDirectionW, vNormalW);
    fresnelTerm = clamp(1.0 - fresnelTerm, 0., 1.);
	vec4 FresnelFinal = vec4(colorFresnel * fresnelTerm, 1.);
	float intensidadFresnel = .33;
	FresnelFinal *= intensidadFresnel;
	float fresnelTermInv = (fresnelTerm * -1.) + 1.;
	fresnelTermInv = pow(fresnelTermInv, 4.);
	vec4 FresnelFinalInv = vec4( vec3((FresnelFinal * -1.) + vec4(1.)), 1. );
	/////////////// FIN Calcular el fresnel ///////////////////
	
	///////////////// Calcular Normales /////////////////
	
	vec3 normalCoordinate = texture2D(mapaNormales, vUV).rgb * 2.0 - 1.0;
	vec3 normal = normalize(tbn * normalCoordinate);
	float intensity = max(0.07, dot(normal, keyLightVector));
	float intensidadNormalesSpec = intensity;
	intensity += max(0.07, dot(normal, fillLightVector));
	intensity *= .25;
	vec4 lighting = vec4(intensity, intensity, intensity, 1.0);
	// agregar luz de ambiente
	lighting += 0.25;
	///////////////// FIN Calcular Normales /////////////////
	
	
	//////////////// Luz Frontal ////////////////////////////
	
	float luzFrontal = max(0.07, dot(normal, viewDirectionW));
	float intensidadLuzFrontal = .75;
	float escalaLuzFrontal = 16.0;
	luzFrontal = pow(luzFrontal, escalaLuzFrontal);
	luzFrontal *= intensidadLuzFrontal;
	luzFrontal = clamp(luzFrontal, 0.,0.9);
	
	//////////////// FIN Luz Frontal ////////////////////////

	
	///////////////// Especular /////////////////////////////

	// obtener nivel especular de la textura
	vec3 spec = texture2D(mapaSpec, vUV).rgb;
	float hardness = 4.;
	float intensidadEspecular = .25;
	
	
    vec3 angleW = normalize(viewDirectionW + keyLightVector + fillLightVector);
	//vec3 angleW = normalize(viewDirectionW + fillLightVector);
    float specComp = max(0., dot(vNormalW, angleW));
    specComp = pow(specComp, max(1., hardness)) * 2.;
	
	vec4 especularFinal = vec4(vec3(specComp), 1.) * vec4(spec, 1.);
	especularFinal *= vec4(vec3(normal.r), 1.);
	especularFinal *= intensidadEspecular;
	especularFinal = clamp(especularFinal, vec4(0,0,0,1), vec4(1));
	
	vec4 especularFrontal = vec4(vec3(luzFrontal * spec), 1.);
	
	///////////////// FIN Especular /////////////////////////
	
	
	vec3 oclusion = texture2D( oa, vUV).rgb;
	
	
	vec4 difusoFinal = vec4( color  * ndl, 1.);
	difusoFinal *= lighting;
	difusoFinal += (FresnelFinal )* vec4(spec, 1.);
	//difusoFinal += vec4( luzMatCap, 1. ) * .5 * vec4(spec, 1.);
	//difusoFinal += vec4( luzMatCap2, 1. ) * .5 * vec4(spec, 1.);
	//difusoFinal += vec4( luzMatCap3, 1. ) * .5 * vec4(spec, 1.);
	difusoFinal += difusoFinal * vec4(spec, 1.);
	//difusoFinal *= vec4(oclusion, 1.);
	
	//float uvnormal = max(0.07, dot(normal, viewDirectionW)) ;
	float uvnormal = dot(normal, viewDirectionW);
	vec3 colorMat = texture2D( matCap4, vec2(uvnormal, uvnormal)).rgb;
	
	//gl_FragColor = vec4( vec3(luzFrontal * spec * oclusion.r), 1.);
	gl_FragColor = difusoFinal + especularFrontal;
}
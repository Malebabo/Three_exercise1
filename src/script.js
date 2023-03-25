import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const radius = 10;
const sectors = 16;
const rings = 18;
const divisions = 64;

const helper = new THREE.PolarGridHelper( radius, sectors, rings, divisions ); 
helper.position.y = -2.5;
scene.add( helper );

const geometry = new THREE.CapsuleGeometry( 0.13, 0.07, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const leg1 = new THREE.Mesh( geometry, material );
leg1.position.y = -2.35;
leg1.position.x = -0.2;
scene.add( leg1);

const geometry1 = new THREE.CapsuleGeometry( 0.13, 0.07, 4, 8 );
const material1 = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const leg2 = new THREE.Mesh( geometry1, material1 );
leg2.position.y = -2.35;
leg2.position.x = 0.2;
scene.add( leg2);

const geometry2 = new THREE.SphereGeometry( 0.7, 32, 16 );
const material2 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const bottom = new THREE.Mesh( geometry2, material2 );
bottom.position.y = -1.7;
scene.add( bottom );

const geometry3 = new THREE.SphereGeometry( 0.6, 32, 16 );
const material3 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const middle = new THREE.Mesh( geometry3, material3 );
middle.position.y = -0.9;
scene.add( middle );

const geometry4 = new THREE.TorusGeometry( 0.48, 0.1, 16, 100 );
const material4 = new THREE.MeshBasicMaterial( { color: 0xdc2f02 } );
const scuff = new THREE.Mesh( geometry4, material4 );
scuff.position.y = -0.48;
scuff.rotation.x += 30;
scene.add( scuff );

const geometry5 = new THREE.SphereGeometry( 0.5, 32, 16 );
const material5 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const head = new THREE.Mesh( geometry5, material5 );
head.position.y = -0.14;
scene.add( head );

const geometry6 = new THREE.TorusGeometry( 0.55, 0.14, 16, 100 );
const material6 = new THREE.MeshBasicMaterial( { color: 0x403d39 } );
const hatBase = new THREE.Mesh( geometry6, material6 );
hatBase.position.y = 0.2;
hatBase.rotation.x += 30;
scene.add( hatBase );

const geometry7 = new THREE.CylinderGeometry( 0.5, 0.5, 0.5, 32 );
const material7 = new THREE.MeshBasicMaterial( {color: 0x403d39} );
const hat = new THREE.Mesh( geometry7, material7 );
hat.position.y = 0.48;
scene.add( hat );

class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {

		super();

		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}

}

const path = new CustomSinCurve( 0.4);
const geometry8 = new THREE.TubeGeometry( path, 20, 0.08, 8, false );
const material8 = new THREE.MeshBasicMaterial( { color: 0xbc6c25 } );
const hand1 = new THREE.Mesh( geometry8, material8 );
hand1.position.y = -0.5;
hand1.position.x = 0.35;
scene.add( hand1 );

const path1 = new CustomSinCurve( 0.4);
const geometry9 = new THREE.TubeGeometry( path, 20, 0.08, 8, false );
const material9 = new THREE.MeshBasicMaterial( { color: 0xbc6c25 } );
const hand2 = new THREE.Mesh( geometry9, material9 );
hand2.position.y = -0.48;
hand2.position.x = -0.37;
hand2.rotation.y += 450;
scene.add( hand2 );

const geometry10 = new THREE.CircleGeometry( 0.04, 32 );
const material10 = new THREE.MeshBasicMaterial( { color: 0x252422 } );
const button = new THREE.Mesh( geometry10, material10 );
button.position.y = -1.86;
button.position.z = 0.7;
scene.add( button );

const geometry11 = new THREE.CircleGeometry( 0.04, 32 );
const material11 = new THREE.MeshBasicMaterial( { color: 0x252422 } );
const button1 = new THREE.Mesh( geometry11, material11 );
button1.position.y = -1.65;
button1.position.z = 0.7;
scene.add( button1 );

const geometry12 = new THREE.CircleGeometry( 0.04, 32 );
const material12 = new THREE.MeshBasicMaterial( { color: 0x252422 } );
const button2 = new THREE.Mesh( geometry12, material12 );
button2.position.y = -1.4;
button2.position.z = 0.697;
scene.add( button2 );

const geometry13 = new THREE.CircleGeometry( 0.04, 32 );
const material13 = new THREE.MeshBasicMaterial( { color: 0x252422 } );
const button3 = new THREE.Mesh( geometry13, material13 );
button3.position.y = -0.9;
button3.position.z = 0.658;
scene.add( button3 );

const geometry14 = new THREE.CylinderGeometry( 0.1, 0.1, 0.3, 32 );
const material14 = new THREE.MeshBasicMaterial( {color: 0xdc2f02} );
const scuff1 = new THREE.Mesh( geometry14, material14 );
scuff1.position.y = -0.75;
scuff1.position.z = 0.5;
scuff1.position.x = 0.27; 
scene.add( scuff1 );

const geometry15 = new THREE.CircleGeometry( 0.05, 32 );
const material15 = new THREE.MeshBasicMaterial( { color: 0x252422 } );
const eye1 = new THREE.Mesh( geometry15, material15 );
eye1.position.y = -0.11;
eye1.position.z = 0.472;
eye1.position.x = 0.26;
scene.add( eye1 );

const geometry16 = new THREE.CircleGeometry( 0.05, 32 );
const material16 = new THREE.MeshBasicMaterial( { color: 0x252422 } );
const eye2 = new THREE.Mesh( geometry16, material16 );
eye2.position.y = -0.11;
eye2.position.z = 0.472;
eye2.position.x = -0.2;
scene.add( eye2 );

const geometry17 = new THREE.ConeGeometry( 0.15, 0.3, 32 );
const material17 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const nose = new THREE.Mesh( geometry17, material17 );
nose.position.y = -0.20;
nose.position.z = 0.472;
nose.rotation.x += -30;
scene.add( nose );

const geometry18 = new THREE.CircleGeometry( 0.2, 32 );
const material18 = new THREE.MeshBasicMaterial( { color: 0x252422 } );
const mouth= new THREE.Mesh( geometry18, material18 );
mouth.position.y = -0.29;
mouth.position.z = 0.4;
mouth.rotation.x += -1;
scene.add( mouth );

const controls = new OrbitControls( camera, renderer.domElement );

camera.position.z = 5;
controls.update();
          
function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
			
}
animate();

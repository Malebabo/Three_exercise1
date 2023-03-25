import * as THREE from 'three';

const scene = new THREE.Scene();
const x = 0, y = 0;

const camera = new THREE.PerspectiveCamera( 75,
     window.innerWidth / window.innerHeight,
      0.1,
       1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 40, 1.5, 5 );
const material = new THREE.MeshBasicMaterial( {color: 0xdad7cd, transparent: true, opacity: 0.5} );
const base = new THREE.Mesh( geometry, material );
base.position.y = -10;
scene.add( base );

const geometry1 = new THREE.BoxGeometry( 15, 2.5, 3.5 );
const material1 = new THREE.MeshBasicMaterial( {color: 0x778da9, transparent: true, opacity: 0.5} );
const stand = new THREE.Mesh( geometry1, material1 );
stand.position.x = -3;
stand.position.y = -6.23;
stand.position.z = 4;
scene.add( stand );

const geometry2 = new THREE.CylinderGeometry( 3, 3, 13, 32 );
const material2 = new THREE.MeshBasicMaterial( {color: 0x4a4e69,  transparent: true, opacity: 0.5} );
const container= new THREE.Mesh( geometry2, material2 );
container.position.x = 8.3;
container.position.y = -0.5;
container.position.z = 4;
scene.add( container );

const geometry3 = new THREE.CylinderGeometry( 2.7, 2.7, 8, 32 );
const material3 = new THREE.MeshBasicMaterial( {color: 0x4a4e69, transparent: true, opacity: 0.5} );
const perfume= new THREE.Mesh( geometry3, material3 );
perfume.position.x = -3;
perfume.position.y = -1;
perfume.position.z = 3.2;
scene.add( perfume );

const geometry4 = new THREE.DodecahedronGeometry( 1.5, 2 );
const material4 = new THREE.MeshBasicMaterial( {color: 0xfaa307, transparent: true, opacity: 0.5} );
const lid = new THREE.Mesh( geometry4, material4 );
lid.position.x = -3;
lid.position.y = 3.7;
lid.position.z = 3.5;
scene.add( lid );

const geometry5 = new THREE.IcosahedronGeometry( 2.8, 0 );
const material5 = new THREE.MeshBasicMaterial( {color: 0xfaa307, transparent: true, opacity: 0.5} );
const cap = new THREE.Mesh( geometry5, material5 );
cap.position.x = -3;
cap.position.y = 6.5;
cap.position.z = 3.6;
scene.add( cap );



//camera.position.y = 4;
camera.position.z = 25;
renderer.render(scene,camera);

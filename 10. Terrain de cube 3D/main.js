// Importation des modules nécessaires
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Perlin, FBM } from 'three-noise';

// Création d'un bruit perlin
const fbm = new FBM({
    seed: Math.random(),
    scale: 0.06,
    octaves: 6,
    persistence: 0.5,
    lacunarity: 2,
    redistribution: 1,
    height: 0
});

// Création de la scène 
const scene = new THREE.Scene();

// Création de la caméra
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);

// Création du renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);

// Création des contrôles
const controls = new OrbitControls(camera, renderer.domElement);
// Création de la géométrie
const geometry = new THREE.BoxGeometry(1, 1, 1);
const texture = new THREE.TextureLoader().load('grass.jpg');
const material = new THREE.MeshBasicMaterial({ 
    map: texture
});

// Création de la boucle pour créer les cubes
const width = 50;
const depth = 50;
for (var x = 0; x < width; x++) {
    for (var y = 0; y < depth; y++) {
        const pos = new THREE.Vector2(x, y);
        const height = fbm.get2(pos);
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = x - width / 2;
        cube.position.y = height * 7;   
        cube.position.z = y - depth / 2;
        cube.scale.setScalar(1)
        scene.add(cube);
    }
}

// Positionnement de la caméra
camera.position.z = -10;
camera.position.y = 30;
camera.position.x = 10;
camera.position.height = 10;

// Création de la lumière ambiante
const ambienLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambienLight);

// Création de la lumière directionnelle
const dirLight = new THREE.DirectionalLight(0xffffff, 0.2);
dirLight.position.set(30, 20, 10);
scene.add(dirLight);

// Ajout de la fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
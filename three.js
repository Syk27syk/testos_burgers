import './style.css'

// import threejs
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// load material //
const mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('');
mtlLoader.setPath('');
mtlLoader.load('', function(materials) {
  materials.preload();

  // load object //
  const objLoader = new THREE.OBJLoader();
  // load a resource
  objLoader.setPath('/../static');
  objLoader.load(
    'test.obj',
    function (object) {
      scene.add(object);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    /*
    function (error) {
      console.log( 'An error happened');
    }
    */
  );
})

// add shapes//geometry //materials //mesh
const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
// renderer.render( scene, camera);

// render
scene.add(torus)

// lighting
const pointLight = new THREE.PointLight(0xFFFFFF)
pointLight.position.set(5, 5, 5)
// pointLight.position.set(20,20,20)

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star)
}

Array(200).fill().forEach(addStar)

// background //change: image link
const spaceTexture = new THREE.TextureLoader().load('/hero-bg.jpg');
scene.background = spaceTexture;

// animate
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

animate()

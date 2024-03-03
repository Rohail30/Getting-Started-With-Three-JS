let camera, scene, renderer, shapes;

function init() {
  // Init scene
  scene = new THREE.Scene();

  // Init camera (PerspectiveCamera)
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Init renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });

  // Set size (whole window)
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Render to canvas element
  document.body.appendChild(renderer.domElement);

  // Position camera
  camera.position.z = 10;

  // Create array to hold shapes
  shapes = [];

  // Add shapes
  addCube();
  addSphere();
  addCuboid();
  addCylinder();
  addPyramid();
  addTorus();
}

function addCube() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = -4;
  scene.add(cube);
  shapes.push(cube);
}

function addSphere() {
  const geometry = new THREE.SphereGeometry(0.5, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.x = -2;
  scene.add(sphere);
  shapes.push(sphere);
}

function addCuboid() {
  const geometry = new THREE.BoxGeometry(1, 1, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const cuboid = new THREE.Mesh(geometry, material);
  cuboid.position.x = 0;
  scene.add(cuboid);
  shapes.push(cuboid);
}

function addCylinder() {
  const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
  const cylinder = new THREE.Mesh(geometry, material);
  cylinder.position.x = 2;
  scene.add(cylinder);
  shapes.push(cylinder);
}

function addPyramid() {
  const geometry = new THREE.ConeGeometry(0.5, 1, 4);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const pyramid = new THREE.Mesh(geometry, material);
  pyramid.position.x = 4;
  scene.add(pyramid);
  shapes.push(pyramid);
}

function addTorus() {
  const geometry = new THREE.TorusGeometry(0.5, 0.2, 16, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  const torus = new THREE.Mesh(geometry, material);
  torus.position.x = 6;
  scene.add(torus);
  shapes.push(torus);
}

// Draw the scene every time the screen is refreshed
function animate() {
  requestAnimationFrame(animate);

  // Rotate shapes (Change values to change speed)
  shapes.forEach((shape) => {
    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
  });

  renderer.render(scene, camera);
}

function onWindowResize() {
  // Camera frustum aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  // After making changes to aspect
  camera.updateProjectionMatrix();
  // Reset size
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();

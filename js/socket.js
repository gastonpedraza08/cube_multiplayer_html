const id = uuid.v4();
let socket;

function listenSockets(scene) {
  socket = io.connect( "ws://localhost:5000", { query:`id=${id}`,transports: ['websocket'] } );

  socket.on('connect', () => {
    localStorage.setItem('id', id);
  });

  socket.on('get-cubes', data => {
    console.log(data)
    loadCubes(data);
  })

  socket.on('move-player', data => {
    loadCube(scene, data);
  })

  socket.on('remove-cube', id => {
    let c = scene.getMeshByName(id);
    c.dispose();
  })
}
    

function loadCube(scene, cube) {
  if (cube.id === id) return null;

  scene.meshes.forEach(mesh => {
    if (cube.id === mesh.name) {
      mesh.position = cube.position;
      mesh.rotation = {
        x: cube.rotation._x,
        y: cube.rotation._y,
        z: cube.rotation._z,
      }
      if (cube.key === "w") {
        mesh.animationGroups[2].start();
      } else if (cube.key === "s") {
        mesh.animationGroups[0].start();
      }
      return;
    }
  })
}

function loadCubes(cubes) {
    cubes.forEach(async c => {
    if (c.id !== id ) {
      let personaje;
      let { meshes: newMeshes, animationGroups } = await BABYLON.SceneLoader.ImportMeshAsync(null, "./glb files/", "1.glb", scene);
      
      personaje = BABYLON.MeshBuilder.CreateCapsule("collider", { height: 4, radius: 1.5}, scene);
      personaje.name = c.id;
      personaje.animationGroups = animationGroups;
      personaje.animationGroups[1].play(true);
      personaje.position.y = 0.75;
      personaje.speed = 0.2;
      personaje.frontVector = new BABYLON.Vector3(1, 0, 0);
      personaje.checkCollisions = true;
      personaje.rotationQuaternion = undefined;
      personaje.isVisible = false;

      var playerCollider = newMeshes[1];
      playerCollider.setParent(personaje);

      personaje.position.y = c.position.y;
      personaje.position.x = c.position.x;
      personaje.position.z = c.position.z;

      personaje.rotation.y = c.rotation.y;
      personaje.rotation.x = c.rotation.x;
      personaje.rotation.z = c.rotation.z;
    }
  })
}
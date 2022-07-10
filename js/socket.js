const id = uuid.v4();
    let socket = io.connect( "ws://localhost:5000", { query:`id=${id}`,transports: ['websocket'] } );
    socket.on('connect', () => {
      localStorage.setItem('id', id);
      socket.emit('add-cube', { id: id, position: { x: 0, y: 0.75, z: 0} });
    });

    socket.on('get-cubes', data => {
      loadCubes(data)
    })




    function loadCube(sceneP, cube) {
      if (cube.id === id) return null;

      sceneP.meshes.forEach(mesh => {
        if (cube.id === mesh.name) {
          mesh.position = cube.position;
          mesh.rotation = {
            x: cube.rotation._x,
            y: cube.rotation._y,
            z: cube.rotation._z,
          }
          console.log(mesh)
          if (cube.key === "w") {
            sceneP.animationGroups[3 + 4].start()
          } else if (cube.key === "s") {
            console.log(sceneP.animationGroups)
            sceneP.animationGroups[0 + 4].start()
          }
          return;
        }
      })
    }

    function loadCubes(cubes) {
       cubes.forEach(async c => {
        if (c.id !== id ) {
          let personaje;
          let { meshes: newMeshes, animationGroups } = await BABYLON.SceneLoader.ImportMeshAsync(null, "./scenes/", "b.glb", scene);
          animationGroups[1].play(true)
          personaje = newMeshes[1];
          personaje.name = c.id;
          personaje.speed = 0.2;
          personaje.frontVector = new BABYLON.Vector3(1, 0, 0);
          personaje.checkCollisions = true;
          personaje.rotationQuaternion = undefined;

          personaje.position.y = 1;
          personaje.position.x = 12;
          personaje.position.z = c.position.z;

          personaje.rotation.y = c.rotation.y;
          personaje.rotation.x = c.rotation.x;
          personaje.rotation.z = c.rotation.z;
        }
      })
    }
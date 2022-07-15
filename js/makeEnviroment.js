 const makeEnviroment = async () => {

  // Ground
  const ground = BABYLON.Mesh.CreateGround("ground", 50, 100, 1, scene, false);
  var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
  groundMaterial.diffuseTexture = new BABYLON.Texture("./imgs/floor1.jpg", scene);
  groundMaterial.diffuseTexture.uScale = 6;
  groundMaterial.diffuseTexture.vScale = 6;
  groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  ground.position.y = 0;
  ground.material = groundMaterial;
  ground.checkCollisions = true;

  // walls
  var wall = [];
  let WhiteColor = new BABYLON.Color4(255, 255, 255, 1);
  let arrWhiteColor = [];
  arrWhiteColor.length = 6;
  arrWhiteColor.fill(WhiteColor);

  //wall 1
  wall[0] = new BABYLON.MeshBuilder.CreateBox("wall 1",
    {
      width: 100, 
      faceColors: arrWhiteColor, 
      height: 15, 
      depth: 0.6,
    },
    scene);
  wall[0].position.x = 25;
  wall[0].position.y = 3;
  wall[0].rotation.y = 300.02;
  wall[0].checkCollisions = true;

  //wall 2
  wall[1] = new BABYLON.MeshBuilder.CreateBox("wall 2",
    {
      width: 100, 
      faceColors: arrWhiteColor, 
      height: 15, 
      depth: 0.6,
    },
    scene);
  wall[1].position.x = -25;
  wall[1].position.y = 3;
  wall[1].rotation.y = 300.02;
  wall[1].checkCollisions = true;

  //wall 3
  wall[2] = new BABYLON.MeshBuilder.CreateBox("wall 3",
    {
      width: 50, 
      faceColors: arrWhiteColor, 
      height: 15, 
      depth: 0.6,
    },
    scene);
  wall[2].position.z = 50;
  wall[2].position.y = 3;
  wall[2].checkCollisions = true;

  //wall 4
  wall[3] = new BABYLON.MeshBuilder.CreateBox("wall 4",
    {
      width: 50, 
      faceColors: arrWhiteColor, 
      height: 15, 
      depth: 0.6,
    },
    scene);
  wall[3].position.z = -50;
  wall[3].position.y = 3;
  wall[3].checkCollisions = true;

  /* Decoration */
  let { meshes: lounge_sofa_mesh } = await BABYLON.SceneLoader.ImportMeshAsync("", "./glb files/room1/", "lounge_sofa.glb", scene);

  let clone_lounge_sofa = lounge_sofa_mesh[0].clone();

  lounge_sofa_mesh[0].position = new BABYLON.Vector3(13.2, 0, -47);
  lounge_sofa_mesh[0].scaling = new BABYLON.Vector3(7,7,7);
  lounge_sofa_mesh[0].frontVector = new BABYLON.Vector3(0,0,0);
  lounge_sofa_mesh[0].checkCollisions = true;
  lounge_sofa_mesh[0].rotationQuaternion = undefined;
  lounge_sofa_mesh[0].rotation.y = 0

  clone_lounge_sofa.position = new BABYLON.Vector3(20, 0 , -40)
  clone_lounge_sofa.scaling = new BABYLON.Vector3(7,7,7);
  clone_lounge_sofa.frontVector = new BABYLON.Vector3(0,0,0);
  clone_lounge_sofa.checkCollisions = true;
  clone_lounge_sofa.rotationQuaternion = undefined;
  clone_lounge_sofa.rotation.y = Math.PI;


  let { meshes: lounge_chair_mesh } = await BABYLON.SceneLoader.ImportMeshAsync("", "./glb files/room1/", "lounge_chair.glb", scene);
  let clone_lounge_chair = lounge_chair_mesh[0].clone();

  lounge_chair_mesh[0].position = new BABYLON.Vector3(12.6,0,-42);
  lounge_chair_mesh[0].scaling = new BABYLON.Vector3(7,7,7);
  lounge_chair_mesh[0].frontVector = new BABYLON.Vector3(0,0,0);
  lounge_chair_mesh[0].checkCollisions = true;
  lounge_chair_mesh[0].rotationQuaternion = undefined;
  lounge_chair_mesh[0].rotation.y = Math.PI / 2;

  clone_lounge_chair.position = new BABYLON.Vector3(21, 0, -45);
  clone_lounge_chair.scaling = new BABYLON.Vector3(7,7,7);
  clone_lounge_chair.frontVector = new BABYLON.Vector3(0,0,0);
  clone_lounge_chair.checkCollisions = true;
  clone_lounge_chair.rotationQuaternion = undefined;
  clone_lounge_chair.rotation.y = -Math.PI / 2;

  return;
}
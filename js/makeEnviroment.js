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
  // lounge sofa 1
  let { meshes: lounge_sofa_mesh1 } = await BABYLON.SceneLoader.ImportMeshAsync("", "./glb files/room1/", "lounge_sofa.glb", scene);

  let collider_lounge_sofa_1 = BABYLON.MeshBuilder.CreateBox("collider_lounge_sofa_1", { height: 3, width: 6, depth: 2.5 }, scene);
  collider_lounge_sofa_1.position.y = 0.75;
  collider_lounge_sofa_1.position.x = 12;
  collider_lounge_sofa_1.position.z = -42;

  collider_lounge_sofa_1.speed = 0.2;
  collider_lounge_sofa_1.frontVector = new BABYLON.Vector3(Math.sin(collider_lounge_sofa_1.rotation.y), 0, Math.cos(collider_lounge_sofa_1.rotation.y));
  collider_lounge_sofa_1.checkCollisions = true;
  collider_lounge_sofa_1.isVisible = false;

  var body_lounge_sofa_1 = lounge_sofa_mesh1[1];
  body_lounge_sofa_1.setParent(collider_lounge_sofa_1);
  body_lounge_sofa_1.scaling = new BABYLON.Vector3(6,6,6);
  body_lounge_sofa_1.position = new BABYLON.Vector3(-3, 0, 1.25);
  body_lounge_sofa_1.rotation = new BABYLON.Vector3(0, 0, 0);

  // lounge sofa 2
  let collider_lounge_sofa_2 = BABYLON.MeshBuilder.CreateBox("collider_lounge_sofa_2", { height: 3, width: 6, depth: 2.5 }, scene);
  collider_lounge_sofa_2.position.y = 0.75;
  collider_lounge_sofa_2.position.x = 12;
  collider_lounge_sofa_2.position.z = -30;

  collider_lounge_sofa_2.speed = 0.2;
  collider_lounge_sofa_2.frontVector = new BABYLON.Vector3(Math.sin(collider_lounge_sofa_2.rotation.y), 0, Math.cos(collider_lounge_sofa_2.rotation.y));
  collider_lounge_sofa_2.checkCollisions = true;
  collider_lounge_sofa_2.isVisible = false;

  let body_lounge_sofa_2 = body_lounge_sofa_1.clone();
  body_lounge_sofa_2.position.z = 5;
  body_lounge_sofa_2.setParent(collider_lounge_sofa_2);
  body_lounge_sofa_2.scaling = new BABYLON.Vector3(6,6,6);
  body_lounge_sofa_2.position = new BABYLON.Vector3(2.8, 0, -1.25);
  body_lounge_sofa_2.rotation = new BABYLON.Vector3(0, Math.PI, 0);

  // lounge chair 1
  let { meshes: lounge_chair_mesh1 } = await BABYLON.SceneLoader.ImportMeshAsync("", "./glb files/room1/", "lounge_chair.glb", scene);

  let collider_lounge_chair_1 = BABYLON.MeshBuilder.CreateBox("collider_lounge_chair_1", { height: 3, width: 2.5, depth: 3 }, scene);
  collider_lounge_chair_1.position.y = 0.75;
  collider_lounge_chair_1.position.x = 7;
  collider_lounge_chair_1.position.z = -36;

  collider_lounge_chair_1.speed = 0.2;
  collider_lounge_chair_1.frontVector = new BABYLON.Vector3(Math.sin(collider_lounge_chair_1.rotation.y), 0, Math.cos(collider_lounge_chair_1.rotation.y));
  collider_lounge_chair_1.checkCollisions = true;
  collider_lounge_chair_1.isVisible = false;

  var body_lounge_chair_1 = lounge_chair_mesh1[1];
  body_lounge_chair_1.setParent(collider_lounge_chair_1);
  body_lounge_chair_1.scaling = new BABYLON.Vector3(6,6,6);
  body_lounge_chair_1.position = new BABYLON.Vector3(1.35, 0, 1.5);
  body_lounge_chair_1.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);

  // lounge chair 2
  let collider_lounge_chair_2 = BABYLON.MeshBuilder.CreateBox("collider_lounge_chair_2", { height: 3, width: 2.5, depth: 3 }, scene);
  collider_lounge_chair_2.position.y = 0.75;
  collider_lounge_chair_2.position.x = 17;
  collider_lounge_chair_2.position.z = -36;

  collider_lounge_chair_2.speed = 0.2;
  collider_lounge_chair_2.frontVector = new BABYLON.Vector3(Math.sin(collider_lounge_chair_2.rotation.y), 0, Math.cos(collider_lounge_chair_2.rotation.y));
  collider_lounge_chair_2.checkCollisions = true;
  collider_lounge_chair_2.isVisible = false;

  let body_lounge_chair_2 = body_lounge_chair_1.clone();
  body_lounge_chair_2.position.z = 5;
  body_lounge_chair_2.setParent(collider_lounge_chair_2);
  body_lounge_chair_2.scaling = new BABYLON.Vector3(6,6,6);
  body_lounge_chair_2.position = new BABYLON.Vector3(-1.4, 0, -1.5);
  body_lounge_chair_2.rotation = new BABYLON.Vector3(0, -Math.PI/2, 0);

  let { meshes: rug_square } = await BABYLON.SceneLoader.ImportMeshAsync("", "./glb files/room1/", "rugSquare.glb", scene);
  rug_square[0].position.y = 0.75;
  rug_square[0].position.x = 14.25;
  rug_square[0].position.z = -38;
  rug_square[0].scaling = new BABYLON.Vector3(5,5,5);

  let { meshes: potted_plant } = await BABYLON.SceneLoader.ImportMeshAsync("", "./glb files/room1/", "pottedPlant.glb", scene);
  potted_plant[0].position.y = 0.75;
  potted_plant[0].position.x = 21;
  potted_plant[0].position.z = -45;
  potted_plant[0].scaling = new BABYLON.Vector3(8,8,8);

  return;
}
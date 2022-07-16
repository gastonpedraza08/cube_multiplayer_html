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

  // lounge sofa 3
  let collider_lounge_sofa_3 = BABYLON.MeshBuilder.CreateBox("collider_lounge_sofa_3", { height: 3, width: 6, depth: 2.5 }, scene);
  collider_lounge_sofa_3.position.y = 0.75;
  collider_lounge_sofa_3.position.x = 12;
  collider_lounge_sofa_3.position.z = -11;

  collider_lounge_sofa_3.speed = 0.2;
  collider_lounge_sofa_3.frontVector = new BABYLON.Vector3(Math.sin(collider_lounge_sofa_3.rotation.y), 0, Math.cos(collider_lounge_sofa_3.rotation.y));
  collider_lounge_sofa_3.checkCollisions = true;
  collider_lounge_sofa_3.isVisible = false;

  let body_lounge_sofa_3 = body_lounge_sofa_1.clone();
  body_lounge_sofa_3.position.z = 5;
  body_lounge_sofa_3.setParent(collider_lounge_sofa_3);
  body_lounge_sofa_3.scaling = new BABYLON.Vector3(6,6,6);
  body_lounge_sofa_3.position = new BABYLON.Vector3(2.8, 0, -1.25);
  body_lounge_sofa_3.rotation = new BABYLON.Vector3(0, Math.PI, 0);

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

  // lounge chair 3
  let collider_lounge_chair_3 = BABYLON.MeshBuilder.CreateBox("collider_lounge_chair_3", { height: 3, width: 2.5, depth: 3 }, scene);
  collider_lounge_chair_3.position.y = 0.75;
  collider_lounge_chair_3.position.x = 17;
  collider_lounge_chair_3.position.z = -22;

  collider_lounge_chair_3.speed = 0.2;
  collider_lounge_chair_3.frontVector = new BABYLON.Vector3(Math.sin(collider_lounge_chair_3.rotation.y), 0, Math.cos(collider_lounge_chair_3.rotation.y));
  collider_lounge_chair_3.checkCollisions = true;
  collider_lounge_chair_3.isVisible = false;

  let body_lounge_chair_3 = body_lounge_chair_1.clone();
  body_lounge_chair_3.position.z = 5;
  body_lounge_chair_3.setParent(collider_lounge_chair_3);
  body_lounge_chair_3.scaling = new BABYLON.Vector3(6,6,6);
  body_lounge_chair_3.position = new BABYLON.Vector3(-1.4, 0, -1.5);
  body_lounge_chair_3.rotation = new BABYLON.Vector3(0, -Math.PI/2, 0);

  // lounge chair 4
  let collider_lounge_chair_4 = BABYLON.MeshBuilder.CreateBox("collider_lounge_chair_4", { height: 3, width: 2.5, depth: 3 }, scene);
  collider_lounge_chair_4.position.y = 0.75;
  collider_lounge_chair_4.position.x = 17;
  collider_lounge_chair_4.position.z = -17;

  collider_lounge_chair_4.speed = 0.2;
  collider_lounge_chair_4.frontVector = new BABYLON.Vector3(Math.sin(collider_lounge_chair_4.rotation.y), 0, Math.cos(collider_lounge_chair_4.rotation.y));
  collider_lounge_chair_4.checkCollisions = true;
  collider_lounge_chair_4.isVisible = false;

  let body_lounge_chair_4 = body_lounge_chair_1.clone();
  body_lounge_chair_4.position.z = 5;
  body_lounge_chair_4.setParent(collider_lounge_chair_4);
  body_lounge_chair_4.scaling = new BABYLON.Vector3(6,6,6);
  body_lounge_chair_4.position = new BABYLON.Vector3(-1.4, 0, -1.5);
  body_lounge_chair_4.rotation = new BABYLON.Vector3(0, -Math.PI/2, 0);

  // table coffee square
  let { meshes: table_coffe_square_mesh } = await BABYLON.SceneLoader.ImportMeshAsync("", "./glb files/room1/", "tableCoffeeSquare.glb", scene);

  let collider_table_coffee_square_1 = BABYLON.MeshBuilder.CreateBox("collider_table_coffee_square_1", { height: 3, width: 2.5, depth: 2.7 }, scene);
  collider_table_coffee_square_1.position.y = 0.75;
  collider_table_coffee_square_1.position.x = 12;
  collider_table_coffee_square_1.position.z = -36;

  collider_table_coffee_square_1.speed = 0.2;
  collider_table_coffee_square_1.frontVector = new BABYLON.Vector3(Math.sin(collider_table_coffee_square_1.rotation.y), 0, Math.cos(collider_table_coffee_square_1.rotation.y));
  collider_table_coffee_square_1.checkCollisions = true;
  collider_table_coffee_square_1.isVisible = false;

  var body_table_coffee_square = table_coffe_square_mesh[1];
  body_table_coffee_square.setParent(collider_table_coffee_square_1);
  body_table_coffee_square.scaling = new BABYLON.Vector3(6,6,6);
  body_table_coffee_square.position = new BABYLON.Vector3(1.5, 0, 0.5);
  body_table_coffee_square.rotation = new BABYLON.Vector3(0, 0, 0);

  // potted plant
  let { meshes: table_potted_plant_mesh } = await BABYLON.SceneLoader.ImportMeshAsync("", "./glb files/room1/", "pottedPlant.glb", scene);

  let collider_potted_plant_1 = BABYLON.MeshBuilder.CreateCapsule("collider_potted_plant_1", { height: 7, radius: 1 }, scene);
  collider_potted_plant_1.position.y = 0.75;
  collider_potted_plant_1.position.x = 22;
  collider_potted_plant_1.position.z = -47;

  collider_potted_plant_1.speed = 0.2;
  collider_potted_plant_1.frontVector = new BABYLON.Vector3(Math.sin(collider_potted_plant_1.rotation.y), 0, Math.cos(collider_potted_plant_1.rotation.y));
  collider_potted_plant_1.checkCollisions = true;
  collider_potted_plant_1.isVisible = false;

  var body_potted_plant = table_potted_plant_mesh[0];
  body_potted_plant.setParent(collider_potted_plant_1);
  body_potted_plant.scaling = new BABYLON.Vector3(10,10,10);
  body_potted_plant.position = new BABYLON.Vector3(0, 0, 0);
  body_potted_plant.rotation = new BABYLON.Vector3(0, 0, 0);

  /* TEXTS */
  //data reporter
	text = BABYLON.Mesh.CreatePlane("outputplane", 5, scene, false);
	text.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
	text.material = new BABYLON.StandardMaterial("outputplane", scene);
	text.position = new BABYLON.Vector3(collider.position.x, 5, collider.position.z);
	text.scaling.y = 0.5;
  text.scaling.x = 0.5;
  text.scaling.z = 0.5;

	var outputplaneTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
	text.material.diffuseTexture = outputplaneTexture;
  text.material.diffuseTexture.hasAlpha = true;
  text.useAlphaFromDiffuseTexture = true;
	text.material.specularColor = new BABYLON.Color3(0, 0, 0);
	text.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
	text.material.backFaceCulling = false;

	outputplaneTexture.drawText("gaston", null, 140, "bold 120px verdana", "white", "transparent");

  return;
}
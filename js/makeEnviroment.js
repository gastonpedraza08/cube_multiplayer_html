 const makeEnviroment = () => {

  // Ground
  const ground = BABYLON.Mesh.CreateGround("ground", 100, 50, 1, scene, false);
  var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
  groundMaterial.diffuseTexture = new BABYLON.Texture("./imgs/grass.png", scene);
  groundMaterial.diffuseTexture.uScale = 6;
  groundMaterial.diffuseTexture.vScale = 6;
  groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  ground.position.y = 0;
  ground.material = groundMaterial;
  ground.checkCollisions = true;

  //create walls
  var wall = [];
  let GreenColor = new BABYLON.Color4(0, 255, 0, 0.5);
  let RedColor = new BABYLON.Color4(255, 0, 0, 0.5);
  let BlueColor = new BABYLON.Color4(0, 0, 255, 0.5);
  let arrGreenColor = [];
  let arrRedColor = [];
  let arrBlueColor = [];
  arrGreenColor.length = 6;
  arrRedColor.length = 6;
  arrBlueColor.length = 6;
  arrGreenColor.fill(GreenColor);
  arrRedColor.fill(RedColor);
  arrBlueColor.fill(BlueColor);

  //wall 1
  wall[0] = new BABYLON.MeshBuilder.CreateBox("wall 1",
    {
      width: 50, 
      faceColors: arrBlueColor, 
      height: 6, 
      depth: 0.6,
    },
    scene);
  wall[0].position.x = 50;
  wall[0].position.y = 3;
  wall[0].rotation.y = 300.01;
  wall[0].checkCollisions = true;

  //wall 2
  wall[1] = new BABYLON.MeshBuilder.CreateBox("wall 2",
    {
      width: 50, 
      faceColors: arrGreenColor, 
      height: 6, 
      depth: 0.6,
    },
    scene);
  wall[1].position.x = -50;
  wall[1].position.y = 3;
  wall[1].rotation.y = 300.01;
  wall[1].checkCollisions = true;

  //wall 3
  wall[2] = new BABYLON.MeshBuilder.CreateBox("wall 3",
    {
      width: 100, 
      faceColors: arrGreenColor, 
      height: 6, 
      depth: 0.6,
    },
    scene);
  wall[2].position.z = 25;
  wall[2].position.y = 3;
  wall[2].checkCollisions = true;

  //wall 4
  wall[3] = new BABYLON.MeshBuilder.CreateBox("wall 4",
    {
      width: 100, 
      faceColors: arrGreenColor, 
      height: 6, 
      depth: 0.6,
    },
    scene);
  wall[3].position.z = -25;
  wall[3].position.y = 3;
  wall[3].checkCollisions = true;
}
async function loadPlayer() {
    let { meshes: newMeshes, animationGroups } = await BABYLON.SceneLoader.ImportMeshAsync("", "./glb files/characters/", "1.glb", scene);

    collider = BABYLON.MeshBuilder.CreateCapsule("collider", { height: 4, radius: 1.5}, scene);
    collider.name = id;
    collider.animationGroups = animationGroups;
    collider.animationGroups[0].start();
    collider.animationGroups[0].stop();
    collider.animationGroups[1].play(true);
    collider.position.y = 0.75;
    collider.position.x = 13;//eliminar
    collider.position.z = -35;//eliminar

    collider.speed = 0.2;
    collider.frontVector = new BABYLON.Vector3(Math.sin(collider.rotation.y), 0, Math.cos(collider.rotation.y));
    collider.checkCollisions = true;
    collider.rotationQuaternion = undefined;
    collider.isVisible = false;

    var playerCollider = newMeshes[1];
    playerCollider.setParent(collider);
    playerCollider.position = new BABYLON.Vector3(0, 0, 0);

    // name
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

        
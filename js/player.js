async function loadPlayer() {
    let { meshes: newMeshes, animationGroups } = await BABYLON.SceneLoader.ImportMeshAsync("", "./glb files/", "1.glb", scene);

    collider = BABYLON.MeshBuilder.CreateCapsule("collider", { height: 4, radius: 1.5}, scene);
    collider.name = id;
    collider.animationGroups = animationGroups;
    collider.animationGroups[0].start();
    collider.animationGroups[0].stop();
    collider.animationGroups[1].play(true);
    collider.position.y = 0.75;
    collider.speed = 0.2;
    collider.frontVector = new BABYLON.Vector3(Math.sin(collider.rotation.y), 0, Math.cos(collider.rotation.y));
    collider.checkCollisions = true;
    collider.rotationQuaternion = undefined;
    collider.isVisible = false;

    var playerCollider = newMeshes[1];
    playerCollider.setParent(collider);
    playerCollider.position = new BABYLON.Vector3(0, 0, 0);
    return;
}

        
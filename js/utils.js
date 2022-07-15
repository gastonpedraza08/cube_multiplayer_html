var createFollowCamera = function(scene, canvas, target) {
    var camera = new BABYLON.FollowCamera("tankFollowCamera", new BABYLON.Vector3(10, 0, 10), scene);
    camera.heightOffset = 10;
    camera.rotationOffset = 180;
    camera.position.x = 13;//eliminar
    camera.position.z = -35;//eliminar
    camera.cameraAcceleration = .1;
    camera.maxCameraSpeed = 1;
    camera.fov = 1.25;
    camera.lockedTarget = target;
    camera.attachControl(canvas, true);
    camera.inputs.removeByType('FollowCameraPointersInput');
    camera.inputs.clear()
    return camera;
}

let createPointerLock = function(scene) {
    let canvas = scene.getEngine().getRenderingCanvas();
    canvas.addEventListener("click", event => {
      canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
      if(canvas.requestPointerLock) {
        canvas.requestPointerLock();
      }
    }, false);
}; 
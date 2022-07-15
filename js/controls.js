function createControls(scene) {
    //set up input map
    var inputMap = {};
    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function(evt) {
      inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";

    }));
    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function(evt) {
      inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

    window.addEventListener('keyup', function (e) {
      if (e.key === 'w' || e.key === 'ArrowUp') {
        collider.animationGroups[2].stop()
      } else if (e.key === 's' || e.key === 'ArrowDown') {
        //collider.animationGroups[0].stop()
      }
    })

    scene.onBeforeRenderObservable.add(() => {
      if (collider) {
        if (inputMap["w"] || inputMap["ArrowUp"]) {
          collider.animationGroups[2].start()
          collider.moveWithCollisions(collider.frontVector.multiplyByFloats(collider.speed, collider.speed, collider.speed));
          socket.emit('move', 
            { key: "w", 
            id: id, 
            position: {
              x: collider.position.x,
              y: 0.75,
              z: collider.position.z,
            }, 
            rotation: collider.rotation
          })
        }

        if (inputMap["s"] || inputMap["ArrowDown"]) {
          //collider.animationGroups[0].start()
          //collider.moveWithCollisions(collider.frontVector.multiplyByFloats(-collider.speed / 2, -collider.speed / 2, -collider.speed / 2));
          //socket.emit('move', { key: "s", id: id, position: collider.position, rotation: collider.rotation})
        }
        if (inputMap["a"] || inputMap["ArrowLeft"]) {
          collider.rotation.y -= .05;
          collider.frontVector = new BABYLON.Vector3(Math.sin(collider.rotation.y), 0, Math.cos(collider.rotation.y));
          socket.emit('move', { id: id, position: collider.position, rotation: collider.rotation})
        }
        if (inputMap["d"] || inputMap["ArrowRight"]) {
          collider.rotation.y += .05;
          
          collider.frontVector = new BABYLON.Vector3(Math.sin(collider.rotation.y), 0, Math.cos(collider.rotation.y));
          socket.emit('move', { id: id, position: collider.position, rotation: collider.rotation})
        }
      }
    })
}
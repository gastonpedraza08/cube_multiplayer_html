async function loadAllCharacters() {
    characters[1] = await BABYLON.SceneLoader.LoadAssetContainerAsync("./glb files/1.glb");
    characters[2] = await BABYLON.SceneLoader.LoadAssetContainerAsync("./glb files/2.glb");
    characters[3] = await BABYLON.SceneLoader.LoadAssetContainerAsync("./glb files/3.glb");
    characters[4] = await BABYLON.SceneLoader.LoadAssetContainerAsync("./glb files/4.glb");
    characters[5] = await BABYLON.SceneLoader.LoadAssetContainerAsync("./glb files/5.glb");
    characters[6] = await BABYLON.SceneLoader.LoadAssetContainerAsync("./glb files/6.glb");
    characters[7] = await BABYLON.SceneLoader.LoadAssetContainerAsync("./glb files/7.glb");
    characters[8] = await BABYLON.SceneLoader.LoadAssetContainerAsync("./glb files/8.glb");

    console.log("listo")
}
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const model = document.querySelector("#lotusModel");

    if (!model) return;

    model.addEventListener("loaded", () => {
      console.log("🌸 Lotus GLB asset loaded");
      alert("🌸 Lotus GLB asset loaded");
    });

    model.addEventListener("error", (error) => {
      console.error("❌ Lotus GLB failed to load", error);
      alert("❌ Lotus GLB failed to load");
    });

    const lotus = document.querySelector("#lotus");

    lotus.addEventListener("model-loaded", (event) => {
      console.log("🌸 MODEL LOADED", event.detail.model);
      alert("🌸 MODEL LOADED");

      const model2 = event.detail.model;

      const box = new THREE.Box3().setFromObject(model2);

      console.log("📦 Model bounding box:", box);

      const size = new THREE.Vector3();
      box.getSize(size);

      console.log("📏 Model size:", size);
      alert("📏 Model size:");

      const center = new THREE.Vector3();
      box.getCenter(center);

      console.log("🎯 Model center:", center);
      alert("🎯 Model center:");
    });
  }, []);

  return (
    <a-scene
      mindar-image="
        imageTargetSrc: /targets/test-target.mind;
        autoStart: true;
        uiLoading: yes;
        uiScanning: yes;
        uiError: yes;
      "
      color-space="sRGB"
      renderer="colorManagement: true; physicallyCorrectLights: true"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets timeout="10000">
        <a-asset-item
          id="lotusModel"
          src="/janmashtami-fancy-dress/models/lotus.glb"
        />
        <a-asset-item
          id="sheshnagModel"
          src="/janmashtami-fancy-dress/models/sheshnag.glb"
        />
      </a-assets>

      <a-light type="directional" position="1 2 2" intensity="2" />

      <a-light type="ambient" intensity="1" />

      <a-camera position="0 0 0" look-controls="enabled: false" />

      <a-entity mindar-image-target="targetIndex: 0" id="ar-target">
        {/* Divine glow behind Krishna */}
        {/* Real 3D Lotus */}
        {/* Placeholder for Sheshnag */}
        <a-box position="0 0 0" scale="0.2 0.2 0.2" color="yellow" />

        <a-entity
          id="lotus"
          gltf-model="#lotusModel"
          position="0 0 0.1"
          rotation="-90 0 0"
          scale="1 1 1"
        />
      </a-entity>
    </a-scene>
  );
}

export default App;

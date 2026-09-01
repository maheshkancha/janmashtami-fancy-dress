import { useEffect } from "react";

function App() {
  useEffect(() => {
    const target = document.querySelector("#ar-target");

    if (!target) return;

    const onFound = () => {
      console.log("🎯 Vasudeva target found!");
    };

    const onLost = () => {
      console.log("❌ Vasudeva target lost!");
    };

    target.addEventListener("targetFound", onFound);
    target.addEventListener("targetLost", onLost);

    return () => {
      target.removeEventListener("targetFound", onFound);
      target.removeEventListener("targetLost", onLost);
    };
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
      <a-camera position="0 0 0" look-controls="enabled: false" />

      <a-entity mindar-image-target="targetIndex: 0" id="ar-target">
        {/* <a-box
          position="0 0.3 0"
          rotation="0 45 0"
          color="#FFC107"
          animation="
            property: rotation;
            to: 0 405 0;
            dur: 3000;
            easing: linear;
            loop: true;
          "
        /> */}

        {/* Divine glow behind Krishna */}
        <a-circle
          position="0 0 0.01"
          radius="0.4"
          color="#FFD700"
          material="
            shader: flat;
            opacity: 0.6;
            transparent: true;
          "
          animation="
            property: scale;
            from: 1 1 1;
            to: 1.25 1.25 1;
            dur: 1200;
            dir: alternate;
            easing: easeInOutSine;
            loop: true;
          "
        />

        {/* Lotus */}
        <a-sphere
          position="-0.35 -0.25 0"
          radius="0.08"
          color="#FF69B4"
          animation="
            property: position;
            from: -0.35 -0.25 0;
            to: -0.35 -0.15 0;
            dur: 1500;
            dir: alternate;
            easing: easeInOutSine;
            loop: true;
          "
        />

        {/* Placeholder for Sheshnag */}
        <a-torus-knot
          position="0.25 0.25 0"
          radius="0.15"
          radius-tubular="0.03"
          color="#228B22"
          animation="
            property: rotation;
            from: 0 0 0;
            to: 0 360 0;
            dur: 4000;
            easing: linear;
            loop: true;
          "
        />
      </a-entity>
    </a-scene>
  );
}

export default App;

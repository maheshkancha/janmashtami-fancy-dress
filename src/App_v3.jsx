import { useEffect, useState } from "react";

function App() {
  const [storyStep, setStoryStep] = useState(0);
  const [narrationText, setNarrationText] = useState(
    "Scan the basket target to begin...",
  );
  const [isTargetFound, setIsTargetFound] = useState(false);
  const [lightningFlash, setLightningFlash] = useState(false);

  useEffect(() => {
    const target = document.querySelector("#ar-target");
    if (!target) return;

    let timelineInterval = null;
    let lightningInterval = null;
    let startTime = null;

    const onFound = () => {
      console.log("🎯 Vasudeva target found!");
      setIsTargetFound(true);
      startTime = Date.now();

      // Heartbeat clock running every 100ms for smooth transitions
      timelineInterval = setInterval(() => {
        const elapsedSeconds = (Date.now() - startTime) / 1000;

        // 30-Second Story Timeline Logic Mapping
        if (elapsedSeconds >= 0 && elapsedSeconds < 4) {
          setStoryStep(1);
          setNarrationText("On a dark night in Mathura...");
        } else if (elapsedSeconds >= 4 && elapsedSeconds < 8) {
          setStoryStep(2);
          setNarrationText("Krishna was born to Devaki and Vasudeva.");
        } else if (elapsedSeconds >= 8 && elapsedSeconds < 13) {
          setStoryStep(3);
          setNarrationText("Vasudeva carried Krishna to safety.");
        } else if (elapsedSeconds >= 13 && elapsedSeconds < 18) {
          setStoryStep(4);
          setNarrationText("He crossed the mighty Yamuna...");
        } else if (elapsedSeconds >= 18 && elapsedSeconds < 23) {
          setStoryStep(5);
          setNarrationText("...while Sheshnag protected him from the rain.");
        } else if (elapsedSeconds >= 23 && elapsedSeconds < 27) {
          setStoryStep(6);
          setNarrationText("And the divine child reached Gokul.");
        } else if (elapsedSeconds >= 27 && elapsedSeconds <= 30) {
          setStoryStep(7);
          setNarrationText("Happy Janmashtami! ✨");
        } else if (elapsedSeconds > 30) {
          clearInterval(timelineInterval);
          clearInterval(lightningInterval);
          setNarrationText("Journey Complete. Rescan to replay.");
        }
      }, 1000);

      // Random Lightning Flash Generator (Triggers from step 2 onwards)
      lightningInterval = setInterval(() => {
        if (elapsedSecondsGlobal() >= 4 && elapsedSecondsGlobal() < 23) {
          if (Math.random() > 0.4) {
            setLightningFlash(true);
            setTimeout(() => setLightningFlash(false), 150);
            // Occasional double flash
            if (Math.random() > 0.6) {
              setTimeout(() => {
                setLightningFlash(true);
                setTimeout(() => setLightningFlash(false), 100);
              }, 250);
            }
          }
        }
      }, 3000);
    };

    const elapsedSecondsGlobal = () => {
      if (!startTime) return 0;
      return (Date.now() - startTime) / 1000;
    };

    const onLost = () => {
      console.log("❌ Vasudeva target lost!");
      setIsTargetFound(false);
      clearInterval(timelineInterval);
      clearInterval(lightningInterval);
      setStoryStep(0);
      setLightningFlash(false);
      setNarrationText("Target lost. Point back at the basket.");
    };

    target.addEventListener("targetFound", onFound);
    target.addEventListener("targetLost", onLost);

    return () => {
      target.removeEventListener("targetFound", onFound);
      target.removeEventListener("targetLost", onLost);
      clearInterval(timelineInterval);
      clearInterval(lightningInterval);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* HTML Narrative Subtitles Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999,
          backgroundColor: "rgba(10, 15, 30, 0.85)",
          color: "#fff",
          padding: "14px 28px",
          borderRadius: "30px",
          fontFamily: "'Segoe UI', Roboto, sans-serif",
          textAlign: "center",
          maxWidth: "85%",
          fontSize: "18px",
          fontWeight: "500",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,215,0,0.3)",
          pointerEvents: "none",
          transition: "all 0.3s ease",
        }}
      >
        {narrationText}
      </div>

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
          {/* Global Ambient Lighting changes on Lightning Flash */}
          <a-light
            type="ambient"
            color={
              lightningFlash
                ? "#ffffff"
                : storyStep >= 1 && storyStep <= 5
                  ? "#111122"
                  : "#444444"
            }
            intensity={lightningFlash ? "3.5" : "1.0"}
          />

          {/* STORM SYSTEM: Active between Step 2 and Step 5 */}
          {/* Rain Drops Emulation (Cascading lines positioned around the basket) */}

          {storyStep >= 2 &&
            storyStep <= 5 &&
            [...Array(15)].map((_, i) => {
              const posX = (Math.random() - 0.5) * 1.5;
              const posZ = (Math.random() - 0.5) * 0.5;
              const delay = Math.random() * 2000;
              return (
                <a-box
                  key={i}
                  position={`${posX} 1.5 ${posZ}`}
                  width="0.006"
                  height="0.2"
                  depth="0.006"
                  color="#A0C4DF"
                  material="opacity: 0.4; transparent: true;shader: flat;"
                  animation={`
                      property: position;
                      to: ${posX} -0.8 ${posZ};
                      dur: 1000;
                      loop: true;
                      easing: linear;
                      delay: ${delay};
                    `}
                />
              );
            })}

          {/* Stormy Dark Clouds Backdrop */}
          <a-circle
            position="0 0.8 -0.2"
            radius="0.7"
            color="#2F4F4F"
            material="opacity: 0.5; transparent: true; shader: flat;"
          />

          {/* STEP 3+: Divine Glow (Baby Krishna Placeholder) */}
          <a-circle
            position="0 0 0.01"
            radius="0.4"
            color="#FFD700"
            visible={storyStep >= 3}
            material="shader: flat; opacity: 0.7; transparent: true;"
            animation="
              property: scale;
              from: 1 1 1;
              to: 1.2 1.2 1;
              dur: 1000;
              dir: alternate;
              easing: easeInOutSine;
              loop: true;
            "
          />

          {/* STEP 4+: Yamuna Water Backdrop (Blue Circle behind Krishna) */}
          <a-circle
            position="0 -0.1 -0.05"
            radius="0.6"
            color="#1E90FF"
            visible={storyStep >= 4}
            material="shader: flat; opacity: 0.4; transparent: true;"
            animation="
              property: rotation;
              from: 0 0 0;
              to: 0 0 360;
              dur: 10000;
              easing: linear;
              loop: true;
            "
          />

          {/* STEP 5+: Sheshnag Umbrella (Green Torus Knot Above) */}
          <a-torus-knot
            position="0 0.4 0"
            radius="0.15"
            radius-tubular="0.03"
            color="#228B22"
            visible={storyStep >= 5}
            animation="
              property: rotation;
              from: 0 0 0;
              to: 0 360 0;
              dur: 4000;
              easing: linear;
              loop: true;
            "
          />

          {/* STEP 7: Floating Lotus (Pink Sphere) */}
          <a-sphere
            position="-0.35 -0.25 0"
            radius="0.08"
            color="#FF69B4"
            visible={storyStep === 7}
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
        </a-entity>
      </a-scene>
    </div>
  );
}

export default App;

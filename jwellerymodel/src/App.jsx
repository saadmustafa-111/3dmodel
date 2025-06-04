import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./App.css";

// Helper to get the model URL from the query string
function getModelUrl() {
  const params = new URLSearchParams(window.location.search);
  return (
    params.get("modelUrl") ||
    "https://res.cloudinary.com/dkpo8ys7l/raw/upload/v1748931256/tops_model.glb"
  );
}

function Model() {
  const modelUrl = getModelUrl();
  const gltf = useGLTF(modelUrl);

  return (
    <primitive
      object={gltf.scene}
      scale={[0.5, 0.5, 0.5]}
      position={[0, -1, 0]}
    />
  );
}

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
}

export default App;

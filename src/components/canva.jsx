import { Canvas } from "@react-three/fiber";
import { Experience } from "./componts-avatar/Experience";

export function CanvasAnimation() {
  return (


      <Canvas 
      className="   rounded-lg"
      // shadows
       camera={{ position: [0, 2, 5], fov: 30 }}>
        {/* <color attach="background" args={["#ececec"]} /> */}
        <Experience />
      </Canvas>

        
  );
}


// import { OrbitControls } from "@react-three/drei";
// import {  Avatar} from "./Avatar";
// export const Experience = () => {
//   return (
//     <>
//       <OrbitControls />
//       <group position-y={-1}>
//         <Avatar />
      
//         </group>
//     <ambientLight intensity={1} />
//     </>
//   );
// };

import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";

import {  useRef} from "react";


export const Experience = () => {
const ref = useRef()
  const { animation } = useControls({
    animation: {
      value: "Lookovershoulder",
      options: ["Lookovershoulder", "jump"],
    },
  });


  return (
    <>
      <OrbitControls />
      {/* <Sky />
      <Environment preset="sunset" /> */}
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />

        <Avatar animation={animation} />
        {animation === "Lookovershoulder" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25} ref={ref}>
            <boxGeometry />
            {/* <meshStandardMaterial color="white" /> */}
          </mesh>
        )}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          {/* <planeGeometry />
          <meshStandardMaterial color="white" /> */}
        </mesh>
        <ambientLight intensity={1} />
      </group>
    </>
  );
};

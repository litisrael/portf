"use client";
"use client";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const SideBox = ({ items }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="fixed top-10 right-0 z-50 ">
      <div className="flex flex-row ">
       
     
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isOpen ? '20vw' : 0 }}
          transition={{ duration: 2.5 }}
          className=" overflow-hidden"
        >
          {items}
        </motion.div>
     
          <button className="p-1 " onClick={handleOpenClose}>
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
      </div>
    </section>
  );
};


// import { useState } from "react";


// import {
//   ShoppingCart,
//   LineChart,
//   Earth ,
//   Upload,
//   Settings,
//   ChevronRight,
//   LogOut,
//   Home as HomeIcon,
//   BarChart 
// } from "lucide-react";
// import { Button } from "./ui/button";


//   export  function SideBox({item}) {
//   const [isCollapsed, setIsCollapsed] = useState(false);



//   function toggleSidebar() {
//     setIsCollapsed(!isCollapsed);
//   }

//   return (
    
//     <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
     
      
//         <div className="absolute right-[-20px] top-7">
//           <Button
//             onClick={toggleSidebar}
//             variant="secondary"
//             className=" rounded-full p-2"
//           >
//             <ChevronRight />
//           </Button>
//         </div>
      
//       {item}
//       {/* <Nav />
//      */}
       
//     </div>
//   );
// }


// "use client";

// import { motion, useAnimationControls, AnimatePresence } from "framer-motion"
// import { useState, useEffect } from "react"
// // import NavigationLink from "./NavigationLink"

// import { Heart ,ChevronRight, ChevronLeft } from 'lucide-react';


// const containerVariants = {
//   close: {
//     width: "0rem",
//     transition: {
//       type: "spring",
//       damping: 15,
//       duration: 0.5,
//     },
//   },
//   open: {
//     width: "16rem",
//     transition: {
//       type: "spring",
//       damping: 15,
//       duration: 0.5,
//     },
//   },
// }



// export const SideBox = ({items}) => {
//   const [isOpen, setIsOpen] = useState(true)

//   const containerControls = useAnimationControls()


//   useEffect(() => {
//     if (isOpen) {
//       containerControls.start("open")
//       // svgControls.start("open")
//     } else {
//       containerControls.start("close")
//       // svgControls.start("close")
//     }
//   }, [isOpen])

//   const handleOpenClose = () => {
//     setIsOpen(!isOpen)
//   }
//   return (
//     <>
//       <motion.div
//         variants={containerVariants}
//         animate={containerControls}
//         initial="open"
//         className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 fixed top-20 right-0 h-full shadow shadow-neutral-600"
        
//         // style={{ width: isOpen ? "16rem" : "0rem" }}
//       >
//         <div className="bg-slate-300 flex flex-row w-full justify-between place-items-center">
//           <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
//           <button
//             className="p-1 rounded-full flex"
//             onClick={() => handleOpenClose()}
//           >
//            {isOpen ?<ChevronLeft /> : <ChevronRight />}
//           </button>
//         </div>
//      {  isOpen? items:  null }
//       </motion.div>
//     </>
//   );
// };
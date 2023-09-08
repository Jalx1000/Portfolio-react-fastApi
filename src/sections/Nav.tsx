import jal from "../assets/jal.svg";
import Looper from "../assets/Looper.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [navOpen, SetNavOpen] = useState<boolean>(true);

  return (
    <header className="flex justify-between items-center w-screen p-2.5 m-0 z-10">
      <div className="w-11/12 m-auto flex justify-between xl:justify-between">
        <div id="logo" className="">
          <img
            className="h-[120px] md:h-40 xl:h-[100%]"
            src={jal}
            alt="JAL LOGO"
          />
        </div>

        <button
          onClick={() => SetNavOpen(!navOpen)}
          style={{ display: navOpen ? "flex" : "none" }}
          className=""
          id="open"
        >
          <div className="w-[71px] h-[120px] md:w-[91px] md:h-[150px] bg-white">
            <div className="h-[100px] md:h-[131px] bg-blackj flex justify-center ">
              <div className=" bg-redj h-[45px] w-[45px] md:h-[55px] md:w-[55px] flex justify-center items-center mt-4">
                <div className="flex flex-col items-end">
                  <span className="bg-white h-[6px] w-[31px] md:w-[41px]"></span>
                  <span className="bg-white h-[6px] w-[14px] md:w-[24px] my-[5px]"></span>
                  <span className="bg-white h-[6px] w-[23px] md:w-[33px]"></span>
                </div>
              </div>
            </div>
          </div>
        </button>

        <nav
          id="menu"
          style={{ display: navOpen ? "none" : "flex" }}
          // className="mt-0  mr-0 flex flex-col items-end gap-4 absolute top-0 right-0 bottom-0 text-center bg-black w-screen pt-4 shadow-sm z-index:10;"
          className="fixed w-screen bg-blackj top-0 left-0 flex h-screen z-40 justify-center items-center"
        >
          <img
            className="absolute bottom-0 left-0 h-full"
            src={Looper}
            alt="looper"
          />
          <motion.div
            className="z-50"
            initial={{ opacity: 0, scale: 1.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <ul className="text-8xl ml-52">
              <li className="font-bold uppercase">
                <a onClick={()=>SetNavOpen(!navOpen)} className="text-only-border" href="#contribuciones">
                  Contribuciones
                </a>
              </li>
              <li className="font-bold uppercase ">
                <a onClick={()=>SetNavOpen(!navOpen)} className="text-only-border" href="#about">
                  Acerca de mi
                </a>
              </li>
              <li className="font-bold uppercase ">
                <a onClick={()=>SetNavOpen(!navOpen)} className="text-only-border" href="#proyectsList">
                  Proyectos
                </a>
              </li>
              <li className="font-bold uppercase ">
                <a onClick={()=>SetNavOpen(!navOpen)} className="text-only-border" href="#contact">
                  Contactame
                </a>
              </li>
            </ul>
          </motion.div>
          <button
            onClick={() => SetNavOpen(!navOpen)}
            className="absolute top-0 right-14"
            id="close"
          >
            <div className="w-[91px] h-[150px] bg-white">
              <div className="h-[131px] bg-blackj flex justify-center ">
                <div className=" bg-redj h-[55px] w-[55px] flex justify-center items-center mt-4">
                  <div className="flex flex-col h-[40px] items-center justify-center">
                    <span className="bg-white h-[6px] w-[40px] -rotate-45 "></span>
                    <span className="bg-white h-[6px] w-[40px] rotate-45"></span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

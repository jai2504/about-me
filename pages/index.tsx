import { motion } from "framer-motion";
import { route } from "next/dist/server/router";
import Head from "next/head";
import Image from "next/image";
import { fadeInUp, routeAnimation, staggered } from "../animation";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
const index = () => {
  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <h5 className="my-3 font-medium">
        A highly organized and hardworking individual searching for an
        entry-level position, I want to use my knowledge and skills to gain
        practical exposure and understand the inner workings in a dynamic
        organization. I’d like to learn on the job and grow individually.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark" style={{"marginLeft":"-1.5rem","marginRight":"-1.5rem"}}>
        <h4 className="my-3 text-xl font-bold tracking-wide">What Skills I have</h4>
      <motion.div className="grid gap-6 lg:grid-cols-2" variants={staggered} initial="initial" animate="animate">
          {services.map((service,index) => (
            <motion.div className="bg-gray-200 rounded-lg da lg:col-span-1 dark:bg-dark-200" key={index} variants={fadeInUp} >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

import React from "react";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import AnimatedNumber from "animated-number-react";
const Workinfo = () => {
  const [ct, setct] = useState(false);
  const formatValue = (value) => value.toFixed(0);
  return (
    <div style={{textAlign:'center',paddingTop:'30px'}}>
    <h1 >Work Profile</h1>
    <motion.div
      initial={() => {
        setct(false);
      }}
      whileInView={() => {
        setct(true);
      }}
      viewport={{ once: false }}
      className="workinfo"
    >
      <Tilt>
        <motion.div
          className="workCard"
          whileHover={{
            width: "17rem",
            height: "12rem",
          }}
        >
          <div className="firstchild">
            <i class="bi bi-clock"></i>
          </div>
          <div className="secondchild">
            {ct && <AnimatedNumber value="50" formatValue={formatValue} />}+
            <div className="secondsubchild">Work Hours</div>
          </div>
        </motion.div>
      </Tilt>
      <Tilt>
        <motion.div
          whileHover={{
            width: "17rem",
            height: "12rem",
          }}
          className="workCard"
        >
          <div className="firstchild">
            <i class="bi bi-person"></i>
          </div>
          <div className="secondchild">
            {ct && <AnimatedNumber value="5" formatValue={formatValue} />}
            <div className="secondsubchild">Customers</div>
          </div>
        </motion.div>
      </Tilt>
      {/* <Tilt>
        <motion.div
          whileHover={{
            width: "17rem",
            height: "12rem",
          }}
          className="workCard"
        >
          <div className="firstchild">
            <i class="bi bi-files"></i>
          </div>
          <div className="secondchild">
            {ct && <AnimatedNumber value="60" formatValue={formatValue} />}+
            <div className="secondsubchild">Layouts</div>
          </div>
        </motion.div>
      </Tilt> */}
      <Tilt>
        <motion.div
          whileHover={{
            width: "17rem",
            height: "12rem",
          }}
          className="workCard"
        >
          <div className="firstchild">
            <i class="bi bi-hdd-stack"></i>
          </div>
          <div className="secondchild">
            {ct && <AnimatedNumber value="5" formatValue={formatValue} />}
            <div className="secondsubchild">Projects</div>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
    </div>
  );
};

export default Workinfo;
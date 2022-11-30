import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import Zoom from "react-reveal/Zoom";
import Filter from "./Filter";
import "./grab";
import "./Home.css";
import Title from "./Title";

export const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeGender, setActiveGender] = useState("All");

  // on page load zoom in
  // const controls = useAnimation();

  useEffect(() => {
    getDesigns();
  }, []);

  const getDesigns = async () => {
    const res = await axios.get("https://api.thinkoya.com/api/designs");
    setData(res.data);
    setFilter(res.data);
  };
  let count = 1000;

  return (
    <>
      <div className="title">
        <Title />
      </div>
      <div className="filter">
        <Filter
          data={data}
          setFilter={setFilter}
          setActiveGender={setActiveGender}
          activeGender={activeGender}
        />
      </div>
      <MapInteractionCSS
        translationBounds={{ xMin: 10, xMax: 50, yMin: 10, yMax: 30 }}
        minScale={0.5}
        maxScale={4}
      >
        <motion.div
          initial={{ x: -450, scale: 1.5 }}
          drag
          dragConstraints={{
            top: -1325,
            right: 800,
            bottom: 250,
            left: -2000,
          }}
          dragElastic={1}
          dragTransition={{
            bounceStiffness: 20,
            bounceDamping: 5,
            power: 0.1,
            duration: 5,
          }}
          dragPropagation
          className="components"
        >
          {/* <p className="title" id="centred-title">
          Thinkoya
        </p> */}

          {/* <Filter
        data={data}
        setFilter={setFilter}
        setActiveGender={setActiveGender}
        activeGender={activeGender}
      /> */}
          {filter.map((design) => {
            count += 100;
            return (
              <Zoom delay={count}>
                {/* <motion.div
              animate={{ opacity: 1, scale: 1 }}
              drag="x" // drag horizontally
              dragConstraints={{ left: 100, right: 100 }}
              dragElastic={0.5}
              transition={{
                duration: 5,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              onLoad={{ scale: 1.2 }}
            > */}
                <div className="design">
                  <img
                    id="design-image"
                    className="photos"
                    src={design.images[0].url}
                    alt="design"
                    onClick={() => {
                      window.location.href = `/${design.idDesigns}`;
                    }}
                  />
                </div>
                {/* </motion.div> */}
              </Zoom>
            );
          })}
        </motion.div>
      </MapInteractionCSS>
    </>
  );
};
// eslint-disable-next-line no-lone-blocks

export default Home;

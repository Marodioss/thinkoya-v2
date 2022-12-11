import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState, useMemo } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import Zoom from "react-reveal/Zoom";
import Filter from "./Filter";
import "./grab";
import "./Home.css";
import Title from "./Title";
import Spinner from "./Spinner";

export const Main = () => {
  // Create the controls object for controlling the animation
  const controls = useAnimation();

  // Set up state for the data, filter, active gender, and loading state
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeGender, setActiveGender] = useState("All");
  const [loading, setLoading] = useState(true);

  // On page load, start the animation
  useEffect(() => {
    controls.start({
      scale: 1.5,
      transition: { duration: 2, delay: 1 },
    });
    // When the animation ends, call getDesigns()
    setTimeout(getDesigns, 3000);
  }, []);

  const getDesigns = async () => {
    setLoading(true);
    const res = await axios.get("https://api.thinkoya.com/api/designs");
    setData(res.data);
    setFilter(res.data);
    setLoading(false);
  };

  // Map through the filtered designs and return a motion.div element for each design
  const designElements = filter.map((design) => {
    return (
      <motion.div
        // Animate the opacity and scale of the design elements
        animate={{ opacity: 2, scale: 1 }}
        // Allow the design elements to be dragged horizontally

        // Use the controls object to control the animation of the design elements
        controls={controls}
        transition={{
          duration: 0.5,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        // Initially hide the design elements with low opacity and scale
        initial={{ opacity: 0, scale: 0.5 }}
        // When the design element loads, scale it up slightly
        onLoad={() => ({ scale: 1 })}
      >
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
      </motion.div>
    );
  });

  // Render the page
  return (
    <>
      <div className="Main">
        <div className="title">
          <Title />
        </div>
        {loading && (
          <div className="spinner">
            <Spinner />
          </div>
        )}
        {!loading && (
          <>
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
                // Animate the initial position and scale of the design container
                initial={{ x: -50, scale: 1.5 }}
                // Allow the design container to be dragged
                drag
                dragDamping={0.2}
                dragMomentum={5}
                // Set the constraints for dragging the design container
                dragConstraints={{
                  top: -1325,
                  right: 800,
                  bottom: 250,
                  left: -2000,
                }}
                dragElastic={2}
                // Set the drag transition for the design container
                dragTransition={{
                  bounceStiffness: 50,
                  bounceDamping: 15,
                  power: 0.2,
                  duration: 5,
                  type: "easeIn",
                  stiffness: 1000,
                  damping: 100,
                  mass: 6,
                  restSpeed: 0.5,
                  momentum: 10,
                }}
                dragPropagation
                className="components"
              >
                {designElements}
              </motion.div>
            </MapInteractionCSS>
          </>
        )}
      </div>
    </>
  );
};

export default Main;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Design.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Design = () => {
  const [data, setData] = useState([]);
  const { idDesigns } = useParams();
  useEffect(() => {
    getDesigns();
  }, []);

  const getDesigns = async () => {
    const res = await axios.get(
      "https://thinkoya.com/api/designs/" + idDesigns
    );
    setData(res.data);
  };

  return (
    <div className="slide-container">
      {data.map((design, index) => {
        return (
          <>
            <div className="design">
              <div className="design__container">
                <div className="design__container__title">
                  <h1>{design.TitleDesigns}</h1>
                </div>
              </div>
            </div>
            <div className="each-slide" key={index}>
              <Slide>
                {design.images.map((image) => {
                  return (
                    <img
                      id="design-image"
                      className="photos"
                      src={image.url}
                      alt=""
                    />
                  );
                })}
              </Slide>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Design;

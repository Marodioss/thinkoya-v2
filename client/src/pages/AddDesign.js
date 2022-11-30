//add design

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

export const AddDesign = () => {
  const [data, setData] = useState([]);
  const [TitleDesigns, setTitle] = useState("");
  const [DescriptionDesign, setDescription] = useState("");
  const [Category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const [url, setUrl] = useState("");

  const { idDesigns } = useParams();

  useEffect(() => {}, []);

  const addDesign = async () => {
    const res = await axios.post("https://thinkoya.com/api/designs", {
      TitleDesigns,
      DescriptionDesign,
      Category,
      images: File,
    });
    setUrl(res.data.url);
  };

  return (
    <div>
      <div className="design_text container">
        <h1 className="text-center my-4">Add Design</h1>
        <input
          className="form-control my-4"
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="form-control my-4"
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="form-control my-4"
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="file"
          className="form-control my-4"
          multiple
          onChange={(e) => setImages(e.target.files)}
        />

        <button className="btn btn-primary w-100" onClick={addDesign}>
          Add Design
        </button>
      </div>
    </div>
  );
};

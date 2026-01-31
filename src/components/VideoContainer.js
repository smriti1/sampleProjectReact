import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_API } from "../utils/constants";
import { AdVideoCard} from "./VideoCards";
import { Link } from "react-router-dom";

export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_API);
    const results = await data.json();
    setVideos(results.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((v) => (
        <Link key={v.id} to={"/watch?v=" + v.id}>
          <AdVideoCard info= {v}/>
        </Link>
      ))}
    </div>
  );
};

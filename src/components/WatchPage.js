import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { CommentContainer } from "./CommentContainer";
import { LiveChat } from "./LiveChat";

export const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());

  }, [dispatch]);

  return (
    <div>
      <div className="flex ">
      <iframe
        width="1100"
        height="515"
        src={"https://www.youtube.com/embed/"+params.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullscreen
      ></iframe>
      <div className="pl-2 px-2 mx-2 border border-l-2 rounded-lg bg-slate-100 w-96"><LiveChat/></div>
      </div>
      <div className="py-2 mx-5"><CommentContainer/></div>
    </div>
  );
};

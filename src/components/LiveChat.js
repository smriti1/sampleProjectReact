import React, { useEffect, useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandonName } from "../utils/helper";

export const LiveChat = () => {
  const dispatch = useDispatch();
  const [chatMessage, setchatMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandonName(),
          message: "test hello",
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  });
  const LiveChatMessage = (e) => {
    e.preventDefault(); //stop refresh
    dispatch(
      addMessages({
        name: "Smriti",
        message: chatMessage,
      })
    );
    setchatMessage("");
  };
  return (
    <>
      <div>
        <div className=" h-[450px] overflow-y-scroll flex flex-col-reverse">
          {chatMessages?.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
        <div className="p-1">
          <form onSubmit={LiveChatMessage}>
            <input
              className="p-1"
              type="text"
              value={chatMessage}
              onChange={(e) => setchatMessage(e.target.value)}
            />
            <button className="bg-green-400 rounded-lg p-1 m-2 w-16">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

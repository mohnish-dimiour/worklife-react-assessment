import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { Notifications } from "../../UI/molecules";
export const socket = io(`${process.env.REACT_APP_BASE_URL}/`);

const MainLayout = (props) => {
  const { user } = useSelector((state) => state.auth);
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState({});
  const [ignore, setIgnore] = useState(true);
  useEffect(() => {
    socket.emit("joinRoom", { userId: user._id });
    // Listen for messages from the server
    socket.on("sendNotification", (data) => {
      handleButtonClick(data);
    });
    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("messageFromServer");
    };
  }, []);
  const handleButtonClick = (data) => {
    if (ignore) {
      return;
    }
    const now = Date.now();

    const icon =
      "http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png";

    const newOptions = {
      tag: now,
      body: data.description,
      icon: icon,
      lang: "en",
      dir: "ltr",
    };

    setTitle(data.title);
    setOptions(newOptions);
  };

  return (
    <>
      <Header />
      <Outlet />
      <Notifications
        handleButtonClick={handleButtonClick}
        setIgnore={setIgnore}
        ignore={ignore}
        title={title}
        options={options}
      />
    </>
  );
};

export default MainLayout;

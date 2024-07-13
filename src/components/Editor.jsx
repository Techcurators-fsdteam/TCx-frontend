import React, { useEffect, useState } from "react";
import Split from "react-split";
import Navbar from "./Navbar";
import { getProjectByPid } from "../api/axios";
import { useParams } from "react-router-dom";

const Editor = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const { pid } = useParams();
  const [link, setLink] = useState("");

  useEffect(() => {
    getProjectByPid(pid).then((response) => {
      setHtmlContent(response.description);
      setLink(response.link);
    });
  }, [pid]);

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Navbar />
      </div>
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <Split
          sizes={[50, 50]}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
          className="flex w-full h-full"
        >
          <div className="flex flex-1 flex-col bg-gray-900 p-4 overflow-auto">
            <div
              className="text-white mt-20"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            <iframe
              src={link}
              style={{
                width: "100%",
                height: "85vh",
                border: 0,
                borderRadius: "4px",
                overflow: "hidden",
                marginTop: "10vh",
              }}
              title="React Counter Example"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </Split>
      </div>
    </>
  );
};

export default Editor;

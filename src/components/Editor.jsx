import React, { useEffect, useState } from "react";
import Split from "react-split";
import Navbar from "./Navbar";
import { getProjectByPid, submitProject } from "../api/axios";
import { useParams } from "react-router-dom";
import { useUser } from "../store/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BouncingDotsLoader from "./Loaders/Bouncing";

const Editor = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const { pid } = useParams();
  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState("");
  const [gradioLink, setGradioLink] = useState("");
  const { user, fetchUserDetails } = useUser();
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    getProjectByPid(pid).then((response) => {
      setHtmlContent(response.description);
      setLink(response.link);
    });

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pid]);

  useEffect(() => {
    async function checkSubmit() {
      setLoading(true);
      const isSubmitted = user && user.projects && user.projects.includes(pid);
      setSubmitted(isSubmitted);
      setLoading(false);
    }

    if (user) {
      checkSubmit();
    }
  }, [user, pid]);

  function handleBeforeUnload(e) {
    e.preventDefault();
    e.returnValue = "Are you sure you want to leave? Changes you made may not be saved.";
    return "Are you sure you want to leave? Changes you made may not be saved.";
  }

  const handleSubmit = async () => {
    const parts = gradioLink.split("https://");

    if (parts.length === 2) {
      const domainPart = parts[1];
      const domainParts = domainPart.split(".");

      if (
        domainParts.length === 3 &&
        /^[a-z0-9]+$/.test(domainParts[0]) &&
        domainParts[1] === "gradio" &&
        domainParts[2].startsWith("live/")
      ) {
        try {
          const result = await submitProject(gradioLink, pid, user.username);
          if (result.status === 200) {
            toast.success(`Congratulations, you have earned the stars`);
            setSubmitted(true);
          } else {
            toast.error("Link Already Submitted!!!!");
          }
        } catch (error) {
          console.error("Error submitting project:", error);
          toast.error(error.message || "Error submitting project");
        }
      } else {
        toast.error("Invalid link: Please submit a valid Gradio link.");
      }
    } else {
      toast.error("Invalid link: Please submit a valid Gradio link.");
    }
  };

  return (
    <>
      {loading ? (
        <BouncingDotsLoader />
      ) : (
        <>
          <div className="flex items-center justify-center w-full">
            <Navbar />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start h-screen bg-black text-white">
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
                <div className="text-white mt-20 h-[60vh] lg:h-[80vh] overflow-y-scroll">
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
                {submitted ? (
                  <p className="text-red-400 text-2xl self-center">
                    *You have already submitted the project
                  </p>
                ) : (
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex flex-col sm:flex-row justify-between gap-6">
                      <label
                        className="text-white text-left rounded-xl p-4 text-xl"
                        htmlFor="gradioLink"
                      >
                        Submit Your Gradio Link here :
                      </label>
                      <input
                        id="gradioLink"
                        name="gradioLink"
                        className="p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700"
                        type="text"
                        value={gradioLink}
                        onChange={(e) => setGradioLink(e.target.value)}
                      />
                      <button
                        className="px-6 py-2 rounded-md bg-[#FF7C1D] text-white text-lg focus:outline-none hover:bg-[#FF6818] transition duration-200"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col items-center justify-center p-4">
                <iframe
                  src={link}
                  className="w-full h-[50vh] lg:h-[85vh] border-0 rounded-lg overflow-hidden mt-4 lg:mt-0"
                  title="Project View"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
              </div>
            </Split>
          </div>
        </>
      )}
    </>
  );
};

export default Editor;

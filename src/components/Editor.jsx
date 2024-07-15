import React, { useEffect, useState } from "react";
import Split from "react-split";
import Navbar from "./Navbar";
// import { toast } from "react-toastify";
import { getProjectByPid } from "../api/axios";
import { useParams } from "react-router-dom";
import { useUser } from "../store/UserContext";
import { submitProject } from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BouncingDotsLoader from "./Loaders/Bouncing";

const Editor = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const { pid } = useParams();
  const [loading, setLoading] = useState(true)
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
      // Make sure this function handles state properly

      const isSubmitted = user.projects.includes(pid);
      setSubmitted(isSubmitted);
      setLoading(false);

    }

    if (user) {
      checkSubmit();
    }
  }, [user]);

  function handleBeforeUnload(e) {
    e.preventDefault(); // Prevent the default behavior
    e.returnValue = 'Are you sure you want to leave? Changes you made may not be saved.'; // Standard message does not display on some browsers
    return 'Are you sure you want to leave? Changes you made may not be saved.';
  }

  const handleSubmit = async () => {
    // Example Gradio link to be validated
    const parts = gradioLink.split('https://');

    if (parts.length === 2) {
      const domainPart = parts[1];

      // Split the domain part by '.'
      const domainParts = domainPart.split('.');

      // Check the conditions
      if (
        domainParts.length === 3 &&
        /^[a-z0-9]+$/.test(domainParts[0]) && // Check if the first part has only lowercase letters and digits
        domainParts[1] === 'gradio' &&
        domainParts[2].startsWith('live/')
      ) {
        // console.log("Submitted link:", gradioLink);
        try {
          const result = await submitProject(gradioLink, pid, user.username);
          console.log(result);
          if (result.status === 200) {
            // console.log("Project successfully submitted");
            toast.success(`Congratulations, you have earned the stars`)

          } else {
            // console.log("Invalid Link: Link already exists in the database, shows the link is copied");
            toast.error("Link Already Submitted!!!!")
          }
        } catch (error) {
          console.error("Error submitting project:", error);
          toast.error(error)
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
      {loading ? <BouncingDotsLoader /> : <>
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
                className="text-white mt-20 h-[80vh] overflow-y-scroll"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
              {!submitted ? <p className="text-red-400 text-2xl self-center">*You have already Submitted the project</p> : <div className="flex flex-col justify-start items-start">
                <div className="flex justify-between gap-6">
                  <label className=" text-white text-left rounded-xl p-4 text-xl" htmlFor="gradioLink">Submit Your Gradio Link here :</label>
                  <input id="gradioLink" name="gradioLink" className="p-2 rounded-md bg-[#121418] text-white outline-none focus:ring-2 focus:ring-[#FF7C1D] placeholder:text-gray-700" type="text" value={gradioLink} onChange={(e) => setGradioLink(e.target.value)} />
                  <button className="px-6 py-2 rounded-md bg-[#FF7C1D] text-white text-lg focus:outline-none hover:bg-[#FF6818] transition duration-200" onClick={handleSubmit}>Submit</button>
                </div>
              </div>}
            </div>
            <div className="flex flex-1 flex-col items-center  justify-center p-4">
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
      </>}
    </>
  );
};

export default Editor;

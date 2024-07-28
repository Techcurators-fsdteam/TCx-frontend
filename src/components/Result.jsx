import { Link, useLocation } from "react-router-dom";
import ReactSpeedometer from "react-d3-speedometer/slim"

export default function Result() {
    const location=useLocation()
    const {fName,lName,score}=location.state;
    
    console.log(fName,lName,score)
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center mt-24">
        

            <ReactSpeedometer minValue={0} height={500} width={500} maxValue={10} value={score} />
            
            {score>=4?<p className="text-white font-semibold text-3xl mt-[-10%]">
                Congratulations <span className="text-[#FF7C1D]">{fName} {lName}</span>, you have successfully passed the practice test with a score of {score} out of 10
            </p>:<p className="text-white font-semibold text-3xl mt-[-10%]">
                Uh Uh!!  you could not clear the test. Please try again after some time. Till then keep yourself motivated
            </p>}
            <button onClick={()=>{window.close()}} className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4">
              Return to Home
            </button>
            
            
        
      </div>
    </>
  );
}

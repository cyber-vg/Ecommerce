import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { userVerify } from "../../services/Apis.js";
import { useAuth } from "../../context/auth.jsx";

const Otp = () => {
  const [auth,setauth]=useAuth();
  const [otp, setOtp] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter OTp to Proceed");
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter a valid OTP");
    } else if (otp.length < 6) {
      toast.error("Enter 6 digit OTP ");
    } else {
      const data = {
        otp,
        email: location.state,
      };
      const response = await userVerify(data);
      if (response.status === 200) {
        console.log(response)
        setauth({
          ...auth,
          email: response.data.email,
          token:response.data.userToken,
          username:response.data.userName,
          address:response.data.address,
          phone:response.data.phone
        })
        localStorage.setItem("auth", JSON.stringify( response.data));
        
        setTimeout(() => {
          navigate( location.statepath ||"/");
        }, 1000);
      } else {
        toast.error(response.response.data.error);
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Please Enter OTP To Verify </h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="otp"> OTP</label>
              <input
                type="text"
                name="otp"
                id=""
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              ></input>
            </div>
            <button className="btn" onClick={LoginUser}>
              Submit OTP
            </button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Otp;
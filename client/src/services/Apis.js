import { commonRequest } from "./ApiCall.js";
// import { BACKEND_URL} from "./helper";
const BACKEND_URL = "http://localhost:8085";

export const registerfunction = async (data) => {
  return await commonRequest(
    "POST",
    `${BACKEND_URL}/api/v1/auth/register`,
    data
  ); // <-----methods, URL, body
};

export const sentOtpFunction = async (data) => {
  return await commonRequest(
    "POST",
    `${BACKEND_URL}/api/v1/auth/user/sendotp`,
    data
  );
};

export const userVerify = async (data) => {
  return await commonRequest(
    "POST",
    `${BACKEND_URL}/api/v1/auth/user/login`,
    data
  );
};

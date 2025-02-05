import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";


// registerAPI 
export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

// Login API
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_BASE_URL}/login`, reqBody);
};

export const updateUserAPI = async(reqbody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/user/edit`,reqbody,reqHeader)
}

// Fetch user details (profile)
export const getUserProfileAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_BASE_URL}/profile`, null, reqHeader);
};

// add education
export const addEducationAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVER_BASE_URL}/add-education`,reqBody,reqHeader);
  };

  export const getAllEducationAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_BASE_URL}/get-education`, {}, reqHeader);
  };
  
import axios from "axios";
import { API_Notification, SERVICE_URLS } from "../constants/config.js";
const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
//stop global loaderhere as api has returned something which can now be loaded
//we generally show loader when we make api request
//
axiosInstance.interceptors.response.use(
  function (response) {
    // Stop global loader here
    return processResponse(response);
  },
  function (error) {
    // Stop global loader here
    return Promise.reject(processReject(error)).catch((error) =>
      console.log(error)
    );
  }
);

//if success-> return { isSuccess:true, data:object}
//if fail -> return ( isfail:true , status :string , msg:string , code:int)

const processResponse = (response) => {
  if (response?.status === 200) {
    return {
      isSuccess: true,
      data: response.data,
    };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

const processReject = async (error) => {
  if (error.response) {
    //request made server responded but not status code is not 2.x.x its something else like 500 or so
    console.log(error.toJSON());
    return {
      isError: true,
      msg: API_Notification.responseFailure,
      code: error.response.status,
    };
  } else if (error.request) {
    //request made but no response .. mistake from server side
    // console.log(`line 65 apijs ${error} `);
    return {
      isError: true,
      msg: API_Notification.requestFailure,
      code: "",
    };
  } else {
    //something mistake from our e end ..no request was nmade.mistake in setting request
    console.log(error.toJSON());
    return {
      isError: true,
      msg: API_Notification.networkError,
      code: "",
    };
  }
};

//API Service call

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) => {
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProcess: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
  };
}
export { API };

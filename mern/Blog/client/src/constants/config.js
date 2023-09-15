//API_NOTIFICATION_MESSAGES
const API_Notification = {
  loading: {
    title: " API loading data",
    message: " data is being fetched",
  },
  success: {
    title: "success",
    message: "data successfully loaded",
  },
  responseFailure: {
    title: "error",
    message: "Error occured while trying to connect api, try again",
  },
  requestFailure: {
    title: "error",
    message: "error while requesting data from server",
  },
  networkError: {
    title: "error",
    message: "Unabel to connect , check internet",
  },
};
//api call as object
//MAking common api Service Url api call object
//need service call : {url : "/", method: "post/get/put/delete", params:true/false} ,query:true/false
//all service urls will be here . all urls
const SERVICE_URLS = {
  userSignup: {
    //endpoint
    url: "/signup",
    method: "post",
  },
};

export { API_Notification, SERVICE_URLS };

import React from "react";
import axios from "axios";
import qs from "qs";

const jwtToken = "";

// axios.default.paramsSerializer = (params) => {
//   return qs.stringify(params);
// };

// paramatter additional needed:)
const getAPI = async(url: string) => {
  await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

const postAPI = async (url: string, data: object) => {
  await axios
    .post(url, data, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const putAPI = async (url: string, data: object) => {
  await axios
    .post(url, data, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteAPI = async (url: string) => {
  await axios
    .post(url, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getAPI, postAPI, putAPI, deleteAPI }
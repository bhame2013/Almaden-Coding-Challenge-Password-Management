import axios from "axios";

const apiURL = "http://localhost:3000/";

function getAPIClient() {
  const api = axios.create({
    baseURL: apiURL,
  });

  return api;
}

export const api = getAPIClient();

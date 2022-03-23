import { handleResponse, handleError } from "../utils/apiUtils";

async function getList() {
  const requestOptions = {
    method: "GET",
  };

  return await fetch(
    "https://www.colr.org/json/colors/random/10",
    requestOptions
  ).then(handleResponse, handleError);
}

const listService = {
  getList,
};

export default listService;

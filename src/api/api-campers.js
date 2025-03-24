import axios from "axios";
import { defaultParams, filterParams } from "../utils/params";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

api.defaults.params = {};
api.defaults.params["limit"] = 4;

export const getCamperById = async (id) => {
  const { data } = await api.get(`/campers/${id}`);
  return data;
};

export const searchCampers = async (allParams = defaultParams, page = 1) => {
  const params = filterParams(allParams);
  const { data } = await api.get("/campers", { params: { ...params, page } });
  return data;
};

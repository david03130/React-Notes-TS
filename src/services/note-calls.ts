import axios, { AxiosResponse } from "axios";
import { Note } from "../components/note";

const baseUrl = "http://localhost:3001/api/notes";

const getAll = (): Promise<AxiosResponse<Note[]>> => {
  const request = axios.get<Note[]>(baseUrl);
  return request.then((response) => response);
};

const create = (note: Note) => {
  return axios.post<Note>(baseUrl, note);
};

export default { getAll, create };

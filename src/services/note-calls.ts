import axios from "axios";
import { Note } from "../components/note";

const baseUrl = "http://localhost:3001/api/notes";

const getAll = (): Promise<Note[]> => {
  const request = axios.get<Note[]>(baseUrl);
  return request.then((response) => response.data);
};

const create = (note: Note) => {
  return axios.post<Note>(baseUrl, note);
};

export default { getAll, create };

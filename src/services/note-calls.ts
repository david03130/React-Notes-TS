import axios, { AxiosResponse } from "axios";
import { Note } from "../components/note";

const baseUrl = "http://localhost:3001/api/notes";

const getAll = (): Promise<AxiosResponse<Note[]>> => {
  const request = axios.get<Note[]>(baseUrl);
  return request.then((response) => response);
};

const update = (note: Note): Promise<AxiosResponse<Note>> => {
  const request = axios.put<Note>(`${baseUrl}/${note.id}`, note);
  return request;
};

const create = (note: Note): Promise<AxiosResponse<Note>> => {
  const request = axios.post<Note>(baseUrl, note);
  return request;
};

export default { getAll, update, create };

import axios, { AxiosResponse } from "axios";
import { Note } from "../components/note";

const baseUrl = "http://localhost:3001/api/notes";

const getAll = (): Promise<AxiosResponse<Note[]>> => {
  const request = axios.get<Note[]>(baseUrl);
  // TODO: Esto no se podría ponder si el response?
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

const deleteNote = (noteId: string): Promise<AxiosResponse> => {
  const request = axios.delete(`${baseUrl}/${noteId}`);
  return request;
};

export default { getAll, update, create, deleteNote };

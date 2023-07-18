interface ResultData<T> {
  entities: T[];
  status: "idle" | "pending" | "complete" | "failed";
  error: string | null;
}

export default ResultData;

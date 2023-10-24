import express from "express";
import { actionRouter } from "./src/action/action";

export interface ActionPayload<T> {
  action: {
    name: string;
  };
  input: T;
  request_query: string;
  session_variables: Record<string, string>;
}

const app = express();

app.use(express.json());

const port = 3000;

app.use("/action", actionRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

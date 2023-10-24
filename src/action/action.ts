import express, { Router, Request, Response } from "express";
import { ActionPayload } from "../main";

const actionRouter: Router = express.Router();

interface loginArgs {
  username: string;
  password: string;
}

interface LoginResponse {
  AccessToken: string;
}

actionRouter.post(
  "",
  async (
    req: Request<object, object, ActionPayload<loginArgs>>,
    res: Response<LoginResponse>
  ) => {
    console.log(req.body);
    res.send({ AccessToken: "test" });
  }
);

export { actionRouter };

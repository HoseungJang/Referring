import express, { Request, Response, NextFunction, Application } from "express";
import morgan from "morgan";
import { TaskEither, tryCatch } from "fp-ts/TaskEither";

import { makeRouter } from "./routers";

const setup = async () => {
  const app = express();

  app.use(morgan("dev"));
  app.use(express.json());

  app.use("/api", makeRouter());

  app.use((req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
      message: "Not Found",
    });
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    return res.status(500).json({
      message: err.message,
    });
  });

  return app;
};

export const buildApp = (): TaskEither<Error, Application> => {
  return tryCatch(
    () => setup(),
    (err: Error) => new Error(err.message)
  );
};

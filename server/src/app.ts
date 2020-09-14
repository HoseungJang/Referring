import express, { Request, Response, NextFunction, Application } from "express";
import morgan from "morgan";
import { Either, tryCatch } from "fp-ts/Either";

import { makeRouter } from "./routers";

const setup = (): Application => {
  const app = express();

  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", makeRouter());

  app.use((req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
      message: "Not Found",
    });
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
      message: err.message,
    });
  });

  return app;
};

export const buildApp = (): Either<Error, Application> => {
  return tryCatch(
    () => setup(),
    (err: Error) => new Error(err.message)
  );
};

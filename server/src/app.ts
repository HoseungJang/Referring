import express, { Request, Response, NextFunction, Application } from "express";
import morgan from "morgan";
import { Either, right } from "fp-ts/Either";

export const buildApp = (): Either<Error, express.Application> => {
  const app = express();

  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: true }));

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

  return right<Error, Application>(app);
};

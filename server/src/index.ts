import "reflect-metadata";
import { Application } from "express";
import { pipe } from "fp-ts/pipeable";
import { fold } from "fp-ts/lib/Either";

import { setConnection } from "./connection";
import { buildApp } from "./app";

pipe(
  setConnection(),
  buildApp,
  fold(
    (err: Error) => console.error(err),
    (app: Application) => app.listen(3000)
  )
);

import { Application } from "express";
import { pipe } from "fp-ts/pipeable";
import { fold } from "fp-ts/lib/Either";

import { buildApp } from "./app";

pipe(
  buildApp(),
  fold(
    (err: Error) => console.error(err),
    (app: Application) => app.listen(3000)
  )
);

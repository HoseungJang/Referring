import "reflect-metadata";
import { Application } from "express";
import { pipe } from "fp-ts/pipeable";
import { of } from "fp-ts/lib/Task";
import { chain, fold } from "fp-ts/lib/TaskEither";

import { setConnection } from "./connection";
import { buildApp } from "./app";

pipe(
  setConnection(),
  chain(buildApp),
  fold(
    (err: Error) => of(console.error(err)),
    (app: Application) => {
      app.listen(3000);
      return of(((): void => {})());
    }
  )
)();

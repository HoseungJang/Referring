import { Router, Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { pipe } from "fp-ts/lib/pipeable";
import { of } from "fp-ts/lib/Task";
import { fromEither, chain, fold } from "fp-ts/lib/TaskEither";

import { makeLinkValidators } from "../../validators/link";

import { makeLinkService } from "../../services/link";

export const makeLinkRouter = (): Router => {
  const router = Router();

  const services = makeLinkService();
  const validators = makeLinkValidators();

  const create = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    return pipe(
      req,
      validators.createRequestValidator,
      fromEither,
      chain(services.create),
      fold(
        (err) => of(next(err)),
        (result) => of(res.status(200).json({ result }).end())
      )
    )();
  };

  const getList = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    return pipe(
      req,
      validators.getListRequestValidator,
      fromEither,
      chain(services.getList),
      fold(
        (err) => of(next(err)),
        (result) => of(res.status(200).json({ result }).end())
      )
    )();
  };

  const update = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    return pipe(
      req,
      validators.updateRequestValidator,
      fromEither,
      chain(services.update),
      fold(
        (err) => of(next(err)),
        (result) => of(res.status(200).json({ result }).end())
      )
    )();
  };

  const remove = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    return pipe(
      req,
      validators.removeRequestValidator,
      fromEither,
      chain(services.remove),
      fold(
        (err) => of(next(err)),
        (result) => of(res.status(200).json({ result }).end())
      )
    )();
  };

  return router
    .post("/", asyncHandler(create))
    .get("/list", asyncHandler(getList))
    .put("/", asyncHandler(update))
    .delete("/:id", asyncHandler(remove));
};

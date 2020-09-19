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

  const createLink = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    return pipe(
      req,
      validators.createLinkRequestValidator,
      fromEither,
      chain(services.createLink),
      fold(
        (err) => of(next(err)),
        (links) => of(res.status(200).json({ result: links }).end())
      )
    )();
  };

  const getLinkList = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    return pipe(
      req,
      validators.getLinkRequestValidator,
      fromEither,
      chain(services.getLinkList),
      fold(
        (err) => of(next(err)),
        (links) => of(res.status(200).json({ result: links }).end())
      )
    )();
  };

  return router
    .post("/", asyncHandler(createLink))
    .get("/list", asyncHandler(getLinkList));
};

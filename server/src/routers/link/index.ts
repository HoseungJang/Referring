import { Router, Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { pipe } from "fp-ts/lib/pipeable";
import { of } from "fp-ts/lib/Task";
import { fromEither, chain, fold } from "fp-ts/lib/TaskEither";

import { getLinkRequestValidator } from "../../validators/link"

import { makeLinkService } from "../../services/link";

export const makeLinkRouter = (): Router => {
  const router = Router();

  const linkServices = makeLinkService();

  const getLinkList = (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return pipe(
      req,
      getLinkRequestValidator,
      fromEither,
      chain(linkServices.getLinkList),
      fold(
        (err) => of(next(err)),
        (links) => of(res.status(200).json({ result: links }).end()),
      )
    )();
  };

  return router.get("/list", asyncHandler(getLinkList));
};

import { Router, Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { chain, fold } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";

import { getLinkRequestValidator } from "../../validators/link";

import { makeLinkService } from "../../services/link";

export const makeLinkRouter = (): Router => {
  const router = Router();

  const linkServices = makeLinkService();

  const getLinkList = (req: Request, res: Response, next: NextFunction) => {
    return pipe(
      getLinkRequestValidator(req),
      chain((dto) => linkServices.getLinkList(dto)),
      fold(
        (err: Error) => next(err),
        (links) => res.status(200).json({ result: links })
      )
    );
  };

  return router.get("/list", asyncHandler(getLinkList));
};

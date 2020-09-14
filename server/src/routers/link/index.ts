import { Router, Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { fold } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";

import { getLinkRequestValidator } from "../../validators/link";

export const makeLinkRouter = (): Router => {
  const router = Router();

  const getLinkList = (req: Request, res: Response, next: NextFunction) => {
    return pipe(
      getLinkRequestValidator(req),
      fold(
        (err: Error) => next(err),
        () => res.status(200).json({ message: "test" })
      )
    );
  };

  return router.get("/list", asyncHandler(getLinkList));
};

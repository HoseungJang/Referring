import { Request } from "express";
import { Either, left, right } from "fp-ts/lib/Either";

import { getLinkListRequestScheme } from "./shemes";

export const getLinkRequestValidator = (
  req: Request
): Either<Error, Request> => {
  const { params: path, query, body } = req;
  const result = getLinkListRequestScheme.is({ path, query, body });

  return result ? right(req) : left(new Error("invalid request"));
};

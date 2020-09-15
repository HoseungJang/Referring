import { Request } from "express";
import { Either, left, right } from "fp-ts/lib/Either";

import { getLinkListRequestScheme } from "./shemes";

import { getLinkListDTO } from "../../services/link/link.dto";

export const getLinkRequestValidator = (
  req: Request
): Either<Error, getLinkListDTO> => {
  const { params: path, query, body } = req as any;
  const result = getLinkListRequestScheme.is({ path, query, body });

  return result
    ? right(query as getLinkListDTO)
    : left(new Error("invalid request"));
};

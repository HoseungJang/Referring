import { Request } from "express";
import { Either, left, right } from "fp-ts/lib/Either";

import { makeLinkRequestSchemes } from "./shemes";

import { createLinkDTO, getLinkListDTO } from "../../interfaces/link.dto";

export const makeLinkValidators = () => {
  const schemes = makeLinkRequestSchemes();

  const createLinkRequestValidator = (
    req: Request
  ): Either<Error, createLinkDTO> => {
    const { params: path, query, body } = req as any;
    const result = schemes.createLinkRequestScheme.is({ path, query, body });

    return result
      ? right(body as createLinkDTO)
      : left(new Error("invalid request"));
  };

  const getLinkRequestValidator = (
    req: Request
  ): Either<Error, getLinkListDTO> => {
    const { params: path, query, body } = req as any;
    const result = schemes.getLinkListRequestScheme.is({ path, query, body });

    return result
      ? right(query as getLinkListDTO)
      : left(new Error("invalid request"));
  };

  return {
    createLinkRequestValidator,
    getLinkRequestValidator,
  };
};

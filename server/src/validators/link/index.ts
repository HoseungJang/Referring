import { Request } from "express";
import { Either, left, right } from "fp-ts/lib/Either";

import { makeLinkRequestSchemes } from "./shemes";

import {
  createLinkDTO,
  getLinkListDTO,
  updateLinkDTO,
} from "../../interfaces/link.dto";

export const makeLinkValidators = () => {
  const schemes = makeLinkRequestSchemes();

  const createRequestValidator = (
    req: Request
  ): Either<Error, createLinkDTO> => {
    const { params: path, query, body } = req as any;
    const result = schemes.createLinkRequestScheme.is({ path, query, body });

    return result
      ? right(body as createLinkDTO)
      : left(new Error("invalid request"));
  };

  const getListRequestValidator = (
    req: Request
  ): Either<Error, getLinkListDTO> => {
    const { params: path, query, body } = req as any;
    const result = schemes.getLinkListRequestScheme.is({ path, query, body });

    return result
      ? right(query as getLinkListDTO)
      : left(new Error("invalid request"));
  };

  const updateRequestValidator = (
    req: Request
  ): Either<Error, updateLinkDTO> => {
    const { params: path, query, body } = req as any;
    const result = schemes.updateLinkRequestScheme.is({ path, query, body });

    return result
      ? right(body as updateLinkDTO)
      : left(new Error("invalid request"));
  };

  return {
    createRequestValidator,
    getListRequestValidator,
    updateRequestValidator,
  };
};

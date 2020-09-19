import { Request } from "express";
import { Either, left, right } from "fp-ts/lib/Either";

import { makeLinkRequestSchemes } from "./shemes";

import {
  createDTO,
  getListDTO,
  updateDTO,
  removeDTO,
} from "../../interfaces/link.dto";

export const makeLinkValidators = () => {
  const schemes = makeLinkRequestSchemes();

  const createRequestValidator = (req: Request): Either<Error, createDTO> => {
    const { params: path, query, body } = req as any;
    const result = schemes.createLinkRequestScheme.is({ path, query, body });

    return result
      ? right(body as createDTO)
      : left(new Error("invalid request"));
  };

  const getListRequestValidator = (req: Request): Either<Error, getListDTO> => {
    const { params: path, query, body } = req as any;
    const result = schemes.getLinkListRequestScheme.is({ path, query, body });

    return result
      ? right(query as getListDTO)
      : left(new Error("invalid request"));
  };

  const updateRequestValidator = (req: Request): Either<Error, updateDTO> => {
    const { params: path, query, body } = req as any;
    const result = schemes.updateLinkRequestScheme.is({ path, query, body });

    return result
      ? right(body as updateDTO)
      : left(new Error("invalid request"));
  };

  const removeRequestValidator = (req: Request): Either<Error, removeDTO> => {
    const { params: path, query, body } = req as any;
    const result = schemes.removeLinkRequestScheme.is({ path, query, body });

    return result
      ? right(path as removeDTO)
      : left(new Error("invalid request"));
  };

  return {
    createRequestValidator,
    getListRequestValidator,
    updateRequestValidator,
    removeRequestValidator,
  };
};

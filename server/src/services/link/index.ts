import { TaskEither } from "fp-ts/TaskEither";
import { DeleteResult } from "typeorm";

import { Link } from "../../entities/link";

import { ogs } from "../../util/ogs";

import {
  createDTO,
  getListDTO,
  removeDTO,
  updateDTO,
} from "../../interfaces/link.dto";

import { makeLinkRepositories } from "../../repositories/link";
import { pipe } from "fp-ts/lib/pipeable";
import { fold, left } from "fp-ts/lib/TaskEither";

export const makeLinkService = () => {
  const repository = makeLinkRepositories();

  const create = (dto: createDTO): TaskEither<Error, Link> => {
    return pipe(
      ogs(dto.link),
      fold(
        (err: Error) => left(err),
        ({ result }) =>
          result.success
            ? repository.create({
                img: result.ogImage ? result.ogImage.url : null,
                ...dto,
              })
            : left(new Error("invalid link"))
      )
    );
  };

  const getList = (dto: getListDTO): TaskEither<Error, Link[]> => {
    const { page, limit } = dto;
    const skip = Number(page) * Number(limit);
    const take = Number(limit);

    return repository.getList({ skip, take });
  };

  const update = (dto: updateDTO): TaskEither<Error, Link> => {
    return pipe(
      ogs(dto.link),
      fold(
        (err: Error) => left(err),
        ({ result }) =>
          result.success
            ? repository.update({
                img: result.ogImage ? result.ogImage.url : null,
                ...dto,
              })
            : left(new Error("invalid link"))
      )
    );
  };

  const remove = (dto: removeDTO): TaskEither<Error, DeleteResult> => {
    return repository.remove(dto);
  };

  return {
    create,
    getList,
    update,
    remove,
  };
};

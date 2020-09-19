import { TaskEither } from "fp-ts/TaskEither";
import { DeleteResult } from "typeorm";

import { Link } from "../../entities/link";

import {
  createDTO,
  getListDTO,
  removeDTO,
  updateDTO,
} from "../../interfaces/link.dto";

import { makeLinkRepositories } from "../../repositories/link";

export const makeLinkService = () => {
  const repository = makeLinkRepositories();

  const create = (dto: createDTO): TaskEither<Error, Link> => {
    return repository.create(dto);
  };

  const getList = (dto: getListDTO): TaskEither<Error, Link[]> => {
    const { page, limit } = dto;
    const skip = Number(page) * Number(limit);
    const take = Number(limit);

    return repository.getList({ skip, take });
  };

  const update = (dto: updateDTO): TaskEither<Error, Link> => {
    return repository.update(dto);
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

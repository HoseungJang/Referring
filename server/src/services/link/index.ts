import { TaskEither } from "fp-ts/TaskEither";

import { Link } from "../../entities/link";

import {
  createLinkDTO,
  getLinkListDTO,
  updateLinkDTO,
} from "../../interfaces/link.dto";

import { makeLinkRepositories } from "../../repositories/link";

export const makeLinkService = () => {
  const repository = makeLinkRepositories();

  const create = (dto: createLinkDTO): TaskEither<Error, Link> => {
    return repository.create(dto);
  };

  const getList = (dto: getLinkListDTO): TaskEither<Error, Link[]> => {
    const { page, limit } = dto;
    const skip = Number(page) * Number(limit);
    const take = Number(limit);

    return repository.getList({ skip, take });
  };

  const update = (dto: updateLinkDTO): TaskEither<Error, Link> => {
    return repository.update(dto);
  };

  return {
    create,
    getList,
    update,
  };
};

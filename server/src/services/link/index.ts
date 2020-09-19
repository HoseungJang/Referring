import { TaskEither } from "fp-ts/TaskEither";

import { Link } from "../../entities/link";

import { createLinkDTO, getLinkListDTO } from "../../interfaces/link.dto";

import { makeLinkRepositories } from "../../repositories/link";

export const makeLinkService = () => {
  const repository = makeLinkRepositories();

  const createLink = (dto: createLinkDTO): TaskEither<Error, Link> => {
    return repository.createLink(dto);
  };

  const getLinkList = (dto: getLinkListDTO): TaskEither<Error, Link[]> => {
    const { page, limit } = dto;
    const skip = Number(page) * Number(limit);
    const take = Number(limit);

    return repository.getLinkList({ skip, take });
  };

  return {
    createLink,
    getLinkList,
  };
};

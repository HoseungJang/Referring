import { TaskEither } from "fp-ts/TaskEither";

import { Link } from "../../entities/link";

import { getLinkListDTO } from "./link.dto";

import { makeLinkRepositories } from "../../repositories/link";

export const makeLinkService = () => {
  const repository = makeLinkRepositories();

  const getLinkList = (dto: getLinkListDTO): TaskEither<Error, Link[]> => {
    return repository.getLinkList(dto);
  };

  return {
    getLinkList,
  };
};

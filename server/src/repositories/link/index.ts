import { getManager } from "typeorm";
import { TaskEither, tryCatch } from "fp-ts/TaskEither";

import { Link } from "../../entities/link";

import { getLinkListDTO } from "../../services/link/link.dto";

export const makeLinkRepositories = () => {
  const manager = getManager();

  const getLinkList = ({
    page,
    limit,
  }: getLinkListDTO): TaskEither<Error, Link[]> => {
    const skip = Number(page) * Number(limit);
    const take = Number(limit);

    return tryCatch(
      () => manager.getRepository(Link).find({ skip, take }),
      () => new Error("server error")
    );
  };

  return {
    getLinkList,
  };
};

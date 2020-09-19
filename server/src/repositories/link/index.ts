import { getManager } from "typeorm";
import { TaskEither, tryCatch } from "fp-ts/TaskEither";

import { Link } from "../../entities/link";

export const makeLinkRepositories = () => {
  const manager = getManager();

  const createLink = ({ link }): TaskEither<Error, Link> => {
    return tryCatch(
      () => manager.getRepository(Link).save({ link }),
      (err: Error) => err
    );
  };

  const getLinkList = ({ skip, take }): TaskEither<Error, Link[]> => {
    return tryCatch(
      () => manager.getRepository(Link).find({ skip, take }),
      (err: Error) => err
    );
  };

  return {
    createLink,
    getLinkList,
  };
};

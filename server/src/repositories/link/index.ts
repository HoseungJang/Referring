import { DeleteResult, getManager } from "typeorm";
import { TaskEither, tryCatch } from "fp-ts/TaskEither";

import { Link } from "../../entities/link";

export const makeLinkRepositories = () => {
  const manager = getManager();

  const create = ({ img, name, link }): TaskEither<Error, Link> => {
    return tryCatch(
      () => manager.getRepository(Link).save({ img, name, link }),
      (err: Error) => err
    );
  };

  const getList = ({ skip, take }): TaskEither<Error, Link[]> => {
    return tryCatch(
      () => manager.getRepository(Link).find({ skip, take }),
      (err: Error) => err
    );
  };

  const update = ({ id, img, name, link }): TaskEither<Error, Link> => {
    return tryCatch(
      () => manager.getRepository(Link).save({ id, img, name, link }),
      (err: Error) => err
    );
  };

  const remove = ({ id }): TaskEither<Error, DeleteResult> => {
    return tryCatch(
      () => manager.getRepository(Link).delete(id),
      (err: Error) => err
    );
  };

  return {
    create,
    getList,
    update,
    remove,
  };
};

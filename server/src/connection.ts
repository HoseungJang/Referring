import { createConnection } from "typeorm";
import { TaskEither, tryCatch } from "fp-ts/TaskEither";

export const setConnection = (): TaskEither<Error, void> => {
  return tryCatch(
    async () => {
      await createConnection();
    },
    (err: Error) => err
  );
};

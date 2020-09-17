import { createConnection } from "typeorm";

export const setConnection = async () => {
  await createConnection();
};

import { Router } from "express";

import { makeLinkRouter } from "./link";

export const makeRouter = () => {
  const router = Router();

  return router.use("/link", makeLinkRouter());
};

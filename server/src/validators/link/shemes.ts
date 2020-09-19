import { number } from "io-ts";
import * as t from "io-ts/Type";

export const makeLinkRequestSchemes = () => {
  const createLinkRequestScheme = t.type({
    path: t.type({}),
    query: t.type({}),
    body: t.type({
      link: t.string,
    }),
  });

  const getLinkListRequestScheme = t.type({
    path: t.type({}),
    query: t.type({
      page: t.string,
      limit: t.string,
    }),
    body: t.type({}),
  });

  const updateLinkRequestScheme = t.type({
    path: t.type({}),
    query: t.type({}),
    body: t.type({
      id: t.number,
      link: t.string,
    }),
  });

  const removeLinkRequestScheme = t.type({
    path: t.type({ id: t.string }),
    query: t.type({}),
    body: t.type({}),
  });

  return {
    createLinkRequestScheme,
    getLinkListRequestScheme,
    updateLinkRequestScheme,
    removeLinkRequestScheme,
  };
};

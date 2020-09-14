import * as t from "io-ts/Type";

export const getLinkListRequestScheme = t.type({
  path: t.type({}),
  query: t.type({
    page: t.string,
    limit: t.string,
  }),
  body: t.type({}),
});

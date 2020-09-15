import { pipe } from "fp-ts/pipeable";
import { Either, fold, left, right } from "fp-ts/Either";

import { getLinkListDTO } from "./link.dto";

export const makeLinkService = () => {
  const getLinkList = (dto: getLinkListDTO): Either<Error, string[]> => {
    // for testing
    const links = [
      { id: 0, link: "naver.com" },
      { id: 1, link: "google.com" },
    ];

    return pipe(
      links.map(({ link }) => link),
      right,
      fold(
        (err: Error) => left(err),
        (links: string[]) => right(links)
      )
    );
  };

  return {
    getLinkList,
  };
};

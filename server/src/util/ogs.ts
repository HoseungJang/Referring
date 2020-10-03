import { tryCatch } from "fp-ts/lib/TaskEither";
import _ogs from "open-graph-scraper";

export const ogs = (url: string) =>
  tryCatch(
    () => _ogs({ url }),
    () => new Error("invalid link")
  );

import * as express from "express";
import * as morgan from "morgan";

(() => {
  const app = express();

  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    return res.status(404).json({
      message: "Not Found",
    });
  });

  app.listen(3000);
})();

import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV == 'development') {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(
      `[ DEBUG ] (${req.method} ${res.statusCode}) ${req.originalUrl}`
    );
    next();
  });
}

app.listen(port, () => {
  console.log(`[ INFO ] Server is listening on http://localhost:${port}/`);
});

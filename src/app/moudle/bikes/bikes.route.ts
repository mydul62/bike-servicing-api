import express, { Request, Response } from 'express';

const router = express.Router();

router.get("/s", (req: Request, res: Response) => {
  res.send({
    message: 'gdsagd'
  });
});

export const bikeRoute= router;

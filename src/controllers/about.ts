import { Request, Response } from "express";

export const getAbout = (req: Request, res: Response) => {
  res.send("About");
};
